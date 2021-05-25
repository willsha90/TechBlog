const router = require('express').Router();

router.use(require('./home-routes'));
router.use(require('./login-routes'));
router.use('/post', require('./post-routes'));

module.exports = router;