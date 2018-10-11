const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// const router = express.Router();
const router = require('./routes/routes.js');

// app.use('/', router);
app.use(router);


app.listen(3000,function(){
  console.log("listening at PORT 3000");
})
