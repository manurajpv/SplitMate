var express = require("express");
var controller = require("../components/group");
var router = express.Router();

//basic response for the API
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

//Add Group router
router.post("/v1/add", controller.createGroup);

//View Group router
router.post("/v1/view", controller.viewGroup);
