import { config } from 'dotenv';
import fs from 'fs';

config();
/**
 * Config object of environment variables
 */

export const Config = {
    SERVER_ENV: process.env.SERVER_ENV || 'local',
    server: {
        PORT: parseInt(process.env.PORT, 10) || 3000,
        BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
        mongoDBConnectionUrl: process.env.DB_URL,
    },
};

export default Config;
