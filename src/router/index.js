const router = require('express').Router();
const user = require('./user/index');
const category = require('./category/index');
const record = require('./record/index');
const auth = require('./auth/index');
const AuthMiddleware = require('../middlewares/Auth.middleware');

router.use('/user', user);
router.use('/category', AuthMiddleware, category);
router.use('/record', AuthMiddleware, record);
router.use('/auth', auth);

module.exports = router;
