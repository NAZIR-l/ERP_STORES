<template>
 <div class="imgBx" style="position: fixed;left: 0;">
    <img src="https://th.bing.com/th/id/OIP.aD28yBY-7Xs9sp_NmJFp_wHaHZ?pid=ImgDet&w=981&h=980&rs=1" alt="">
  </div>
  <form class="row g-3" id="form">
    <div class="col-md-6">
      <label for="Product" class="form-label">Product</label>
      <input type="text" class="form-control" id="Product" v-model="Product">
    </div>
    <div class="col-md-6">
      <label for="State" class="form-label">State</label>
      <input type="text" class="form-control" id="State" v-model="State">
    </div>
    <div class="col-6">
      <label for="Customer" class="form-label">Email Customer</label>
      <input type="text" class="form-control" id="Customer" v-model="Customer">
    </div>
     
      <div class="col-6">
      <label for="Source" class="form-label">Name Source</label>
      <input type="text" class="form-control" id="Source" v-model="Source">
    </div>
     <div class="col-6">
      <label for="Price" class="form-label">Total Price</label>
      <input type="number" class="form-control" id="Price" v-model="Price">
    </div>


    <div class="col-12" style="padding-bottom: 20px;">
      <button type="submit" @click="ADD" class="btn btn-dark">ADD</button>
    </div>
  </form>

</template>

<script>
import axios from "axios";

export default {
  data(){
    return{
      Product:"",
      State:"",
      Customer:"",
      Source:"",
      Price:0,
    }
  },
  created() {
    this.GetSource();
  },
    methods: {
        async  GetSource() {
  let request = {
        url: "http://localhost:3000/Source/test", // should be replaced after going to production with domain URL
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
      }
       , 
        async ADD() {
          
            try {
                 let data = {
          Product: this.Product,
          State: this.State,
          Customer: this.Customer,
          Source: this.Source,
          Price:this.Price,
        

        }
                let request = {
                    url: "http://localhost:3000/Source/add", // should be replaced after going to production with domain URL
                    withCredentials: true,
                    method: "post",
                    headers: {
                        "Content-type": "application/json"
                    },
          data: JSON.stringify(data)

                };
                const response = await axios(request);
                console.log(response.status)
                console.log(response.data)
              if(response.status == 203){
               this.$router.push({ name: 'signin' })

              }
                return response;

            } catch (err) {
                console.log(err);
            }
        },
        }

}
</script>

<style>

</style>