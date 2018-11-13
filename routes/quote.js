const express = require("express");
const router = express.Router();

const Quote = require("../models/quote");

router.get("/:id", (req, res, next) => {
  const id= req.params.id;

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