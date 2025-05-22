import express from 'express';
import router from './routes/router.js';
import helmet from 'helmet';
import cors from 'cors';
import { rateLimit } from 'express-rate-limit';
import path from 'path';
import { __dirname } from './global.js';

import { writeLog } from './middleware/log.js';

const PORT = process.env.PORT || 3000;
const server = express();

server.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 1000, // limit each IP to 100 requests per windowMs
    message: 'Too many requests, please try again later.',
}));

server.use(helmet());
server.use(cors({
    origin: ['http://localhost:3000', 'http://example.com'], // client URLs
    methods: ['GET', 'POST', 'PUT', 'DELETE'], //אילו שיטות מותרות
    allowedHeaders: ['Content-Type', 'Authorization'], // אילו כותרות מותרות
}));

server.use(express.json({ limit: '50mb' }));
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, 'client', 'dist'))); // static files

server.use(writeLog);

server.use('/api/v1', router);

server.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
