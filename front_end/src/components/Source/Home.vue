<template>
<div class="profile">
    <a href="/AddOrder"> 
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
        <td>{{items.Name}}</td>
        
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
        <th>Institution</th>
        <td>{{items.Institution}}</td>
    </tr><tr>
        <th>password</th>
        <td>{{items.password}}</td>
    </tr>


   </tbody>
    

  </table>

</template>

<script>
import Nav from '../Mamger/NavManger.vue'

import axios from "axios";

export default {
 
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.GetSource();
  },
  methods: {
    // Get All Products
      async  GetSource() {
  let request = {
        url: "http://localhost:3000/Source/SourceHome", // should be replaced after going to production with domain URL
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

</style>