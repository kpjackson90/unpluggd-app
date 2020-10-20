const express = require('express');
const passport = require('passport');
require('../services/passport');

const {registerUser} = require('../controllers/auth/registerUser');
const {verifyUser} = require('../controllers/auth/verifyUser');
const {loginUser} = require('../controllers/auth/loginUser');
const {updateUser} = require('../controllers/auth/updateUser');
const {facebookAuth} = require('../controllers/auth/facebookAuth');
const {requireAuth} = require('../middleware/requireAuth');
const {roleAuthorization} = require('../middleware/roleAuthorization');

const router = express.Router();

router.post('/api/user/signup', registerUser);

router.post('/api/user/verify', requireAuth, verifyUser);

router.post('/api/user/signin', loginUser);

router.get(
  '/api/user/facebook',
  passport.authenticate('facebook', {scope: ['email']})
);

router.get(
  '/api/user/facebook/callback',
  passport.authenticate('facebook', {session: false}),
  facebookAuth
);

//TODO: comeback to logout functionality
// router.get('/api/logout', (req, res) => {
//   req.logout();
//   res.redirect('/');
// });

router.put(
  '/api/user/update-profile',
  requireAuth,
  roleAuthorization(['user']),
  updateUser
);

module.exports = router;
