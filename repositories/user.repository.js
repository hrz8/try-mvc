const bcrypt = require('bcryptjs');

const { User } = require('../models')

module.exports = {
  encrypt: function (plainPassword) {
    return bcrypt.hashSync(plainPassword)
  },

  checkPassword: function (plainPassword, hashedPassword) {
    return bcrypt.compareSync(plainPassword, hashedPassword);
  },

  login: async function (payload) {
    const userIsExist = await this.get(payload.username);

    if (!userIsExist) {
      throw new Error('user or password invalid');
    }

    const isPasswordCorrect = this.checkPassword(payload.password, userIsExist.password);

    if (!isPasswordCorrect) {
      throw new Error('user or password invalid');
    }

    return userIsExist;
  },

  get: async function (username) {
    return User.findOne({where: {username}});
  },

  register: async function ({ username, password }) {
    const encryptedPassword = this.encrypt(password)
    return User.create({ username, password: encryptedPassword })
  },

  add: async function (payload) {
    return await this.register(payload);
  }
}
