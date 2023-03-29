import dotenv from 'dotenv';
dotenv.config();
export default {
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 3000,
    API_URL: process.env.API_URL || '/api/v1',
    CONNECTION_STRING: process.env.CONNECTION_STRING || 'mongodb://127.0.0.1:27017',
    DATABASE: process.env.DATABASE || 'db_education',
    DB_USER: process.env.DB_PASSWORD || 'admin',
    DB_PASSWORD: process.env.DB_USER || 'admin',
}