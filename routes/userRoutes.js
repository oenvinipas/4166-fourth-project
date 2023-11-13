const express = require("express");
const userRouter = express.Router();
const controller = require("../controllers/userController");

//GET /users/new - send html form for creating a new user
userRouter.get('/new', controller.getNewPage);

// POST /users - create a new user
userRouter.post('/', controller.createUser);

//GET /users/login - send html form for login page
userRouter.get('/login', controller.getLoginPage);

//POST /users/login - authenticate user's login
userRouter.post('/login', controller.processLogin);

//GET /users/profile - get users's profile page
userRouter.get('/profile', controller.getProfilePage)

//Logging out user
userRouter.get('/logout', controller.logout);

module.exports = userRouter;