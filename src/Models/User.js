const bcrypt = require('bcrypt');
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class User extends Model {
    async validatePassword(password) {
        return await bcrypt.compare(password, this.password);
    }
}

User.init(
    {
        username: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

User.beforeCreate(async (user, options)=>{
    const hash =  await bcrypt.hash(user.password, 10);
    user.password = hash;
    console.log(user.toJSON())
});

// User.beforeSave(async (user, options)=>{
//     console.log(`before save changed= ${user.password._change}`)
//     if(user.password._change) {
//         const hash =  await bcrypt.hash(user.password, 10);
//         user.password = hash;
//     }
// });

module.exports = User;
