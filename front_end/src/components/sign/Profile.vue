<template>
<div v-if="show">   
    
 
    <div class="col-md-4">
      <img class="images" src="https://th.bing.com/th/id/R.4f033aecb426d3fa09ea35c88cb90067?rik=9WVS%2bMIGtOoxYg&pid=ImgRaw&r=2&sres=2&sresct=2"  alt="">
    </div>
    <div class="profile">
        <img src="https://www.bing.com/th?id=OIP.DBhjc4t4vs2Y6uTzy0x2kwHaHL&w=188&h=183&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" alt="">
    </div>
  <table class="table table-bordered " id="table" >
 <thead>
    <tr>
      <th colspan="2">Informations Profile</th>
     
    </tr>
  </thead>
   <tbody>
    <tr>
        <th> ID </th>
        <td>{{items._id}}</td>
    </tr>
    <tr>
        <th >EMAIL    : </th>
        <td> {{items.Email}} </td>
    </tr>
     <tr>
        <th >First Name</th>
        <td>{{items.First_name}}</td>
        
    </tr> 
    <tr>
        <th>Last Name</th>
        <td> {{items.Last_name}}</td>
    </tr>
    <tr>
        <th>Address</th>
        <td>{{items.Address}}</td>
    </tr>


   </tbody>
    

  </table>
  
  </div>

</template>

<script>
import axios from "axios";

export default {
data() {
    return {
      items: [],
      show : false
    };
  },
  
  created() {
    this.GetCustomer();
  },
  methods: {
    // Get All Products
      async  GetCustomer() {
  let request = {
        url: "http://localhost:3000/Profile", // should be replaced after going to production with domain URL
        withCredentials: true,
        method: "get",  
        headers: {
          "Content-type": "application/json"
        }
      };
      const response = await axios(request);
      console.log(response.data)
      console.log(response.status)
      if(response.status == 203){
               this.$router.push({ name: 'signin' })
      }
      else{
        this.show = true
        this.items = response.data
      }
      
      return response;
}, 
}
}
</script>

<style>
#table{
        background: #e7e8edfa;
    position: absolute;
    width: 70%;
    left: 30%;
    top: 30%;
    height: 300px;
    border: 5px solid #635f61;
    border-radius: 40%;
}
.profile img{
    position: absolute;
    width: 30%;
    left: 0;
    top: 30%;
    border-radius: 100%;
}
</style>