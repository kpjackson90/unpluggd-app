const jwt = require('jsonwebtoken');
const util = require('util');

const jwt_sign = util.promisify(jwt.sign);
const jwt_verify = util.promisify(jwt.verify);

exports.jwtSign = async (payload, secret, options) => {
  try {
    return await jwt_sign(payload, secret, parseInt(options.JWT_EXPIRES));
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};

exports.jwtVerify = async (token, secret) => {
  try {
    return await jwt_verify(token, secret);
  } catch (err) {
    console.error(err);
    throw err;
  }
};
