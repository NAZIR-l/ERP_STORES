<template>
  <List  :items="items"  :update ="false"/>
</template>
  
<script>

// // import axios
import axios from "axios";
import List from './ListOrder.vue'

export default {
  name: "ALLOrder",
  components:{
    List
  },
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
    async GetCustomer() {
      let request = {
        url: "http://localhost:3000/Order/ALLOrders", // should be replaced after going to production with domain URL
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
};
</script>
  
<style>
.imgBx {
  padding-top: 25px;
}

#delete {
  text-decoration: none;
  color: #1c1612;
  border: 1px solid #2e2929;
  border-radius: 51px;
}

#delete:hover {
  background-color: #1c1612;
  color: white;
}
</style>