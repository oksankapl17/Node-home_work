const router = require('express').Router();

const { user: userMiddleware } = require('../../middleware');
const { user } = require('../../controllers');

router.post('/', user.createUser);
router.get('/', user.findAllUsers);
router.get('/:id', userMiddleware.isUserPresentMiddleware, user.getById);
router.patch('/:id', userMiddleware.checkAccessTokenMiddleware, user.updateUser);
router.delete('/:id', userMiddleware.checkAccessTokenMiddleware, user.deleteUser);

router.get('/:id/houses', user.getUserWHouseById);

module.exports = router;
