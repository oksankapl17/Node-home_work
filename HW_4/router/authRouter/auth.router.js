const router = require('express').Router();
const { user: userMiddleware } = require('../../middleware');
const { user } = require('../../controllers');


router.post('/login', userMiddleware.findUserLoginMiddleware, user.loginUser);

module.exports = router;