const express = require('express');
const passport = require('passport');
require('../services/passport');

const mongoose = require('mongoose');
const User = mongoose.model('User');

const {registerUser} = require('../controllers/auth/registerUser');
const {verifyUser, currentUser} = require('../controllers/auth/verifyUser');
const {loginUser} = require('../controllers/auth/loginUser');
const {updateUser} = require('../controllers/auth/updateUser');
const {facebookAuth} = require('../controllers/auth/facebookAuth');
const {requireAuth} = require('../middleware/requireAuth');
const {roleAuthorization} = require('../middleware/roleAuthorization');

const router = express.Router();
/**
 * @swagger
 * /api/user/signup:
 *  post:
 *    tags: ['AUTH']
 *    description: User signup
 *    parameters:
 *      - name: email
 *        in: formData
 *        required: true
 *        type: string
 *      - name: password
 *        in: formData
 *        required: true
 *        type: string
 *      - name: role
 *        in: formData
 *        required: true
 *        type: string
 *    responses:
 *      '201':
 *        description: A successful response. User created
 *      '400':
 *         description: An unsuccessful response because of bad request made by the user
 *      '409':
 *         description: User already exist
 *      '500':
 *         description: unsuccessful response. Possible error on server side
 *
 */

router.post('/api/user/signup', registerUser);

/**
 * @swagger
 * /api/user/verify:
 *  post:
 *    tags: ['AUTH']
 *    description: Verify User
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '200':
 *        description: A successful response. User verified
 *      '409':
 *         description: User already verified
 *      '500':
 *         description: unsuccessful response. Possible error on server side
 *
 */

router.post('/api/user/verify', requireAuth, verifyUser);

/**
 * @swagger
 * /api/user/signin:
 *  post:
 *    tags: ['AUTH']
 *    description: User login
 *    parameters:
 *      - name: email
 *        in: formData
 *        required: true
 *        type: string
 *      - name: password
 *        in: formData
 *        required: true
 *        type: string
 *    responses:
 *      '200':
 *        description: A successful response. User login
 *      '400':
 *         description: An unsuccessful response because of bad request made by the user
 *      '422':
 *         description: Invalid user credentials provided
 *      '500':
 *         description: unsuccessful response. Possible error on server side
 *
 */

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

/**
 * @swagger
 * /api/user/update-profile:
 *  put:
 *    tags: ['AUTH']
 *    description: update user profile
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '200':
 *        description: A successful response. User updated
 *      '401':
 *         description: User unauthorized
 *      '500':
 *         description: unsuccessful response. Possible error on server side
 *
 */

router.put(
  '/api/user/update-profile',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  updateUser
);

/**
 * @swagger
 * /api/user/me:
 *  get:
 *    tags: ['AUTH']
 *    description: Get current user
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '200':
 *        description: A successful response. current user found
 *      '404':
 *         description: User not found
 *      '500':
 *         description: unsuccessful response. Possible error on server side
 *
 */

router.get(
  '/api/user/me',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  currentUser
);
module.exports = router;
