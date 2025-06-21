const express = require('express');
const router = express.Router(); //calling express router
const {body} = require('express-validator'); //for validation
const usercontroller = require('../controllers/user.controller'); //importing user controller
const authMiddleware = require('../middlewres/auth.middlewares'); //importing auth middleware


router.post('/register', [  //here we check the info using express-validator, if any canhge is needed, it will be done in registerUser function
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('fullname.lastname').isLength({ min: 3 }).withMessage('Last name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
],  
   usercontroller.registerUser
) //route for user registration, all validation will be handled in the controller

router.post('/login', [  //route for user login, all validation will be handled in the controller
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').notEmpty().withMessage('Password is required')
],  
   usercontroller.loginUser
)

router.get('/profile', authMiddleware.authUser, usercontroller.getUserProfile); //route for getting user profile, all validation will be handled in the controller


router.get('/logout', authMiddleware.authUser, usercontroller.logoutUser); //route for user logout, all validation will be handled in the controller

module.exports = router;  // Export the router to be used in the main app