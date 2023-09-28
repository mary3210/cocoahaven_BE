const mongoose = require("mongoose");

const ChocolistSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number },
    detail: { type: String },
    chocolate_type: { type: String },
  },
  { timestamps: true }
);

const Chocolist = mongoose.model("Chocolist", ChocolistSchema);

module.exports = Chocolist;
