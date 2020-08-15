const sgMail = require('@sendgrid/mail');
const keys = require('../config/keys');

sgMail.setApiKey(keys.SENDGRID_API_KEY);

exports.sendEmail = ({ recipient, sender, subject, text, htmlText }) => {
  const msg = {
    to: recipient,
    from: sender,
    subject,
    text,
    html: `<p> ${htmlText} </p>`,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log('message sent');
    })
    .catch((err) => {
      console.log(err.response.body);
    });
};
