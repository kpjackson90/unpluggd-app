module.exports = {
  UNAUTHORIZED: {
    error: 'Unauthorized. You must be logged in',
    message: null,
    statusCode: 401,
    headers: {
      'Content-Type': 'application/json',
    },
  },

  MISSING_EMAIL: {
    error: 'Email Address is missing',
    message: null,
    statusCode: 400,
    headers: {
      'Content-Type': 'application/json',
    },
  },

  MISSING_PASSWORD: {
    error: 'Password is missing',
    message: null,
    statusCode: 400,
    headers: {
      'Content-Type': 'application/json',
    },
  },

  MISSING_ID: {
    error: 'Missing user Id',
    message: null,
    statusCode: 400,
    headers: {
      'Content-Type': 'application/json',
    },
  },

  USER_EXIST: {
    error: 'User already exists',
    message: null,
    statusCode: 409,
    headers: {
      'Content-Type': 'application/json',
    },
  },

  USER_ALREADY_VERIFIED: {
    error: 'User is already verified',
    message: null,
    statusCode: 409,
    headers: {
      'Content-Type': 'application/json',
    },
  },
  USER_CREATED: {
    error: null,
    message: 'User created successfully',
    statusCode: 201,
    headers: {
      'Content-Type': 'application/json',
    },
  },
  USER_VERIFIED: {
    error: null,
    message: 'User successfully verified',
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  },

  SERVER_ERROR: {
    error: 'Something went wrong',
    message: null,
    statusCode: 500,
    headers: {
      'Content-Type': 'application/json',
    },
  },
};
