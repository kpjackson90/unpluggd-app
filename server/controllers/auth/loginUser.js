const User = require('../../models/User');
const {setUserInfo} = require('../../middleware/setUserInfo');
const {jwtSign} = require('../../middleware/jsonwebtoken/jwt');
const {sendResponse} = require('../../middleware/response/sendResponse');
const {
  MISSING_EMAIL_PASSWORD,
  INVALID_LOGIN_CREDENTIALS,
  USER_LOGIN,
  SERVER_ERROR,
} = require('../../middleware/response/responses');
const keys = require('../../config/keys');

exports.loginUser = async (req, res) => {
  const {email, password} = req.body;

  if (!email || !password) {
    return sendResponse(req, res, MISSING_EMAIL_PASSWORD);
  }

  try {
    const user = await User.findOne({email});

    if (!user) {
      return sendResponse(req, res, INVALID_LOGIN_CREDENTIALS);
    }

    await user.comparePassword(password);

    const userInfo = setUserInfo(user);

    const token = await jwtSign(userInfo, keys.JWT_SECRET, {
      expiresIn: keys.JWT_EXPIRES,
    });

    const currentUserInfo = {
      token,
      email: user.email,
      role: user.role,
      id: user._id,
    };

    //save token in a cookie session
    req.session = {
      token
    };

    return sendResponse(req, res, USER_LOGIN, currentUserInfo);
  } catch (err) {
    if (typeof err === 'boolean') {
      return sendResponse(req, res, INVALID_LOGIN_CREDENTIALS);
    }
    console.error(err);
    return sendResponse(req, res, SERVER_ERROR);
  }
};
