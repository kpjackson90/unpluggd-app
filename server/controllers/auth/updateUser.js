const User = require('../../models/User');
const {sendResponse} = require('../../middleware/response/sendResponse');
const {
  MISSING_EMAIL_PASSWORD,
  INVALID_LOGIN_CREDENTIALS,
  USER_LOGIN,
  SERVER_ERROR,
  UNAUTHORIZED,
  USER_UPDATED,
} = require('../../middleware/response/responses');

/*remove is verified from update user */
exports.updateUser = async (req, res) => {
  try {
    const {_id: id, token} = req.user;
    let user = await User.findOne({_id: id, isVerified: false});

    if (!user) {
      return sendResponse(req, res, UNAUTHORIZED);
    }

    const {
      userRole,
      profileImage,
      coverImage,
      username,
      firstName,
      lastName,
      residence,
      occupation,
      bio,
      companyName,
      companyUrl,
      introVideo,
      companyBio,
      categories,
      isAdultContent,
      facebookUrl,
      twitterUrl,
      instagramUrl,
      youtubeUrl,
      twitch,
      isOnboarded,
    } = req.body;

    user = await User.findByIdAndUpdate(
      id,
      {
        ...(userRole && {userRole}),
        ...(profileImage && {profileImage}),
        ...(coverImage && {coverImage}),
        ...(occupation && {occupation}),
        ...(username && {username}),
        ...(bio && {bio}),
        ...(categories && {categories}),
        ...(firstName && {firstName}),
        ...(lastName && {lastName}),
        ...(companyName && {companyName}),
        ...(companyUrl && {companyUrl}),
        ...(companyBio && {companyBio}),
        ...(introVideo && {introVideo}),
        ...(isAdultContent && {isAdultContent}),
        ...(residence && {residence}),
        ...(facebookUrl && {facebookUrl}),
        ...(twitterUrl && {twitterUrl}),
        ...(instagramUrl && {instagramUrl}),
        ...(youtubeUrl && {youtubeUrl}),
        ...(twitch && {twitch}),
        ...(isOnboarded && { isOnboarded })
      },
      {new: true}
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
