const express = require("express");
const router = express.Router();
const { Chocolist } = require('../models');

router.get("/allItems", async (req, res) => {
  try {
    console.log("a");
    const allChocolist = await Chocolist.find({});
    console.log(allChocolist)
    res.status(200).json(allChocolist);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});


router.post("/getChocolate", async (req, res) => {
  try{
    console.log(req);
    const safewords = {
      "milk chocolate": "milk chocolate",
      "dark chocolate": "dark chocolate"
    };

    const getChocoList = await Chocolist.find().where('chocolate_type').equals(safewords[req.body.chocolate_type]);
    res.status(200).json(getChocoList);
  }
  catch(err){
    res.status(400).json({error: err});
  }
})

router.post("/createItem", async (req, res) => {
  console.log(req);
  try {
    const newChocolist = await Chocolist.create(req.body);
    res.status(201).json(newChocolist);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/getOneChoco/:id", async (req, res) => {
  try {
    const oneChocolist = await Chocolist.findById(
      req.params.id);
    res.status(200).json(oneChocolist);
  } catch (err) {
    res.status(400).json({ error: err });
  }});


router.post("/:id", async (req, res) => {
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
router.delete("/:id", async (req, res) => {
  try {
    const deletedChocolist = await Chocolist.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedChocolist);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

module.exports = router;
