const jwt = require('jsonwebtoken')
const { env } = require('../config')
const { genSalt, hash, compare } = require('bcryptjs')

exports.auth = {
  encryptPassword: async (password) => {
    const salt = await genSalt(10)
    return await hash(password, salt)
  },
  comparePassword: async (password, receivedPassword) => {
    return await compare(password, receivedPassword)
  },
  generateJWT: (id) => {
    const token = jwt.sign({ id }, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRATION })
    return token
  },
  generateCodeResetPassword: (len = 6) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let code = ''

    for (let i = 0; i < len; i++) {
      const indice = Math.floor(Math.random() * chars.length)
      code += chars.charAt(indice)
    }

    return code
  },
  generatePasswordRandom: (len = 12) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=[]{}|:;"<>,.?/'
    let password = ''

    for (let i = 0; i < len; i++) {
      const indice = Math.floor(Math.random() * chars.length)
      password += chars.charAt(indice)
    }

    return password
  }
}
