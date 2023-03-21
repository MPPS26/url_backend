const router = require("express").Router();
const validateToken = require ('../middlewares/validateToken')
const signUpValidate = require ('../middlewares/signUpValidate')
const loginValidate= require ('../middlewares/loginValidate')
const JoiValidate = require('@hapi/joi');




//public routes
router.post('/signup', signUpValidate, require('../controllers/signUp'));

router.post('/login', loginValidate, require('../controllers/login'));


//private routes
router.use('/private/userData/id:', validateToken, require('../controllers/userData'));



module.exports = router;