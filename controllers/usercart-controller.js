const express = require("express");
const router = express.Router();
const { Chocolist } = require('../models');
const { User } = require("../models");

router.get("/allItems", async (req, res) => {
    try {
      console.log("a");
      const allUserCart = await User.find({});
      console.log(allUserCart)
      res.status(200).json(allUserCart);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  });
  
  router.get("/:id", async (req, res) => {
    try {
      const foundUserCart = await User.findById(req.params.id).populate("chocolate_id")
      res.status(200).json(foundUserCart)
      } catch (err) {
          res.status(400).json({ error: err })
      }
    })
  
  router.post("/createCart", async (req, res) => {
    console.log(req.body);
    try {
      const newUserCart= await User.create(req.body);
      res.status(201).json(newBestSeller);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  router.post("/:id", async (req, res) => {
    try {
      const updatedUserCart = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(200).json(updatedUserCart);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  });
  router.post("/:id", async (req, res) => {
    try {
      const deletedUserCart = await Chocolist.findByIdAndDelete(req.params.id);
      res.status(200).json(deletedUserCart);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  });
  
  module.exports = router;