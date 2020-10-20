const router = require('express').Router();
const {requireAuth} = require('../middleware/requireAuth');
const {roleAuthorization} = require('../middleware/roleAuthorization');
const {s3Upload} = require('../services/s3Upload');

router.post('/api/events/media', s3Upload);

module.exports = router;
