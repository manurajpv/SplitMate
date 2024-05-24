var bcrypt = require('bcrypt');
var validator = require('../lib/validation')
var model = require('../models/schema')

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
    // logger.error(
    //   `URL : ${req.originalUrl} | staus : ${err.status} | message: ${err.message}`
    // );
    res.status(err.status || 500).json({
      message: err.message,
    });
  }
};
