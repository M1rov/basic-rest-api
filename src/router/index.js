const router = require('express').Router();
const user = require('./user/index');
const category = require('./category/index');
const record = require('./record/index');

router.use('/user', user);
router.use('/category', category);
router.use('/record', record);

module.exports = router;
