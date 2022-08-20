
const { model } = require('mongoose')
const Carousel = require('../../model/Carousel')            

 const deleteCarousels = (id, result) => {

    Carousel.findByIdAndDelete(id, function (err, results) {
    if(err) {
        console.log(err);
        result(err, null);
    } else {
        result(null, results);
    }
})     
}
      

module.exports = { deleteCarousels };
