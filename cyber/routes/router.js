import Router from 'express';
import path from 'path';
import { __dirname } from '../global.js';
import { rateLimit } from 'express-rate-limit';

const apiLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 1,
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: function (req) {
        // return the user id for the request here
    }
})

const router = Router();

router.get('/', async (req, res) => {
    res.status(200).json({
        message: 'Welcome to the API',
    });
});

router.get('/logs', apiLimiter, async (req, res) => {
    res.sendFile(path.join(__dirname, 'logs', 'access.log'));
});

export default router;