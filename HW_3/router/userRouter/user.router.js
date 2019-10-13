const router = require('express').Router();

const { user: userMiddleware } = require('../../middleware');
const { user } = require('../../controllers');

router.post('/', userMiddleware.checkUserValidityMiddleware, user.createUser);
router.get('/', user.findAllUsers);
router.get('/:id', userMiddleware.isUserPresentMiddleware, user.getById);
router.patch('/:id', userMiddleware.checkUserValidityMiddleware, user.updateUser);

module.exports = router;
