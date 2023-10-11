const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    token_id: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    cart: {
      type: mongoose.Types.ObjectId,
      ref: "Chocolist",
      quantity: {type: Number},
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
