const { User } = require('../models');

const userData = [
  {
    username: 'user1@here.com',
    password: 'password7',
  },
  {
    username: 'user2@here.com',
    password: 'password6',
  },
  {
    username: 'tim@here.com',
    password: 'password5',
  },
  {
    username: 'jake@here.com',
    password: 'password4',
  },
  {
    username: 'mike@there.com',
    password: 'password1',
  },
  {
    username: 'conan@here.com',
    password: 'password3',
  },
  {
    username: 'brad@here.com',
    password: 'password2',
  },
  {
    username: 'erik@here.com',
    password: 'password32',
  },
];

// User.sync();

// ***** this just tests the passwork checker instance method
// const seedUser = async () => {
//   await User.bulkCreate(userData, {individualHooks: true});
//   const user1 = await User.findOne({username: userData[0].username});
//   console.log(`user 1's password (${userData[0].password}) matched ${await user1.validatePassword(userData[0].password + '10')}`)
// };
const seedUser = async () => await User.bulkCreate(userData, {individualHooks: true});


// Will added ////////////////////
// const seedUserData = () => User.bulkCreate(userData)


module.exports = seedUser;
