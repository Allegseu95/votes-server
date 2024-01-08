const { config } = require('dotenv')

config()

module.exports = {
  env: {
    DB_HOST: process.env.DB_HOST,
    DB_DATABASE: process.env.DB_DATABASE,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    NODE_PORT: process.env.NODE_PORT,
    NODE_STAGE: process.env.NODE_STAGE,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRATION: process.env.JWT_EXPIRATION
  }
}
