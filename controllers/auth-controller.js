const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { user } = require("../models");

//Login
router.post("/login", async(req, res) => {
    try{
        const getUser = await user.findOne({token_id: req.body.token_id})
        // const getUser = await user.find({})
        if (!getUser) {
            getUser = await user.create({token_id: req.body.token_id})
        }
        res.status(200).json(getUser);
    } catch (err) {
        res.status(400).json({ error: err})
    }
})

module.exports = router;