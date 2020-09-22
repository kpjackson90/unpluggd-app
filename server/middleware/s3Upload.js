const AWS = require('aws-sdk');
AWS.config.update({
  region: '',
  credentials: {accessKeyId: '', secretAccessKey: ''},
});

exports.s3Upload = async () => {};
