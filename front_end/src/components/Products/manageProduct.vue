<template >
  <div v-if="show">   
    <div class="imgBx">
    <img src="https://th.bing.com/th/id/OIP.aD28yBY-7Xs9sp_NmJFp_wHaHZ?pid=ImgDet&w=981&h=980&rs=1" alt="">
</div>
 <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>image</th>
          <th>Price</th>
          <th>information</th>
          <th>Source Name</th>
          <th>quantity</th>

          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody class="table table-secondary table-striped ">
        <tr v-for="item in items" :key="item._id">
          <td>{{ item.productName }}</td>
          <td><img :src="item.imagePath" alt=""></td>
          <td>{{item.price}}</td>
          <td>{{item.information}}</td>
          <td>{{item.name_sources}}</td>
          <td>{{item.quantity}}</td>
       
        <td class="has-text-centered">
             <router-link :to="{ name:'updateProduct', params: { id: item._id } }" id="delete" class="button is-info is-small" >   Edit  </router-link> 
        
             <a class="button is-danger is-small" id="delete" @click="deleteProduct(item._id)">Delete</a>
          </td>
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
      show:false
    };
  },
    created() {
    this.getProduct();
  },
  
  methods: {
    // Get All Products
    
    async getProduct() {
      try {
        // const response = await axios.get("http://localhost:3000/Products/add");
        // this.items = response.data;
        let request = {
        url: "http://localhost:3000/Products/adds", // should be replaced after going to production with domain URL
        withCredentials: true,
        method: "get",  
        headers: {
          "Content-type": "application/json"
        }
      };
      const response = await axios(request);
      console.log(response.data)
      console.log(response.status)
if(response.status ==203){
               this.$router.push({ name: 'signin' })


}
      this.items = response.data;
      this.show = true
      return response;
      } catch (err) {
        console.log(err);
      }
    },
      async deleteProduct(id) {
      try {
        await axios.delete(`http://localhost:3000/Products/add/${id}`);
        this.getProduct();
      } catch (err) {
        console.log(err);
      }
    },
  

  },
}
</script>

<style>

</style>