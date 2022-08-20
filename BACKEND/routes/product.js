var express = require('express');

const { CreateProducts ,ShowProductes ,showProductById  ,deleteProduct ,UpdateProduct} = require('../Controller/Product/product')

var router = express.Router();

const manger = require('../routes/manger');

// router.get('/products' , showuser);
// router.get('/', function(req, res, next) {

//     res.render('index', { title: 'Express' });
//   });

router.get('/add',manger.sign_User ,ShowProductes);

router.get('/AuthCreate',manger.sign_User ,(req, res, next) => {
    console.log('AuthCreate')
});
router.get('/adds',manger.check_is_Login ,ShowProductes);
router.get('/addes' ,ShowProductes);


router.post('/add'  ,CreateProducts);


router.get('/add/:id'  ,manger.sign_User ,showProductById);


router.delete('/add/:id', deleteProduct);


router.put('/add/:id', UpdateProduct);





  

module.exports = router;
