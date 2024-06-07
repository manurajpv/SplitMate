var mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const User = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  emailId: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Group = new mongoose.Schema({
  groupName: {
    type: String,
    required: true,
  },
  groupDescription: {
    type: String,
  },
  groupCurrency: {
    type: String,
    default: "INR",
  },
  groupOwner: {
    type: String,
    required: true,
  },
  groupMembers: {
    type: Array,
    required: true,
  },
  groupCategory: {
    type: String,
    default: "Others",
  },
  groupTotal: {
    type: Number,
    default: 0,
  },
  split: {
    type: Array,
  },
});
module.exports.User = mongoose.model("user", User);
module.exports.Group = mongoose.model("group", Group);
