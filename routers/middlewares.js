const jwt = require('jsonwebtoken');

const {User, Role} = require('../models');

module.exports = {
  authenticate: (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
      return;
    }
    res.redirect('/users/login');
  },

  authorization: (roleName) => (req, res, next) => {
    // let currentRoles = req.user.roles;

    // if (!fromJWT) {
    const currentRoles = req.user.roles.map((role) => role.name);
    // }

    if (currentRoles.includes(roleName)) {
      next();
      return;
    }
    
    res.status(401).json({error: 'unauthorized'});
  },

  jwtAuthentication: async (req, res, next) => {
    // mutate/inject
    req.isAuthenticated = () => {
      return req.user !== undefined;
    }

    if (!req.headers['authorization']) {
      res.status(403).json({error: 'token required'});
      return;
    }
  
    const token = req.headers['authorization'].split('Bearer ')[1];
  
    if (!token) {
      res.status(401).json({error: 'token invalid'});
      return;
    }
  
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY, {
        ignoreExpiration: false
      });

      const user = await User.findByPk(Number(decoded.sub), {
        include: [
          {
            model: Role,
            as: 'roles'
          }
        ],
      });
      req.user = user;
      next();

      // if (new Date(decoded.exp * 1000) > new Date()) {

      // }
    } catch (error) {
      res.status(401).json({error: error.message});
    }
  }
}