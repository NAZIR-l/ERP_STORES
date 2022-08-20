const Carousel = require('../../model/Carousel')

const Createcarousel =(data, carousel)=>{
    Carousel.create(data,(err, carousels)=>{
        if(err){
            console.log(err)

            carousel(err, null)
        }
        else{
            console.log("the carousel" + carousels)

            carousel(null, carousels)
        }
    })
}
module.exports = {  Createcarousel} ;