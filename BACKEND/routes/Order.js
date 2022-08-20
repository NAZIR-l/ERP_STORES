var express = require('express');

const { GetOrder , deleteOrder , GetAllOrder , ALLOrdersManage,ALLOrdersManageOK ,deleteOrderm ,ALLOrdersByState } = require('../Controller/Order/ShowOrder')

const {MAnageOrder ,UpdateState ,UpdateStateReady} = require('../Controller/Order/MAnageOrder')

var router = express.Router();

const manger = require('../routes/manger');

router.post('/Manage', MAnageOrder);

router.get('/List', GetOrder);

router.get('/ALLOrders', GetAllOrder);

router.get('/ALLOrdersManage', ALLOrdersManage);

router.get('/ALLOrdersManageOK', ALLOrdersManageOK);

router.put('/UpdateState/:id', UpdateState);

router.delete('/List/:id', deleteOrder);

router.delete('/Delete/:id', deleteOrderm);

router.get('/ALLOrdersByState',manger.sign_Delivery ,ALLOrdersByState);

router.put('/UpdateStateReady/:id', UpdateStateReady);

module.exports = router;