const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      this.belongsToMany(models.User,{
        through: models.UserRole,
        as: "users",
        foreignKey: "role_id",
      });
    };
  }

  Role.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Role',
    tableName: 'roles',
    timestamps: false
  });

  return Role;
}
