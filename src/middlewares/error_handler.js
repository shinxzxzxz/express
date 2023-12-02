import http from '../config/http.js';

const errorHandler = function (err, req, res) {

    const error = err.stack;
    const [_, origin] = error.match(/(?:file:\/\/\/)([\w/:.]+)/);
    const response = {
        error: {
            status: http.status.internal_server_error,
            referer: req.get('Referer'),
            path: req.originalUrl,
            method: req.method,
            message: error.substring(0, error.indexOf("\n") + 1).replace(/\n/g, ''),
            origin: origin
        }
    };

    return res
        .status(http.internal_server_error)
        .json(response);
        
};

export default errorHandler;