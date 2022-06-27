module.exports = {
  authenticate: (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
      return;
    }
    res.redirect('/users/login');
  },

  authorization: (roleName) => (req, res, next) => {
    const currentRoles = req.user.roles.map((role) => role.name);
    if (currentRoles.includes(roleName)) {
      next();
      return;
    }
    
    res.status(401).json({error: 'unauthorized'});
  }
}