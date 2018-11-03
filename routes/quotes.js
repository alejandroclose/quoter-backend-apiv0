const express = require("express");
const router = express.Router();

const Quote = require("../models/quote");
const User = require("../models/user");

const {isLoggedIn} = require('../helpers/is-logged');

/* GET quotes list. */

router.use(isLoggedIn());

router.get("/", (req, res, next) => {
  Quote.find({})
  .then(quotes => {
    res.status(200);
    res.json(quotes);
  })
  .catch(err => {
    res.status(500);
    res.json(err);
  });
});

/* POST new quote. */

router.post("/", (req, res, next) => {
  const user = req.session.currentUser;
  const newQuote = new Quote ({
    name: req.body.name,
    customer_name: req.body.customer_name,
    customer_address: req.body.customer_address,
    customer_email: req.body.customer_email,
    products: req.body.products, //Where do I get the products from?
    owner: user._id
  });

  newQuote.save()
  .then(()=>{
    res.json({
      message: "Quote created",
      quote: newQuote
    });
  })
  .catch(err => {
    res.status(200);
    res.json(err);
  })
});

/*GET Quote. */

router.get("/:id", (req, res, next) => {
  var id= req.params.id;

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

/* PUT Quote */

router.put("/:id", (req, res, next) => {
  var id = req.params.id;
  var quoteToUpdate = {
    name: req.body.name,
    customer_name: req.body.customer_name,
    customer_address: req.body.customer_address,
    customer_email: req.body.customer_email,
    products: req.body, //Where do I get the products from?
  };

  Quote.findByIdAndUpdate(id, quoteToUpdate)
  .then(() => {
    res.status(200);
    res.json({
      message: "Quote updated"
    });
  })
  .catch(err => {
    res.status(500);
    res.json(err);
  });
});

/*Delete Quote */

router.delete("/:id", (req, res, next) => {
  var id= req.params.id;

  Quote.findByIdAndDelete(id)
  .then(result => {
    res.status(200);
    res.json(result)
  })
  .catch(() => {
    res.status(500);
    res.json(err);
  });
});

module.exports = router;