const router = require('express').Router();
const services = require('../services/render')
const controller = require('../controller/controller')

/** 
 * @description Root Route
 * @method GET /
*/

router.get('/',services.homeRoutes)

/** 
 * @description Customer Route
 * @method GET /
*/

router.get('/customer',services.customerRoute)
/** 
 * @description Transaction Route
 * @method GET /
*/

router.get('/transaction',services.transactionRoute)

/** 
 * @description Send Route
 * @method GET /
*/

router.get('/send',services.sendRoute)

/** 
 * @description Success Route
 * @method GET /
*/

router.get('/successfull',services.successRoute)

//API

router.post('/api/transactions',controller.create);
router.get('/api/transactions',controller.find);




module.exports = router;