const router = require('express').Router();

const { house: houseMiddleware } = require('../../middleware');
const { house } = require('../../controllers');

const { user: userMiddleware } = require('../../middleware');

router.post('/', userMiddleware.checkAccessTokenMiddleware, house.createHouse);
router.get('/', house.findAllHouses);
router.get('/:id', houseMiddleware.isHousePresentMiddleware, house.getById);
router.patch('/:id', userMiddleware.checkAccessTokenMiddleware, house.updateHouse);
router.delete('/:id', userMiddleware.checkAccessTokenMiddleware, house.deleteHouse);

module.exports = router;
