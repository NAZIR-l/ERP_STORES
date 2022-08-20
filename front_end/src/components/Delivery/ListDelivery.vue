<template>
     <div >   
    <div class="imgBx">
    <img src="https://th.bing.com/th/id/OIP.aD28yBY-7Xs9sp_NmJFp_wHaHZ?pid=ImgDet&w=981&h=980&rs=1" alt="">
</div>
 <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th> Email</th>
          <th>Phone</th>
          <th>Car_Plate</th>
          <th>Name</th>
          <th>Address</th>
          <th>Salary</th>
          <th>passwords</th>

          

          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody class="table table-secondary table-striped ">
        <tr v-for="item in items" :key="item._id">
          <td>{{ item.Email }}</td>
          <td>{{ item.Phone}}</td>
          <td>{{item.Car_Plate}}</td>
          <td>{{item.NAME}}</td>
          <td>{{item.Address}}</td>
          <td>{{item.Salary}}</td>
          <td>{{item.passwords}}</td>
        <td class="has-text-centered">       
             <a class="button is-danger is-small" id="delete" @click="deleteDeliver(item._id)" >Delete</a>
          </td>
        </tr>
      </tbody>
    </table> 
  
  </div>
</template>

<script>
import axios from "axios";
  
export default {
  name: "",
  data() {
    return {
      items: [],
    };
  },
  
  created() {
    this.ShowDelivery();
  },
  
  methods: {
      async  ShowDelivery() {
  let request = {
        url: "http://localhost:3000/Employee/Show", // should be replaced after going to production with domain URL
        withCredentials: true,
        method: "get",  
        headers: {
          "Content-type": "application/json"
        }
      };
      const response = await axios(request);
      console.log(response.data)
        this.items = response.data;
if(response.status == 203) {
               this.$router.push({ name: 'signin' })

}
      return response;
}, 
      async deleteDeliver(id) {
      try {
        await axios.delete(`http://localhost:3000/Employee/DeleteDelivery/${id}`);
        this.ShowDelivery();
      } catch (err) {
        console.log(err);
      }
    },
  

  },
};
</script>

<style>

</style>