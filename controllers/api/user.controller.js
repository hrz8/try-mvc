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

  // login: async (req, res) => {
  //   const username = req.body.username;
  //   const plainPassword = req.body.password;

  //   try {
  //     await userRepository.login({username, password: plainPassword});
  //   } catch (error) {
  //     res.render('user/login', {error_message: error.message});
  //   }

  //   res.redirect('/articles');
  // }
}