const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../config/connection.js');
const User = require('./User');

const MAX_POST_SIZE = 8042;

class Post extends Model {}

Post.init(
  {
    // define column
    title: {
        type: DataTypes.STRING(100),
        allowNull: false,
    }, 
    content: {
        type: DataTypes.STRING(MAX_POST_SIZE),
        allowNull: false,
    }, 
    creator_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: "id",
        }
    }, 
    creation_date: {
        type: DataTypes.TIME, 
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

Post.belongsTo(User, {
    as: 'creator',
    foreignKey: 'creator_id'
})

module.exports = Post;
Post.title