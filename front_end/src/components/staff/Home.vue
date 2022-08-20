<template>

<div v-if="show">   
    
  <Nav   :AddEmployee = "false" :AllOrderDelived="true" :ListEmployees = "false"  :Search = "false" :listUser = "true" :listProduct = "true" :addProduct = "true" :Allorders= "false" :AllOrder= "false"  :signupSource="true" :showAllSource = " true" :ADDCarousel="true" :ShowCarousel="true" :AddOrder= "false" :UpdateState="true" :AddDelivery="true" :ShowDelivery="true" />
 
  
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
        <th >Name</th>
        <td>{{items.NAME}}</td>
        
    </tr> 
    <tr>
        <th> Phone Number</th>
        <td> {{items.Phone}}</td>
    </tr>
    <tr>
        <th>Address</th>
        <td>{{items.Address}}</td>
    </tr>
        <tr>
        <th>Salary</th>
        <td>{{items.Salary}}</td>
    </tr>


   </tbody>
    

  </table>
  
  </div>

</template>

<script>
import axios from "axios";
import Nav from '../Mamger/NavManger.vue'


export default {
data() {
    return {
      items: [],
      show : false
    };
  },
   components: {

    Nav
  },
  
  created() {
    this.GetCustomer();
  },
  methods: {
    // Get All Products
      async  GetCustomer() {
  let request = {
        url: "http://localhost:3000/Employee/Home", // should be replaced after going to production with domain URL
        withCredentials: true,
        method: "get",  
        headers: {
          "Content-type": "application/json"
        }
      };
      const response = await axios(request);
      console.log(response.data)
      console.log(response.status)
      if(response.data == "NOT_SIGN_IN_LIKE_Employee"){
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
    width: 60%;
    left: 40%;
    top: 30%;
    height: 300px;
    border: 5px solid #635f61;
    border-radius: 40%;
}
.profile img{
    position: absolute;
    width: 30%;
    left: 10%;
    top: 30%;
    border-radius: 100%;
}

</style>