

<script >
import axios from "axios";
import Nav from './NavManger.vue'


// import { ref, onBeforeMount , cre } from 'vue';

export default {
   data(){
        return{
      show : true
        }
    }, 

    components: {

    Nav
  },
    
    async  created() {
  let request = {
        url: "http://localhost:3000/manager/Home", // should be replaced after going to production with domain URL
        withCredentials: true,
        method: "get",  
        headers: {
          "Content-type": "application/json"
        }
      };
      const response = await axios(request);
      console.log(response.status + "            " + response.data)
      if(response.status == 203){
         this.$router.push({ name: 'signin' })  
      }
      else if(response.data == "NOT_SIGN_IN_LIKE_ADMIN"){
            this.$router.push({ name: 'signin' })  
      }
      return response;
}, 

    
    }
 


 
</script>

<template>
<div >
  <Nav   :AddEmployee = "true" :ListEmployees = "true"  :Search = "true" :listUser = "true" :listProduct = "true" :addProduct = "true" :Allorders = "true" :AllOrder= "false"  :signupSource="true" :showAllSource = " true"  :ADDCarousel="false" :ShowCarousel="false" :AddOrder= "false" :UpdateState="false"  :AddDelivery="false" :ShowDelivery="false" :AllOrderDelived="true" />
  <div class="imgBx" v-if="show" style="position: fixed;right: 0;">
    <img src="https://th.bing.com/th/id/OIP.aD28yBY-7Xs9sp_NmJFp_wHaHZ?pid=ImgDet&w=981&h=980&rs=1" alt="">
</div>


</div>
  
</template>

<style>

</style>