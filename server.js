const express = require("express");
const cors = require("cors");
const app = express();
const chocolistController = require("./controllers/chocolist-controller");
const authController = require("./controllers/auth-controller");
const bestsellerController = require('./controllers/bestseller-controller')
const usercartController = require('./controllers/usercart-controller') 

require("dotenv").config();
require("./config/db.connection");

app.use(express.json());

app.use(cors());

app.use("/usercart", usercartController)

app.use("/posts", chocolistController);

app.use("/bestseller", bestsellerController)

app.use("/auth", authController);
// app.use("/login", (req, res) => {
//   res.send({
//     token: "test123",
//   });
// });
// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: 'a long randomly-generated string stored in env',
//   baseURL: 'http://localhost:8000',
//   clientID: 'G8jdMPzkwiPGXvgtygaQA0NdGpj3YALQ',
//   issuerBaseURL: 'https://dev-qtfn2uasllvg3780.us.auth0.com',
// };
// app.use(auth(config));
// app.get('/', (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
