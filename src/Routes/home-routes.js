const router = require('express').Router()
const HomeController = require('../Controllers/home-controller');

router
  .route('/')
    .get(HomeController.showHomePage);

module.exports = router