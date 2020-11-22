const User = require("../../models/User");
const { sendResponse } = require("../../middleware/response/sendResponse");
const {
  MISSING_EMAIL_PASSWORD,
  INVALID_LOGIN_CREDENTIALS,
  USER_LOGIN,
  SERVER_ERROR,
  UNAUTHORIZED,
  USER_UPDATED,
} = require("../../middleware/response/responses");

exports.updateUser = async (req, res) => {
  try {
    const { _id: id, token } = req.user;
    let user = await User.findOne({ _id: id, isVerified: false });
    console.log(user);

    if (!user) {
      return sendResponse(req, res, UNAUTHORIZED);
    }

    const {
      user_role,
      profile_image,
      cover_image,
      username,
      first_name,
      last_name,
      residence,
      occupation,
      bio,
      company_name,
      company_url,
      intro_video,
      company_bio,
      categories,
      isAdultContent,
      facebook_url,
      twitter_url,
      instagram_url,
      youtube_url,
      twitch,
    } = req.body;

    user = await User.findByIdAndUpdate(
      id,
      {
        ...(user_role && { user_role }),
        ...(profile_image && { profile_image }),
        ...(cover_image && { cover_image }),
        ...(occupation && { occupation }),
        ...(username && { username }),
        ...(bio && { bio }),
        ...(categories && { categories }),
        ...(first_name && { first_name }),
        ...(last_name && { last_name }),
        ...(company_name && { company_name }),
        ...(company_url && { company_url }),
        ...(company_bio && { company_bio }),
        ...(intro_video && { intro_video }),
        ...(isAdultContent && { isAdultContent }),
        ...(residence && { residence }),
        ...(facebook_url && { facebook_url }),
        ...(twitter_url && { twitter_url }),
        ...(instagram_url && { instagram_url }),
        ...(youtube_url && { youtube_url }),
        ...(twitch && { twitch }),
      },
      { new: true }
    );

    const userParams = {
      token,
      id: user._id,
    };

    return sendResponse(req, res, USER_UPDATED, userParams);
  } catch (err) {
    console.error(err);
    return sendResponse(req, res, SERVER_ERROR);
  }
};
