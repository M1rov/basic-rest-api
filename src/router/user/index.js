const UserController = require('../../controllers/User.controller');
const router = require('express').Router();

router.post('/', UserController.createUser);
router.post('/grant/:user_id', UserController.grantUser);

module.exports = router;
