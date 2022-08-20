var express = require('express');

const {ADD  , Show ,deleteCarousel } = require('../Controller/carousel/carousel')


var router = express.Router();

const manger = require('../routes/manger');

router.post('/ADD', ADD);


router.get('/Show', Show);




router.delete('/Delete/:id', deleteCarousel);


module.exports = router;