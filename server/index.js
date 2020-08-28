require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/products', (req, res, next) => {
  const sql = `
    select "productId",
           "name",
           "price",
           "image",
           "shortDescription"
       from "products";
  `;

  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

// get request endpoint for product details
app.get('/api/products/:productId', (req, res, next) => {
  const productId = req.params.productId;
  const sql = `
    select *
      from "products"
      where "productId" = $1
  `;
  const params = [productId];
  db.query(sql, params)
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

// get request endpoint for cart
app.get('/api/cart', (req, res, next) => {
  const sql = `
    select "c"."cartItemId",
       "c"."price",
       "p"."productId",
       "p"."image",
       "p"."name",
       "p"."shortDescription"
      from "cartItems" as "c"
      join "products" as "p" using ("productId")
      where "c"."cartId" = $1
  `;
  const params = [req.session.cartId];

  if (!req.session.cartId) {
    res.json([]);
  } else {
    db.query(sql, params)
      .then(result => res.json(result.rows))
      .catch(err => next(err));
  }
});

// post request endpoint for cart
app.post('/api/cart', (req, res, next) => {

  const productId = parseInt(req.body.productId);

  if (isNaN(productId) || productId < 1) {
    res.status(400).json({ error: 'productId is invalid' });
  }

  const priceQuery = `
    select "price"
      from "products"
      where "productId" = $1;
  `;
  const params = [productId];

  const insertCartQuery = `
    insert into "carts" ("cartId", "createdAt")
      values (default, default)
      returning "cartId"
  `;

  const insertCartItemsQuery = `
    insert into "cartItems" ("cartId", "productId", "price")
      values ($1, $2, $3)
      returning "cartItemId"
  `;

  const cartInfoQuery = `
    select "c"."cartItemId",
           "c"."price",
           "p"."productId",
           "p"."image",
           "p"."name",
           "p"."shortDescription"
      from "cartItems" as "c"
      join "products" as "p" using ("productId")
    where "c"."cartItemId" = $1
  `;

  db.query(priceQuery, params)
    .then(priceResult => {
      if (priceResult.rows.length < 1) {
        throw new ClientError('product does not exist', 400);
      } else {
        if (req.session.cartId) {
          return { cartId: req.session.cartId, price: priceResult.rows[0].price };
        }
        return db.query(insertCartQuery)
          .then(insertCartResult => {
            return { cartId: insertCartResult.rows[0].cartId, price: priceResult.rows[0].price };
          });
      }
    })
    .then(cartResult => {
      req.session.cartId = cartResult.cartId;
      const cartItemsParams = [cartResult.cartId, productId, cartResult.price];
      return db.query(insertCartItemsQuery, cartItemsParams)
        .then(cartItemsResult => cartItemsResult.rows[0]);
    })
    .then(itemIdResult => {
      const cartInfoParams = [itemIdResult.cartItemId];
      return db.query(cartInfoQuery, cartInfoParams)
        .then(cartInfoResult => {
          res.status(201).json(cartInfoResult.rows[0]);
        });
    })
    .catch(err => next(err));

});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
