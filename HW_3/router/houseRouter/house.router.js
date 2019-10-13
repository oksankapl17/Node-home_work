const router = require('express').Router();

const { house: houseMiddleware } = require('../../middleware');
const { house } = require('../../controllers');

router.post('/', house.createHouse);
router.get('/', house.findAllHouses);
router.get('/:id', houseMiddleware.isHousePresentMiddleware, house.getById);
router.patch('/:id', house.updateHouse);

module.exports = router;
