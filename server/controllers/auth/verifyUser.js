const User = require('../../models/User');
const keys = require('../../config/keys');
const {sendResponse} = require('../../middleware/response/sendResponse');
const {
  USER_ALREADY_VERIFIED,
  USER_VERIFIED,
  SERVER_ERROR,
  USER_NOT_FOUND,
  REQUEST_SUCCESSFUL,
} = require('../../middleware/response/responses');

const {createCustomer} = require('../../services/stripe');

exports.verifyUser = async (req, res) => {
  const {_id: id, token} = req.user;

  try {
    //check if user is already verified
    const verifiedUser = await User.findById(id);

    if (verifiedUser && verifiedUser.isVerified) {
      return sendResponse(req, res, USER_ALREADY_VERIFIED);
    }

    let stripeParams = {
      email: verifiedUser.email,
    };

    const newCustomer = await createCustomer(stripeParams);

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {isVerified: true, stripe: newCustomer.id},
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
    console.error(err);
    return sendResponse(req, res, SERVER_ERROR);
  }
};

exports.currentUser = async (req, res) => {
  try {
    const existingUser = await User.findById(req.user._id).select('_id');
    if (!existingUser) {
      return sendResponse(req, res, USER_NOT_FOUND);
    }

    return sendResponse(req, res, REQUEST_SUCCESSFUL, existingUser);
  } catch (err) {
    console.error(err);
    return sendResponse(req, res, SERVER_ERROR);
  }
};
