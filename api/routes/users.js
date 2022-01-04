const express = require("express");
const router = express.Router();
const UserController = require('../controllers/UserController')


router.get('/', UserController.getAllUsers)
router.post('/', UserController.crateUser)
router.put('/', UserController.changeInfo)

router.post('/orders', UserController.getVTEXOrdersByEmails)
router.get('/orders/:id', UserController.getVTEXOrders)

router.get('/activity', UserController.getByActivity)


module.exports = router