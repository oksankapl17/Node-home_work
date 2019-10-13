const router = require('express').Router();

const { user: userMiddleware } = require('../../middleware');
const { user } = require('../../controllers');

router.post('/', user.createUser);
router.get('/', user.findAllUsers);
router.get('/:id', userMiddleware.isUserPresentMiddleware, user.getById);
router.patch('/:id', user.updateUser);

module.exports = router;
