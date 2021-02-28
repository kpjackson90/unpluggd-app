const express = require('express');
const router = express.Router();
const {addListMember} = require('../controllers/mailchimp/addListMember');

router.post('/api/add/list/member', addListMember);

module.exports = router;
