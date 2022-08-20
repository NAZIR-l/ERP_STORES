const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/shopping_store',{useNewUrlparser:true},(error)=>{

  if(error){
console.log(error);
  }
  else{


console.log('its connected to database : shopping_store');

  }

});



