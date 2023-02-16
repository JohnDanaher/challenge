const router = require("express").Router();
const Phone = require("../models/Phone.model");
const phones = require("../phones");

router.get("/phones", (req, res) => {
  Phone.insertMany(phones)
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.get("/phones/:id", (req, res) => {
  const { id } = req.params;

  Phone.findOne({ id: id })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;
