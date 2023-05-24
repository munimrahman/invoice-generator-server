const createHttpError = require('http-errors');

const notFoundHandler = (req, res, next) => {
    next(createHttpError(404, 'Your Requested Content Not Found.'));
};

module.exports = notFoundHandler;
