const router = require('express').Router();
const { user: userMiddleware } = require('../../middleware');
const { user, mainPages: { loginPage, registerPage } } = require('../../controllers');

router.get('/login', loginPage);
router.get('/register', registerPage);
router.post('/users', userMiddleware.findUserLoginMiddleware, user.loginUser);


module.exports = router;
