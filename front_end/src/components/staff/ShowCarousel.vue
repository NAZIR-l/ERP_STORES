<template>
   <div >   
    <div class="imgBx">
    <img src="https://th.bing.com/th/id/OIP.aD28yBY-7Xs9sp_NmJFp_wHaHZ?pid=ImgDet&w=981&h=980&rs=1" alt="">
</div>
 <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th> Name</th>
          <th>image</th>
          <th>Details</th>
         

          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody class="table table-secondary table-striped ">
        <tr v-for="item in items" :key="item._id">
          <td>{{ item.Name }}</td>
          <td><img :src="item.Image" alt=""></td>
          <td>{{item.Details}}</td>

       
        <td class="has-text-centered">       
             <a class="button is-danger is-small" id="delete" @click="deleteCarousel(item._id)" >Delete</a>
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
    this.ShowCarousel();
  },
  
  methods: {
      async  ShowCarousel() {
  let request = {
        url: "http://localhost:3000/carousel/Show", // should be replaced after going to production with domain URL
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
      async deleteCarousel(id) {
      try {
        await axios.delete(`http://localhost:3000/carousel/Delete/${id}`);
        this.ShowCarousel();
      } catch (err) {
        console.log(err);
      }
    },
  

  },
};
</script>

<style>

</style>