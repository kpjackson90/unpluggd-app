const sgMail = require('@sendgrid/mail');
const keys = require('../config/keys');

sgMail.setApiKey(keys.SENDGRID_API_KEY);

exports.sendEmail = async ({recipient, sender, subject, text, htmlText}) => {
  const msg = {
    to: recipient,
    from: sender,
    subject,
    text,
    html: `<p> ${htmlText} </p>`,
  };

  try {
    await sgMail.send(msg);
    return;
  } catch (err) {
    throw err.response.body;
  }
};
