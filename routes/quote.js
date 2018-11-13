const express = require("express");
const router = express.Router();

const Quote = require("../models/quote");
const Product = require("../models/product");

router.get("/:id", (req, res, next) => {
  const id= req.params.id;
  console.log('hola hola')
  Quote.findById(id)
  .then(quote => {
    res.status(200);
    res.json(quote);
  })
  .catch(err => {
    res.status(500);
    res.json(err);
  });
});

router.get("/product/:id", (req, res, next) => {
  var id = req.params.id;

  Product.findById(id)
    .then(product => {
      res.status(200);
      res.json(product);
    })
    .catch(err => {
      res.status(500);
      res.json(err);
    });
});

module.exports = router;

