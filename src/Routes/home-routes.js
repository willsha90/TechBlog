  
const router = require('express').Router()
const { Post, User } = require('../models')

router.get('/', async (req, res) => {
  try {
    const blogData = await Post.findAll({
      include: { 
        model: User,
        as: 'creator', 
        attributes: ['username'] 
      }
    })
    if (blogData) {
      const posts = blogData.map(element => element.get({ plain: true }))
      res.render('index', { posts: posts })
    }
    else {
      console.warn('no posts found!! route- /');
      res.status(404).json('404 Blog Data Not Found.')
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err)
  }
})

// log-in Route - refers to layouts
router.get('/login', async (req, res) => {
  return await res.render('login')
})
// signup Route - refers to layouts
router.get('/signup', async (req, res) => {
  return await res.render('signup')
})

// post Route - refers to layouts
router.get('/post', async (req, res) => {
  return await res.render('post')
})

router.get('/dashboard/:id', async (req, res) => {
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
})

module.exports = router