const AWS = require('aws-sdk');
AWS.config.update({
  region: '',
  credentials: {
    accessKeyId: '',
    secretAccessKey: '',
  },
});

const s3 = new AWS.S3({apiVersion: '2006-03-01'});

//TODO:
//set key to similar format `${req.user.id}/${short.uuid()}.mp4`
//verify files are of type jpg, png, mp4
//add bucket name and credentials to keys file

exports.s3Upload = async (req, res) => {
  const {media} = req.body;
  const params = {
    Bucket: '',
  };

  try {
    const signedUrls = await Promise.all(
      media.map(async item => {
        let s3Params = {
          ...params,
          ContentType: item.contentType,
          Key: item.filename,
        };

        return await s3.getSignedUrlPromise('putObject', s3Params);
      })
    );

    return res.status(201).json({message: signedUrls});
  } catch (err) {
    console.error(err);
    return res.status(500).json({Error: 'error uploading media content'});
  }
};
