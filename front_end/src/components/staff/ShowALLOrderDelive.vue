<template>
  <div>
    <div class="imgBx">
      <img style="    padding: 10px"
        src="https://th.bing.com/th/id/R.3f195837c61c3ac85ac5ffe8ebeecbd0?rik=x4jBfbAwqQ%2b%2f2A&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_61803.png&ehk=%2fKdBbQgvGfbY4hzWbcVfeE3DT1dB019X%2fBXxVXrl%2bqc%3d&risl=&pid=ImgRaw&r=0"
        alt="">
    </div>
    <table class="table table-hover">
      <tr>
        <th class="table-primary">
          <h4>EMAILCustomer</h4>
        </th>
        <th class="table-secondary">
          <h4>TOTAL_Price</h4>
        </th>
        <th class="table-secondary">
          <h4>Quantity</h4>
        </th>
      <th class="table-secondary">
          <h4>ORDER_State:</h4>
        </th>
             <th class="table-secondary">
          <h4>ORDER_Location:</h4>
        </th>
           <th class="table-secondary">
          <h4>Product</h4>
        </th>  
         <th class="table-secondary">
          <h4>Email Delivery</h4>
        </th>  
      


      </tr>
      <tr v-for="item in items" :key="item._id">
        <td class="table-secondary">
          <h3>{{ item.EMAILCustomer }} </h3>
        </td>
        <td class="table-primary">
          <h4>{{ item.Total_price }}</h4>
        </td>
        <td class="table-secondary">
          <h4>{{ item.Totalquantity }}</h4>
        </td>
        <td class="table-primary">
          <h4>{{ item.State }}</h4>
        </td>
      
        <td class="table-primary">
          <h4>{{ item.Location }}</h4>
        </td>
        <td class="table-secondary" style="display: inline-flex;">
          <h4 v-for="product in item.Product" :key="product">{{ product }} </h4>
        </td>
            <td class="table-primary">
          <h4>{{ item.DeliveryEmail }}</h4>
        </td>
   
      </tr>
      <tr>


      </tr>
    </table>
  </div>
</template>


<script>
import ListOrder from '../Order/ListOrder.vue'
import axios from "axios";

export default {
    data(){
        return{
            items:[],
            id:"",
        }
    },
     components:{
    ListOrder
  },
created() {
    this.Update();
  },
  methods: {
    async Update() {
      let request = {
        url: "http://localhost:3000/Order/ALLOrdersManageOK", // should be replaced after going to production with domain URL
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
    }

  },

}
</script>

<style>

</style>