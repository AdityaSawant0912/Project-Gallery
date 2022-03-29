const db = require("./config/db");
const User = require("./models/User");

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function loginChecker(req, res, next) {
  console.log("loginChecker");
  console.log(req.session.authorised);
  if (req.session.authorised) {
    next();
    return;
  } else {
    res.redirect("/");
    return;
  }
}

function sessionAuthorized(req, res, next) {
  if(req.session.authorised) {
    res.redirect("/");
    return;
  }else{
    next();
    return;
  }
}

async function adminChecker(req, res, next) {
  let email = req.cookies.email;
  let role = await User.getRole(email);
  console.log("role");
  console.log(role);
  console.log(role[0][0].role);
  if (role[0][0].role == "admin") {
    console.log("admin");
    next()
  }else{
    res.redirect('/')
  }
}

  



function checkForm(fields) {
  for (var i = 0; i < fields.length; i++) {
    var currElement = fields[i];

    if (currElement == undefined || currElement == "") {
      return false;
    }
  }
  return true;
}
module.exports.checkForm = checkForm;
module.exports.loginChecker = loginChecker;
module.exports.adminChecker = adminChecker;
module.exports.sessionAuthorized = sessionAuthorized;
module.exports.validateEmail = validateEmail;
