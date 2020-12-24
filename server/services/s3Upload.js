const AWS = require('aws-sdk');
const keys = require('../config/keys');
const {
  BAD_REQUEST_BODY,
  EVENT_MEDIA_UPLOADED,
  SERVER_ERROR,
} = require('../middleware/response/responses');
const {sendResponse} = require('../middleware/response/sendResponse');
const {validateS3Media} = require('../middleware/joi/s3Media');
AWS.config.update({
  region: '',
  credentials: {
    accessKeyId: '',
    secretAccessKey: '',
  },
});

const s3 = new AWS.S3({apiVersion: '2006-03-01'});

exports.s3Upload = async (req, res) => {
  const {error} = validateS3Media(req);

  if (error) {
    let result = error.details[0].message;
    BAD_REQUEST_BODY.error = 'error uploading files';
    console.error(result);
    return sendResponse(req, res, BAD_REQUEST_BODY);
  }

  const {media} = req.body;

  const params = {
    Bucket: keys.MEDIA_BUCKET,
  };

  try {
    const signedUrls = await Promise.all(
      media.map(async item => {
        let s3Params = {
          ...params,
          ContentType: item.contentType,
          Key: `${req.user._id}/${item.filename}`,
        };
        return await s3.getSignedUrlPromise('putObject', s3Params);
      })
    );

    //TODO: verify format of signedurl
    return sendResponse(req, res, EVENT_MEDIA_UPLOADED, signedUrls);
  } catch (err) {
    console.error(err);
    return sendResponse(req, res, SERVER_ERROR);
  }
};
