const {User, Post} = require('../Models');

module.exports = {
  findAll: async (loggedInUser) => {
    try {
      const blogData = await Post.findAll({
        include: { 
          model: User,
          as: 'creator', 
          attributes: ['username'] 
        }
      })
      if (blogData) {
        return posts = blogData.map(element => element.get({ plain: true }));
      }
      else {
        return [];
      }
    } catch (err) {
      console.error('PostService.findAll(): error', err);
      throw err;
    }
  },
  findById: async (loggedInUser, id) => {},
  create: async (loggedInUser, id, title, content) => {},
  update: async (loggedInUser, id, title, content) => {},
  delete: async (loggedInUser, id) => {}
};
