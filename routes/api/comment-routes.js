const router = require('express').Router();
const { addComment, removeComment, addReply, removeReply } = require('../../controllers/comment-controller');

// add a comment route
router.route('/:pizzaId').post(addComment);

// delete a comment & add a reply
router
    .route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(removeComment);

// delete a reply
router
.route('/:pizzaId/:commentId/:replyId')
.delete(removeReply);

module.exports = router;