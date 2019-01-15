const express = require("express");
const router = express.Router();

const Service = require("../models/service");
const User = require("../models/user");

const { isLoggedIn } = require("../helpers/is-logged");

/* GET service list. */

router.use(isLoggedIn());

router.get("/", (req, res, next) => {
  Service.find({})
    .then(services => {
      res.status(200);
      res.json(services);
    })
    .catch(err => {
      res.status(500);
      res.json(err);
    });
});

// /* POST new service. */

router.post("/", (req, res, next) => {
  const user = req.session.currentUser;
  const newService = new Service({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    price: req.body.price,
    currency: req.body.currency,
    unit: req.body.unit,
    owner: user._id
  });
  //Create new service in db

  newService
    .save()
    .then(() => {
      res.json({
        message: "Service created",
        service: newService
      });
    })
    .catch(err => {
      res.status(200);
      res.json(err);
    });
});

// /* GET service. */

router.get("/:id", (req, res, next) => {
  var id = req.params.id;

  Service.findById(id)
    .then(service => {
      res.status(200);
      res.json(service);
    })
    .catch(err => {
      res.status(500);
      res.json(err);
    });
});

// /* Edit service. */

router.put("/:id", (req, res, next) => {
  var id = req.params.id;
  var serviceToUpdate = {
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    price: req.body.price,
    currency: req.body.currency,
    unit: req.body.unit
  };

  Service.findByIdAndUpdate(id, serviceToUpdate)
    .then(() => {
      res.status(200);
      res.json({
        message: "Service updated"
      });
    })
    .catch(err => {
      res.status(500);
      res.json(err);
    });
});

/* Delete service. */

router.delete("/:id", (req, res, next) => {
  var id = req.params.id;

  Service.findByIdAndDelete(id)
    .then(result => {
      res.status(200);
      res.json(result);
    })
    .catch(() => {
      res.status(500);
      res.json(err);
    });
});

module.exports = router;
