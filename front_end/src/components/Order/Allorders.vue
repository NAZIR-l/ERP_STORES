<template>
  <List :items="items" :update ="false"/>
</template>

<script>
import List from './ListOrder.vue'
import axios from "axios";

export default {
    data(){
        return{
            items:[]
        }
    },
     components:{
    List
  },
  created() {
    this.GetCustomer();
  },
  methods: {
    // Get All Products
    async GetCustomer() {
      let request = {
        url: "http://localhost:3000/Order/ALLOrdersManage", // should be replaced after going to production with domain URL
        withCredentials: true,
        method: "get",
        headers: {
          "Content-type": "application/json"
        }
      };
      const response = await axios(request);
      this.items = response.data
      console.log(response.data);
      console.log(response.status);
          if(response.status == 203){
         this.$router.push({ name: 'signin' })  
      }
      


      return response;
    },
  },

}
</script>

<style>

</style>