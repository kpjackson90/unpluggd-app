const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
    userRole: [
      {
        type: String,
        enum: ['guest', 'attendee', 'host'],
      },
    ],
    profileImage: {
      type: String,
    },
    coverImage: {
      type: String,
    },
    occupation: {
      type: String,
    },
    companyName: {
      type: String,
    },
    companyUrl: {
      type: String,
    },
    companyBio: {
      type: String,
    },
    username: {
      type: String,
    },
    bio: {
      type: String,
    },
    introVideo: {
      type: String,
    },
    categories: [
      {
        type: String,
      },
    ],
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    logo: {
      type: String,
    },
    residence: {
      type: String,
    },
    businessAddress: {
      type: String,
    },
    color: {
      type: String,
    },
    events: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Event',
      },
    ],
    isVerified: {
      type: Boolean,
      default: false,
    },
    isAdultContent: {
      type: Boolean,
      default: false,
    },
    facebookUrl: {
      type: String,
    },
    twitterUrl: {
      type: String,
    },
    youtubeUrl: {
      type: String,
    },
    instagramUrl: {
      type: String,
    },
    twitch: {
      type: String,
    },
    stripe: {
      type: String,
    },
  },
  {timestamps: true}
);

UserSchema.pre('save', function (next) {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (candidatePassword) {
  const user = this;

  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
      if (err) {
        return reject(err);
      }

      if (!isMatch) {
        return reject(false);
      }

      resolve(true);
    });
  });
};

module.exports = mongoose.model('User', UserSchema);
