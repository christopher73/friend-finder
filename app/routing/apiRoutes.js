var express = require("express");
var router = express();
var bodyParser = require("body-parser");
router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//let users = [];

router.get("/", function(req, res) {
  console.log("got it");
  res.render("index", { title: "nice" });
});
router.get("/survey", function(req, res) {
  console.log("got it");
  res.render("survey");
});
router.post("/survey", function(req, res) {
  //Grab the request body
  var body = req.body;
  let users = [];
  var res_body = {
    name: body.name,
    url: body.url,
    score: [
      parseInt(body.q1),
      parseInt(body.q2),
      parseInt(body.q3),
      parseInt(body.q4),
      parseInt(body.q5),
      parseInt(body.q6),
      parseInt(body.q7),
      parseInt(body.q8),
      parseInt(body.q9),
      parseInt(body.q10)
    ]
  };
  //   console.log(body);
  //   console.log("\n~~~~~~~~~~\n");
  //   console.log(res_body);
  //res.render("welcome", res_body);
  console.log(users);
});

module.exports = router;
