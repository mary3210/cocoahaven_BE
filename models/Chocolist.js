const mongoosse = require('mongoose')

const ChocolistSchema = new mongoose.Schema(
    {
        image: {type: String, required: true},
        name: {type: String, required: true}
    },  {timestamps: true}
)

const chocolist.model("Chocolist", ChocolistSchema)