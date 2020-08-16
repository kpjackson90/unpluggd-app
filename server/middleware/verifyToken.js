const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
require('util').promisify(jwt.verify);

exports.verifyToken = async (token) => {
  await jwt.verify(token, keys.JWT_SECRET);
};
