const express = require('express')
const UserMiddleware = require('../middlewares/request.validator')
const UserController = require('../controllers/user.controller')

const userMiddleware = new UserMiddleware();
const userContoller = new UserController();
const router = express.Router();

router.post('/register',userMiddleware.registrationValidator,userContoller.registerUser)

module.exports = router
