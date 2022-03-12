const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  addThought,
  removeThought,
  updateThought,
  // addReaction,
  // removeReaction,
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThoughts).post(addThought);
router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(removeThought);

module.exports = router;
