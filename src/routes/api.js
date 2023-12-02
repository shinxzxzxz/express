import express from 'express';

const api = express.Router();

api.all("/", function (req, res) {
    res.send(req.method);
});

export default api;