const User = require('../../models/User');
const {setUserInfo} = require('../../middleware/setUserInfo');
const {sendResponse} = require('../../middleware/response/sendResponse');
const {jwtSign} = require('../../middleware/jsonwebtoken/jwt');
const {sendEmail} = require('../../services/mailer');
const {
  MISSING_EMAIL,
  MISSING_PASSWORD,
  USER_EXIST,
  USER_CREATED,
  SERVER_ERROR,
  INCORRECT_ROLE,
} = require('../../middleware/response/responses');
const keys = require('../../config/keys');

exports.registerUser = async (req, res) => {
  const userRole = 'user';
  const adminRole = 'admin';

  const {email, password, role} = req.body;

  if (role !== userRole && role !== adminRole) {
    return sendResponse(req, res, INCORRECT_ROLE);
  }

  if (!email) {
    return sendResponse(req, res, MISSING_EMAIL);
  }

  if (!password) {
    return sendResponse(req, res, MISSING_PASSWORD);
  }

  try {
    const userEmail = await User.findOne({email});

    if (userEmail) {
      return sendResponse(req, res, USER_EXIST);
    }

    const user = new User({email, password, role});
    await user.save();
    const userInfo = setUserInfo(user);
    const token = await jwtSign(userInfo, keys.JWT_SECRET, {
      expiresIn: keys.JWT_EXPIRES,
    });

    /*NOTE: Email functionality is currently disabled because of the following error:
    The provided authorization grant is invalid, expired, or revoked'
    const emailBody = {
      recipient: email,
      sender: 'kareem@pjacksonassociates.com',
      subject: 'Email Verification',
      text: 'Please verify email address',
      htmlText: `<a href="http://localhost:3000/user/verify?token=${token}">Verify Email Address - ${email}</a>`,
    };

    await sendEmail(emailBody); */

    const newUserInfo = {
      token,
      email: user.email,
      role: user.role,
      id: user._id,
    };
    return sendResponse(req, res, USER_CREATED, newUserInfo);
  } catch (err) {
    console.error(err);
    return sendResponse(req, res, SERVER_ERROR);
  }
};
