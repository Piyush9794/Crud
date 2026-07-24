const success = (
  res,
  message = "Success",
  data = null,
  statusCode = 200
) => {
  return res.status(statusCode).json({
    success: true,
    code: statusCode,
    message,
    error: false,
    data,
  });
};

const error = (
  res,
  message = "Something went wrong",
  statusCode = 500,
  data = null
) => {
  return res.status(statusCode).json({
    success: false,
    code: statusCode,
    message,
    error: true,
    data,
  });
};

module.exports = {
  success,
  error,
};