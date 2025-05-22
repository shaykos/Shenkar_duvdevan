import { writeFile, appendFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { __dirname } from '../global.js';

export async function writeLog(req, res, next) {
  const clientIp = req.ip || req.connection.remoteAddress;

  const logFormat = `${clientIp} - ${new Date().toISOString()} - ${req.method} - ${req.baseUrl}${req.url} - ${res.statusCode}\n`;
  const logDir = path.join(__dirname, 'logs');
  const logFilePath = path.join(__dirname, 'logs', 'access.log');

  try {
    if(!existsSync(logDir)) {
      await mkdir(logDir);
    }

    if (!existsSync(logFilePath)) {
      await writeFile(logFilePath, logFormat);
    } else {
      await appendFile(logFilePath, logFormat);
    }
  } catch (error) {
    console.error('Error writing to log file:', error);
  }

  next();
    
}