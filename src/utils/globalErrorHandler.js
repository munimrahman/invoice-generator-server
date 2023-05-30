const globalErrorHandler = (err, req, res, next) => {
  console.info('**********Global Error Handler**********');
  console.error(err);
  return res.status(500).json({
    success: false,
    message: 'Internal Server Error',
  });
};

module.exports = globalErrorHandler;
