const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserRole extends Model {
    static associate(models) {
      // models.Category.hasMany(models.Article, {foreignKey: 'category_id'})
    };
  }

  UserRole.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
    role_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'roles',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    }
  }, {
    sequelize,
    modelName: 'UserRole',
    tableName: 'users_roles',
    timestamps: false
  });

  return UserRole;
}
