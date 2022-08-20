<template>
  <div>   
    <div class="imgBx">
    <img src="https://th.bing.com/th/id/OIP.aD28yBY-7Xs9sp_NmJFp_wHaHZ?pid=ImgDet&w=981&h=980&rs=1" alt="">
</div>
 <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Employee Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Birth Date</th>
          <th>Address</th>
          <th>Salary</th>
          <th>Password</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody class="table table-secondary table-striped ">
        <tr v-for="item in items" :key="item._id">
          <td>{{ item.NAME }}</td>
          <td>{{item.Phone}}</td>
          <td>{{item.Email}}</td>
          <td>{{item.Date}}</td>
          <td>{{ item.Address }}</td>
          <td>{{item.Salary}}</td>
          <td>{{item.passwords}}</td>

        <td class="has-text-centered" style=" display: flex;     padding: 11px;">
             <router-link :to="{ name:'update', params: { id: item._id } }" id="delete" class="button is-info is-small" >   Edit  </router-link> 
        
             <a class="button is-danger is-small" id="delete" @click="deleteEmployee(item._id)" >Delete</a>
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
    this.getEmployee();
  },
  
  methods: {
    // Get All Products


      async  getEmployee() {
  let request = {
        url: "http://localhost:3000/Employee/addEmployee", // should be replaced after going to production with domain URL
        withCredentials: true,
        method: "get",  
        headers: {
          "Content-type": "application/json"
        }
      };
      const response = await axios(request);
      console.log(response.data)
        this.items = response.data;

      return response;
}, 

    // async getEmployee() {
    //   try {
    //     const response = await axios.get("http://localhost:3000/Employee/addEmployee");
    //     this.items = response.data;
    //     console.log(response.data)
        
    //   } catch (err) {
    //     console.log("error message")
    //     console.log(err);
    //   }
    // },
      async deleteEmployee(id) {
      try {
        await axios.delete(`http://localhost:3000/Employee/addEmployee/${id}`);
        this.getEmployee();
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
#delete{
    text-decoration: none;
    color: chocolate;
    border: 1px solid #ca0303;
    border-radius: 51px;
 
}
#delete:hover{
       background-color: red;
    color: white;
}
</style>