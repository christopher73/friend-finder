var express = require("express");
var router = express();
var bodyParser = require("body-parser");
router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

let users = [
  { name: "chris", url: "no link", score: [4, 4, 2, 3, 4, 3, 2, 1, 2, 3] }
]; //store locally
function findFish(fish, ocean) {
  let results = [];
  for (let j = 0; j < ocean.length; j++) {
    let count = 0;
    let fish2 = ocean[j].score;
    for (let i = 0; i < fish2.length; i++) {
      let tmp = fish[i] - fish2[i];
      count += Math.abs(tmp);
      console.log("tmp :" + tmp + " score " + count);
    }
    results.push(count);
  }
  console.log(results);
  var a = Math.min(...results);
  return results.indexOf(a);
}

router.get("/", function(req, res) {
  console.log("got it");
  res.render("index", { title: "nice" });
});
router.get("/friends", function(req, res) {
  res.send(users);
});
router.get("/survey", function(req, res) {
  console.log("got it");
  res.render("survey");
});
router.post("/survey", function(req, res) {
  //Grab the request body
  var body = req.body;
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

  let theOne = findFish(res_body.score, users);
  users.push(res_body);
  console.log(users);
  res.render("welcome", { answer: users[theOne].name });
});

module.exports = { router, users };
