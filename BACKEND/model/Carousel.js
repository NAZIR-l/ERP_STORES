const mongoose = require('mongoose');

const Carousel = new mongoose.Schema({
    Name: String,
       
    Image  :  String,
    
    Details: String,
});




module.exports = mongoose.model('Carousel', Carousel);
