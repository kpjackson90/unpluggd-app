const User = require('../../models/User');
const keys = require('../../config/keys');
const {sendResponse} = require('../../middleware/response/sendResponse');
const {
  USER_ALREADY_VERIFIED,
  USER_VERIFIED,
  SERVER_ERROR,
} = require('../../middleware/response/responses');

exports.verifyUser = async (req, res) => {
  const {_id: id, token} = req.user;

  try {
    //check if user is already verified
    const verifiedUser = await User.findOne({_id: id, isVerified: true});
    if (verifiedUser) {
      return sendResponse(req, res, USER_ALREADY_VERIFIED);
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {isVerified: true},
      {new: true}
    );
    const userParams = {
      token,
      isVerified: updatedUser.isVerified,
      id: updatedUser._id,
      email: updatedUser.email,
    };
    return sendResponse(req, res, USER_VERIFIED, userParams);
  } catch (err) {
    console.error(err.message);
    return sendResponse(req, res, SERVER_ERROR);
  }
};
