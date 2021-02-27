const keys = require('../../config/keys');
const crypto = require('crypto');
const mailchimp = require('@mailchimp/mailchimp_marketing');
const {validateMailChimpBody} = require('../../middleware/joi/mailchimpBody');
const {sendResponse} = require('../../middleware/response/sendResponse');
const {
  SERVER_ERROR,
  MAIL_CHIMP_USER_ALREADY_SUBSCRIBED,
  BAD_REQUEST_BODY,
  REQUEST_SUCCESSFUL,
} = require('../../middleware/response/responses');

mailchimp.setConfig({
  apiKey: keys.MAIL_CHIMP_API_KEY,
  server: keys.MAIL_CHIMP_SERVER,
});

const listId = keys.MAIL_CHIMP_LIST_ID;
exports.addListMember = async (req, res) => {
  const {error} = validateMailChimpBody(req);

  if (error) {
    BAD_REQUEST_BODY.error = error.details[0].message;
    return sendResponse(req, res, BAD_REQUEST_BODY);
  }

  try {
    const {email, firstName, lastName, address, phone, birthday} = req.body;
    const pendingUserStatus = pending;

    const userInfo = {
      email,
      firstName,
      lastName,
      address,
      phone,
      birthday,
    };

    const subscriberHash = crypto
      .createHash('md5')
      .update(userInfo.email.toLowerCase())
      .digest('hex');

    const existingUser = await mailchimp.lists.getListMember(
      listId,
      subscriberHash
    );

    if (existingUser && existingUser?.status === 'subscribed') {
      return sendResponse(req, res, MAIL_CHIMP_USER_ALREADY_SUBSCRIBED);
    }

    await mailchimp.lists.addListMember(listId, {
      email_address: userInfo.email,
      status: pendingUserStatus,
      merge_fields: {
        FNAME: userInfo.firstName,
        LNAME: userInfo.lastName,
        ADDRESS: userInfo.address,
        PHONE: userInfo.phone,
        BIRTHDAY: userInfo.birthday,
      },
    });

    REQUEST_SUCCESSFUL.message = `User with email address: ${userInfo.email} was successfully added`;
    return sendResponse(req, res, REQUEST_SUCCESSFUL);
  } catch (err) {
    console.error(err);
    return sendResponse(req, res, SERVER_ERROR);
  }
};
