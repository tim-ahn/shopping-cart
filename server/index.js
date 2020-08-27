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
    select "cartId", "createdAt"
      from "carts"
  `;
  db.query(sql)
    .then(result => res.json([]))
    .catch(err => next(err));
});

// post request endpoint for cart
app.post('/api/cart', (req, res, next) => {
  const sql = 'poop';
  if (isNaN(req.body.productId)) {
    res.status(400).json({ error: 'productId is invalid' });
  } else {
    db.query(sql)
      .then()
      .then()
      .then()
      .catch(err => next(err));
  }

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
