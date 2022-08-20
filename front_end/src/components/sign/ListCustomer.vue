<template>
  <div>   
    <div class="imgBx">
    <img src="https://th.bing.com/th/id/OIP.aD28yBY-7Xs9sp_NmJFp_wHaHZ?pid=ImgDet&w=981&h=980&rs=1" alt="">
</div>
 <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Number</th>
          <th>Email</th>
          <th>City</th>
          <th>Street</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody class="table table-secondary table-striped ">
        <tr v-for="item in items" :key="item._id">
          <td>{{ item.First_name }}</td>
          <td>{{item.Last_name }}</td>
          <td>{{item.Email}}</td>
          <td>{{ item.Address }}</td>
          <td>{{ item.Street }}</td>
      
        <td class="has-text-centered">
        
             <a class="button is-danger is-small" id="delete" @click="deleteCustomer(item._id)" >Delete</a>
          </td>
        </tr>
      </tbody>
    </table> 
  
  </div>
</template>
  
<script>

// // import axios
import axios from "axios";
  
export default {
  name: "ListEmployee",
  data() {
    return {
      items: [],
    };
  },
  
  created() {
    this.GetCustomer();
  },
  methods: {
    // Get All Products
      async  GetCustomer() {
  let request = {
        url: "http://localhost:3000/signup", // should be replaced after going to production with domain URL
        withCredentials: true,
        method: "get",  
        headers: {
          "Content-type": "application/json"
        }
      };
      const response = await axios(request);
      console.log(response.data)
      if(response.data == "404 Not Found"){
               this.$router.push({ name: 'signin' })
      }
      else{
        this.items = response.data
      }
      
      return response;
}, 


      async deleteCustomer(id) {
      try {
        await axios.delete(`http://localhost:3000/signup/${id}`);
        this.GetCustomer();
      } catch (err) {
        console.log(err);
      }
    },
  

  },
}; 
         </script>
  
<style>
.imgBx{
    padding-top: 25px;
}
#delete {
    text-decoration: none;
    color: #1c1612;
    border: 1px solid #2e2929;
    border-radius: 51px;
    }
#delete:hover{
       background-color:#1c1612;
    color: white;
}
</style>