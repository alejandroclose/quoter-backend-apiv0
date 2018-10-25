var express = require("express");
var router = express.Router();

const Product = require("../models/product");
const User = require("../models/user");

const { isLoggedIn } = require('../helpers/is-logged');

/* GET product list. */

router.use(isLoggedIn());

router.get("/", (req, res, next) => {
  Product.find({})
    .then(products => {
      res.status(200);
      res.json(products);
    })
    .catch(err => {
      res.status(500);
      res.json(err);
    });
});

// /* POST new product. */

router.post("/", (req, res, next) => {
  const user = req.session.currentUser;
  const newProduct = new Product({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    price: req.body.price,
    currency: req.body.currency,
    unit: req.body.unit,
    owner: user._id
  });
  //Create new product in db

  newProduct.save()
    .then(() => {
      res.json({
        message: "Product created",
        product: newProduct
      });
    })
    .catch(err => {
      res.status(200);
      res.json(err);
    });
});

//Assign product to user (use .save)

// /* GET product. */

router.get("/:id", (req, res, next) => {
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

// /* Edit product. */

router.put("/:id", function(req, res, next) {
  var id = req.params.id;
  var productToUpdate = {
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    price: req.body.price,
    currency: req.body.currency,
    unit: req.body.unit
  };

  Product.findByIdAndUpdate(id, productToUpdate)
    .then(() => {
      res.status(200);
      res.json({
        message: "Product updated"
      });
    })
    .catch(err => {
      res.status(500);
      res.json(err);
    });
});

/* Delete product. */

router.delete("/:id", (req, res, next) => {
  var id = req.params.id;

  Product.findByIdAndDelete(id)
  .then((result) => {
    res.status(200)
    res.json(result);
  })
  .catch(() => {
    res.status(500)
    res.json(err);
  });
});


module.exports = router;
