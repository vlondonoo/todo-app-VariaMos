const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    DATABASE_NAME: process.env.DATABASE_NAME,
    USERNAME: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    HOST: process.env.HOST,
    DIALECT: process.env.DIALECT,
    IMAGE_FOLDER_PATH: process.env.IMAGE_FOLDER_PATH
};