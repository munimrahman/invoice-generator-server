const globalErrorHandler = (err, req, res, next) => {
  console.info('**********Global Error Handler**********');
  console.error(err.message);
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
  return res.status(500).json({
    success: false,
    message: 'Internal Server Error',
  });
};

module.exports = globalErrorHandler;
