var express = require('express');

const { CreateEmployees , ShowEmployees ,showEmployeeById ,deleteEmployee , UpdateEmployee  ,AddDelivery ,ShowDelivery ,DeleteDelivery} = require('../Controller/Employee/Employee')

const {HomeEmployeeBage , ShowDeliveryByid} = require('../Controller/Employee/ShowByid')

var router = express.Router();

const manger = require('../routes/manger');

router.get('/addEmployee', ShowEmployees);

router.post('/addEmployee' ,CreateEmployees);

router.get('/addEmployee/:id', showEmployeeById);

router.delete('/addEmployee/:id', deleteEmployee);
 
router.put('/addEmployee/:id', UpdateEmployee);

router.get('/Home',manger.sign_Employee ,HomeEmployeeBage);

router.post('/AddDelivery' , AddDelivery);

router.get('/Show' ,manger.sign_Employee ,ShowDelivery);

router.delete('/DeleteDelivery/:id', DeleteDelivery);

router.get('/DeliveryHome',manger.sign_Delivery ,ShowDeliveryByid);

module.exports = router;
