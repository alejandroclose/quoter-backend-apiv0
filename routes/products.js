var express = require("express");
var router = express.Router();

const Product = require("../models/product");

/* GET product list. */

router.get("/", function(req, res, next) {
  Product.find({}, function(err, productList) {
    if (err) {
      res.json(err);
    } else {
      res.status(200).json(productList);
    }
  });
});

// /* POST new product. */

router.post("/new", function(req, res, next) {
  console.log("body", req.body);

  var newProduct = new Product({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    price: req.body.price,
    currency: req.body.currency,
    unit: req.body.unit
  });

  //Create new product 

  newProduct.save(function(err) {
    if (err) {
      res.json(err);
    } else {
      res.json({
        message: "Product created",
        product: newProduct
      });
    }
  });
});

//Assign product to user (use .save) 

// /* GET product. */

router.get("/:id", function(req, res, next) {
  var id = req.params.id;

  Product.findById(id, function(err, product) {
    if (err) {
      res.json(err);
    } else {
      res.json(product);
    }
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

  Product.findByIdAndUpdate(id, productToUpdate, function(err) {
    if (err) {
      res.json(err);
    } else {
      res.json({ message: "Product updated" });
    }
  });
});

/* Delete product. */

router.delete('/:id', function(req, res, next) {
  var id = req.params.id

  Product.remove({ _id: id }, function(err){
    if(err) {
      res.json(err);
    } else {
      res.json({ message: "Product deleted" });
    }
  })
})


module.exports = router;
