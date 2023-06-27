const mongoose = require('mongoose')

const ChocolistSchema = new mongoose.Schema(
    {
        image: {type: String, required: true},
        name: {type: String, required: true}
    },  {timestamps: true}
)

const Chocolist = mongoose.model("Chocolist", ChocolistSchema)

module.exports = Chocolist