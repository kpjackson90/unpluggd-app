const express = require("express");
const passport = require("passport");
require("../services/passport");

const mongoose = require("mongoose");
const User = mongoose.model("User");

const { registerUser } = require("../controllers/auth/registerUser");
const { verifyUser } = require("../controllers/auth/verifyUser");
const { loginUser } = require("../controllers/auth/loginUser");
const { updateUser } = require("../controllers/auth/updateUser");
const { facebookAuth } = require("../controllers/auth/facebookAuth");
const { requireAuth } = require("../middleware/requireAuth");
const { roleAuthorization } = require("../middleware/roleAuthorization");

const router = express.Router();

router.post("/api/user/signup", registerUser);

router.post("/api/user/verify", requireAuth, verifyUser);

router.post("/api/user/signin", loginUser);

router.get(
  "/api/user/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);

router.get(
  "/api/user/facebook/callback",
  passport.authenticate("facebook", { session: false }),
  facebookAuth
);

//TODO: comeback to logout functionality
// router.get('/api/logout', (req, res) => {
//   req.logout();
//   res.redirect('/');
// });

router.put(
  "/api/user/update-profile",
  requireAuth,
  roleAuthorization(["user", "guest"]),
  updateUser
);

router.get(
  "/api/user/me",
  requireAuth,
  roleAuthorization(["user", "guest"]),
  async (req, res) => {
    try {
      console.log(req.user);
      const user = await User.findById(req.user._id);
      return res.status(200).send(user);
    } catch (err) {
      return res.status(400).send({ message: err.message });
    }
  }
);
module.exports = router;
