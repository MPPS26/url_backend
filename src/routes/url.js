const router = require("express").Router();
const validateToken = require ('../middlewares/validateToken')
const JoiValidate = require('@hapi/joi');

//public routes
router.get('/redirect/url/:modifiedUrl', require('../controllers/redirect'))

//private routes
router.post('/private/url', validateToken, require('../controllers/createUrl'));
router.get ('/private/url', validateToken, require('../controllers/getAllUrls'));
router.get('/private/url/:id', validateToken, require('../controllers/getUrl'));
router.delete('/private/url/:id', validateToken, require('../controllers/deleteUrl'))


module.exports = router;