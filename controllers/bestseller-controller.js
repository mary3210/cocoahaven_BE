const express = require("express");
const router = express.Router();
const { Chocolist } = require("../models");
const { BestSeller } = require("../models");
const db = require("../models");

router.get("/allItems", async (req, res) => {
  try {
    console.log("a");
    const allBestSeller = await BestSeller.find({});
    console.log(allBestSeller)
    res.status(200).json(allBestSeller);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const foundBestSeller = await BestSeller.findById(req.params.id).populate("chocolate_id")
    res.status(200).json(foundBestSeller)
    } catch (err) {
        res.status(400).json({ error: err })
    }
  })

router.post("/createItem", async (req, res) => {
  console.log(req.body);
  try {
    const newBestSeller= await BestSeller.create(req.body);
    res.status(201).json(newBestSeller);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/:id", async (req, res) => {
  try {
    const updatedBestSeller = await BestSeller.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedBestSeller);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const deletedBestSeller = await Chocolist.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedBestSeller);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

module.exports = router;
