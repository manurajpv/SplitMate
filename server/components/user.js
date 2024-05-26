var bcrypt = require("bcrypt");
var validator = require("../lib/validation");
var model = require("../models/schema");
var apiAuth = require("../lib/middleware");
var logger = require("../lib/logger");

exports.userReg = async (req, res) => {
  try {
    //Checking email Id exist in DB
    const user = await model.User.findOne({
      emailId: req.body.emailId,
    });
    //If email ID present in database thows error and retuen message
    if (user) {
      const err = new Error("Email Id already present please login!");
      err.status = 400;
      throw err;
    } else {
      //Accepts the inputs and create user model form req.body
      var newUser = new model.User(req.body);
      console.log(req.body);
      //Performing validations
      if (
        validator.emailValidation(newUser.emailId) &&
        validator.passwordValidation(newUser.password) &&
        validator.notNull(newUser.firstName)
      ) {
        //Bcrypt password encription
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(newUser.password, salt);

        //storing user details in DB
        var id = await model.User.create(newUser);
        res.status(200).json({
          status: "Success",
          message: "User Registeration Success",
          userId: id.id,
        });
      }
    }
  } catch (err) {
    logger.error(
      `URL : ${req.originalUrl} | staus : ${err.status} | message: ${err.message}`
    );
    res.status(err.status || 500).json({
      message: err.message,
    });
  }
};

exports.userLogin = async (req, res) => {
  try {
    //Checking email Id exist in DB
    const user = await model.User.findOne({
      emailId: req.body.emailId,
    });
    if (!user) {
      var err = new Error("Invalid email Id or Password !");
      err.status = 401;
      throw err;
    }

    //validating password using bcrypt
    const validCred = await bcrypt.compare(req.body.password, user.password);
    if (!validCred) {
      var err = new Error("Invalid email Id or Password* !");
      err.status = 401;
      throw err;
    } else {
      const accessToken = apiAuth.generateAccessToken(req.body.emailId);
      res.status(200).json({
        status: "Success",
        message: "User Login Success",
        userId: user.id,
        emailId: user.emailId,
        firstName: user.firstName,
        lastName: user.lastName,
        accessToken,
      });
    }
  } catch (err) {
    logger.error(
      `URL : ${req.originalUrl} | staus : ${err.status} | message: ${err.message} ${err.stack}`
    );
    res.status(err.status || 500).json({
      message: err.message,
    });
  }
};

exports.viewUser = async (req, res) => {
  try {
    //check if the login user is same as the requested user
    apiAuth.validateUser(req.user, req.body.emailId);
    const user = await model.User.findOne(
      {
        emailId: req.body.emailId,
      },
      {
        //set password 0 so that password is not sent to client
        password: 0,
      }
    );
    if (!user) {
      var err = new Error("User does not exist!");
      err.status = 400;
      throw err;
    }
    res.status(200).json({
      status: "Success",
      user: user,
    });
  } catch (err) {
    logger.error(
      `URL : ${req.originalUrl} | staus : ${err.status} | message: ${err.message}`
    );
    res.status(err.status || 500).json({
      message: err.message,
    });
  }
};
