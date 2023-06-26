const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const chocolistController = require('./controllers/chocolist-controller')

