<template>
   <div class="imgBx" style="position: fixed;left: 0;">
    <img src="https://th.bing.com/th/id/OIP.aD28yBY-7Xs9sp_NmJFp_wHaHZ?pid=ImgDet&w=981&h=980&rs=1" alt="">
  </div>
  <form class="row g-3" id="form">
    <div class="col-md-6">
      <label for="image" class="form-label">image</label>
      <input type="text" class="form-control" id="image" v-model="image">
    </div>
    <div class="col-md-6">
      <label for="Name" class="form-label">Name</label>
      <input type="text" class="form-control" id="Name" v-model="Name">
    </div>
    <div class="col-6">
      <label for="Details" class="form-label">Details</label>
      <input type="text" class="form-control" id="Details" v-model="Details">
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
        return {
            image:"",
            Name:"",
            Details:"",
        }
    },
     methods: {
    async ADD() {
      try {
        let data = {
          Image:this.image,
          Name: this.Name,
          Details:this.Details

        }
        let request = {
          url: "http://localhost:3000/carousel/ADD",
          withCredentials: true,
          method: "post",
          headers: {
            "Content-type": "application/json"
          },
          data: JSON.stringify(data)
        };
        const response = await axios(request)

        console.log(response.data);

        return response;
      }
      catch (error) {
        console.log(error);

      }
    }
  }

}
</script>

<style>

</style>
