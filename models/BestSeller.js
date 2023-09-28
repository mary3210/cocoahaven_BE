const mongoose = require("mongoose");

const BestSellerSchema = new mongoose.Schema(
  {
    chocolate_id: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Chocolist",
      },
    ],
  },
  { timestamps: true }
);

const BestSeller = mongoose.model("BestSeller", BestSellerSchema);

module.exports = BestSeller;
