const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');

// add a comment route
router.route('/:pizzaId').post(addComment);

// delete a comment
router.route('/:pizzaId/:commentId').delete(removeComment);

module.exports = router;