const mongoose = require("mongoose");
const User = mongoose.model("User");
const { UNAUTHORIZED, SERVER_ERROR } = require("./response/responses");
const { sendResponse } = require("./response/sendResponse");

exports.roleAuthorization = function (roles) {
  return function (req, res, next) {
    var user = req.user;
    User.findById(user._id, function (err, foundUser) {
      if (err) {
        return sendResponse(req, res, SERVER_ERROR);
      }

      if (foundUser && roles.indexOf(foundUser.role) > -1) {
        return next();
      }

      return sendResponse(req, res, UNAUTHORIZED);
    });
  };
};
