const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const chocolistController = require('./controllers/chocolist-controller')

require('dotenv').config()
require('./config/db.connection')

app.use(express.json())

app.use(cors())

app.use('/posts', chocolistController)

app.get("/", (req, res) => {
    res.send("Hello World");
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Listening on port ${ PORT}`));