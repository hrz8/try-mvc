const jwt = require('jsonwebtoken');
const userRepository = require('../../repositories/user.repository');

module.exports = {
  register: async (req, res) => {
    const payload = {
      username: req.body.username,
      password: req.body.password
    };
    await userRepository.add(payload);

    res.redirect('login')
  },

  login: async (req, res) => {
    const username = req.body.username;
    const plainPassword = req.body.password;

    try {
      const user = await userRepository.login({username, password: plainPassword});

      const token = jwt.sign({
        id: user.id,
        username: user.username,
        roles: user.roles.map((role) => role.name)
      }, process.env.SECRET_KEY);

      res.json({userId: user.id, token})
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  }
}