const express = require("express");
const router = express.Router();

router.get('/', (req,res) => {
  res.json({"error" : false, "message" : "Hello !"});
});

router.get('/user', (req, res) => {
  res.json({"error" : false, "name" : "Madeleine"});
})

router.post('/add', (req,res) => {
  res.json({"error" : false, "message" : "success", "data" : req.body.num1 + req.body.num2});
});

module.exports = router;
