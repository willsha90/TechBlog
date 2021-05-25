const visitCounter = require('../Utils/visit-counter');
const {User, Post} = require('../Models');

module.exports = {
  showListPostsPage: async (req, res) => {
  },
  showPostDetailPage: async (req, res) => {
    try {
      const blogData = await post.findAll({
        where: {
          user_id: req.params.id
        }
      })
      const posts = blogData.map(element => element.get({ plain: true }))
      await res.render('dashboard', { posts: posts })
    } catch (err) {
      res.status(500).json('500 Internal Server Error.')
    }
  }
};
