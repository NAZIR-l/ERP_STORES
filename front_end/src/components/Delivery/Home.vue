<template>
  <!-- <Nav   :AddEmployee = "false" :ListEmployees = "false"  :Search = "false" :listUser = "false" :listProduct = "false" :addProduct = "false" :AllOrder= "true" :signupSource="false" :showAllSource = " false"  :ADDCarousel="false" :ShowCarousel="false"  :UpdateState="false"  :AddDelivery="false" :ShowDelivery="false"/> -->
  <div class="profile">
    <a href="/recepit"> 
        <img class="imagesss"  src="https://www.bing.com/th?id=OIP.zU9evfVc7VxQibgBbwSQQwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" alt="">

    </a>
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
    </tr><tr>
        <th>Car_Plate</th>
        <td>{{items.Car_Plate}}</td>
    </tr>


   </tbody>
    

  </table>
  
 
</template>

<script>
import Nav from '../Mamger/NavManger.vue'
import rep from './reciptOrder.vue'
import axios from "axios";

export default {
 components: {
 rep,
    Nav
  },
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.GetDelivery();
  },
  methods: {
    // Get All Products
      async  GetDelivery() {
  let request = {
        url: "http://localhost:3000/Employee/DeliveryHome", // should be replaced after going to production with domain URL
        withCredentials: true,
        method: "get",  
        headers: {
          "Content-type": "application/json"
        }
      };
      const response = await axios(request);
      console.log(response.data)
      console.log(response.status)
      if(response.status == 203) {
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
.imagesss{
transition: 0.9s ease;
}
.imagesss:hover{
 transform: scale(1.5);
 /* transform: rotate(360deg); */
    z-index: 1
}
   
</style>