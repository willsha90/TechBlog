const router = require('express').Router()
const PostController = require('../Controllers/post-controller');

// post Route - refers to layouts
router.route('/').get(PostController.showListPostsPage);

router
    .route('/:id/update')
        .get(PostController.showPostUpdatePage);

router
    .route('/:id/delete')
        .get(PostController.showPostDeletePage);

router
    .route('/:id')
        .get(PostController.showPostDetailPage);

module.exports = router