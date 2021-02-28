const keys = require('../../config/keys');
const mailchimp = require('@mailchimp/mailchimp_marketing');
const {validateMailChimpBody} = require('../../middleware/joi/mailchimpBody');
const {sendResponse} = require('../../middleware/response/sendResponse');
const {
  SERVER_ERROR,
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
    const {email} = req.body;
    const pendingUserStatus = 'pending';

    await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: pendingUserStatus,
    });

    REQUEST_SUCCESSFUL.message = `User with email address: ${email} was successfully added`;
    return sendResponse(req, res, REQUEST_SUCCESSFUL);
  } catch (err) {
    console.error(err);
    return sendResponse(req, res, SERVER_ERROR);
  }
};
