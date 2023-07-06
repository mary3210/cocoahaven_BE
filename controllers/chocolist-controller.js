const express = require("express");
const router = express.Router();
const { Chocolist } = require('../models');
const db = require("../models");

router.get("/", async (req, res) => {
  try {
    console.log("a");
    const allChocolist = await Chocolist.find({});
    console.log(allChocolist)
    res.status(200).json(allChocolist);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

router.post("/", async (req, res) => {
  console.log(req);
  try {
    const newChocolist = await Chocolist.create(req.body);
    res.status(201).json(newChocolist);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedChocolist = await Chocolist.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedChocolist);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});
router.delete("/: id", async (req, res) => {
  try {
    const deletedChocolist = await Chocolist.findByDelete(req.params.id);
    res.status(200).json(deletedChocolist);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

module.exports = router;
