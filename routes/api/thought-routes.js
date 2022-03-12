const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  addThought,
  removeThought,
  updateThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thought-controller');

//thoughts
router.route('/').get(getAllThoughts).post(addThought);
router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(removeThought);

//reactions
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
