const Carousel = require('../../model/Carousel')

const {Createcarousel} = require('../../models/carousel/Addcarousel')
const {deleteCarousels} = require('../../models/carousel/Deletecarousels')

const ADD = (req,res)=>{
    const data = req.body
    console.log(data)
    Createcarousel(data,(err,Carousel)=>{
        if(err){
            console.log(err)
            res.send(err)
        }
        else{
            console.log("the carousel was created successfully" +Carousel)
            res.send(Carousel)
        }
    })
}

const Show = (req, res) => {
    Carousel.find({},(err, Carousel)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(Carousel)
        }
    })
}


const deleteCarousel = (req, res) => {
    const id = req.params.id;
    deleteCarousels(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}



module.exports = {  ADD ,Show ,deleteCarousel };
