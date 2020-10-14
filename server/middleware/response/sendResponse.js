exports.sendResponse = (
  req,
  res,
  {statusCode, message, error, headers},
  userData = null
) => {
  const response = {
    payload: {
      statusCode,
      data: !userData ? null : userData,
      message,
      error,
    },
    headers: {
      'Content-Type': headers['Content-Type'],
    },
  };

  return res.status(statusCode).json(response);
};
