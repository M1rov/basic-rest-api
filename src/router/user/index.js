const UserController = require('../../controllers/User.controller');
const router = require('express').Router();

router.post('/', UserController.createUser);

module.exports = router;
