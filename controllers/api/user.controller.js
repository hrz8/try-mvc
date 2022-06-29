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
        sub: user.id.toString(),
        iss: 'binar.academy.com',
        aud: 'clientbinar',
        // jti: 
        // exp: Date.now() + 8.64e+7,
        // roles: user.roles.map((role) => role.name)
      }, process.env.SECRET_KEY, { expiresIn: '2m' });

      res.json({userId: user.id, token})
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  }
}