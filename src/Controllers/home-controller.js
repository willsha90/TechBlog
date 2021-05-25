const visitCounter = require('../Utils/visit-counter');
const PostService = require('../Services/post-service');

module.exports = {
  showHomePage: async (req, res) => {
    try {
      const {user} = req.session;

      const post = await PostService.findAll(user);

      const model = {
        posts: posts 
      };

      if(user) {
        model.user = user;
      }

      res.render('index', model)
    } catch (err) {
      console.error(err);
      res.status(500).send("internal server error");
    }
  }
};
