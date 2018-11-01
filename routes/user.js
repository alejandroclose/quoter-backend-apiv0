const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/user');
const Product = require('../models/product');
const { isLoggedIn } = require('../helpers/is-logged');

router.get('/', isLoggedIn(), (req, res, next) => {
  const user = req.session.currentUser;

  User.findById(user._id)
    .then((result) => {
      res.status(200);
      res.json(result);
    })
    .catch((error) => {
      res.status(500);
      res.json(error);
    })
})

router.get('/products', isLoggedIn(), (req, res, next) => {
  const user = req.session.currentUser;

  Product.find({ owner: user._id })
    .then((result) => {
      res.status(200);
      res.json(result);
    })
    .catch((error) => {
      res.status(500);
      res.json(error);
    })
})

router.get('/quotes', isLoggedIn(), (req, res, next) => {
  const user = req.session.currentUser;

  Quote.find({ owner: user._id})
  .then((result) => {
    res.status(200);
    res.json(result)
  })
  .catch((error) => {
    res.status(500);
    res.json(error);
  })
})

module.exports = router;