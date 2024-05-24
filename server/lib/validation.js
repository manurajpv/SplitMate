exports.emailValidation = (email) => {
  if (email && email.includes("@") && email.includes(".com")) return true;
  else {
    var err = new Error("Email validation fail!!");
    err.status = 400;
    throw err;
  }
}

exports.notNull = (value) => {
  if (value) return true;
  else {
    var err = new Error("Please input the required field");
    err.status = 400;
    throw err;
  }
}

exports.passwordValidation = (pass) => {
  // if(pass)
  // if (pass.search(/[a-z]/) >= 0 && pass.search(/[A-Z]/) >= 0 &&
  //     pass.search(/[0-9]/) >= 0 &&
  //     pass.search(/[!@#$%^&*()]/) >= 0 &&
  //     pass.length >= 8) {
  //     return true
  // }
  if (pass && pass.length >= 8) {
    return true;
  }
  var err = new Error("Password validation fail!!");
  err.status = 400;
  throw err;
};
