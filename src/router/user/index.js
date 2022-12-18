const UserController = require('../../controllers/User.controller');
const AuthMiddleware = require('../../middlewares/Auth.middleware');
const router = require('express').Router();

router.post('/', UserController.createUser);
router.post('/grant/:user_id', AuthMiddleware, UserController.grantUser);

module.exports = router;
