import cors from 'cors';
import express from 'express';
import Middleware from './src/config/middleware.js';
import Route from './src/config/route.js';
import mongo from './src/config/mongo.js';

mongo.connect();
const app = express();
const PORT = process.env.PORT ?? 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "499kb" }));
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use("/api", [], Route.Api);

app.use(Middleware.ErrorHandler);

app.listen(PORT, function () {
    console.log(`[Server Started] | Listening on port \x1b[32m${PORT}\x1b[0m`);
});