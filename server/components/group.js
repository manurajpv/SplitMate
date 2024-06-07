const model = require("../model/schema");
var validator = require("../lib/validation");
var logger = require("../lib/logger");

exports.createGroup = async (req, res) => {
  try {
    var newGroup = new model.Group(req.body);
    //Performing validation on the input
    if (
      validator.notNull(newGroup.groupName) &&
      validator.currencyValidation(newGroup.groupCurrency)
    ) {
      /*
      Split Json is used to store the user split value (how much a person owes)
      When the Group is created all members are assigned the split value as 0
      */
      var splitJson = {};

      for (var user of newGroup.groupMembers) {
        //Validating the group Members exist in the DB
        var memberCheck = await validator.userValidation(user);
        if (!memberCheck) {
          var err = new Error("Invalid member id");
          err.status = 400;
          throw err;
        }

        //Adding user to the split Json and init with 0
        splitJson[user] = 0;
      }

      /*
      Split Json will now contain an json with user email as the key and the split amount (currently 0) as the value
      We now store this splitJson object to the newGroup model so it can be stored to DB directly
      */
      newGroup.split = splitJson;

      //Validating the group Owner exist in the DB
      var ownerCheck = await validator.userValidation(newGroup.groupOwner);
      if (!ownerCheck) {
        var err = new Error("Invalid owner id");
        err.status = 400;
        throw err;
      }

      var id = await model.Group.create(newGroup);
      res.status(200).json({
        status: "Success",
        message: "Group Creation Success",
        Id: id._id,
      });
    }
  } catch (err) {
    logger.error(
      `URL : ${req.originalUrl} | staus : ${err.status} | message: ${err.message} ${err.stack}`,
    );
    res.status(err.status || 500).json({
      message: err.message,
    });
  }
};

/*
View Group function
This function is used to display the group details
Accepts: Group Id
Returns: Group Info
*/
exports.viewGroup = async (req, res) => {
  try {
    const group = await model.Group.findOne({
      _id: req.body.id,
    });
    if (!group || req.body.id == null) {
      var err = new Error("Invalid Group Id");
      err.status = 400;
      throw err;
    }
    res.status(200).json({
      status: "Success",
      group: group,
    });
  } catch (err) {
    logger.error(
      `URL : ${req.originalUrl} | staus : ${err.status} | message: ${err.message}`,
    );
    res.status(err.status || 500).json({
      message: err.message,
    });
  }
};
