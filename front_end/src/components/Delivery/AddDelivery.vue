<template>
    <div class="imgBx" style="position: fixed;left: 0;">
    <img src="https://th.bing.com/th/id/OIP.aD28yBY-7Xs9sp_NmJFp_wHaHZ?pid=ImgDet&w=981&h=980&rs=1" alt="">
  </div>
  <form class="row g-3" id="form">
    <div class="col-md-6">
      <label for="Email" class="form-label">Email</label>
      <input type="email" class="form-control" id="Email" v-model="Email">
    </div>
    <div class="col-md-6">
      <label for="Name" class="form-label">Name</label>
      <input type="text" class="form-control" id="Name" v-model="Name">
    </div>
    <div class="col-6">
      <label for="Phone" class="form-label">Phone</label>
      <input type="number" class="form-control" id="Phone" v-model="Phone">
    </div>
    <div class="col-6">
      <label for="Car_Plate" class="form-label">Car_Plate</label>
      <input type="number" class="form-control" id="Car_Plate" v-model="Car_Plate">
    </div>
    <div class="col-6">
      <label for="Address" class="form-label">Address</label>
      <input type="text" class="form-control" id="Address" v-model="Address">
    </div>
    <div class="col-6">
      <label for="Salary" class="form-label">Salary</label>
      <input type="number" class="form-control" id="Salary" v-model="Salary">
    </div>
    <div class="col-6">
      <label for="passwords" class="form-label">passwords</label>
      <input type="number" class="form-control" id="passwords" v-model="passwords">
    </div>
    <div class="col-12" style="padding-bottom: 20px;">
      <button type="submit" @click="ADD" class="btn btn-dark">ADD Delivery</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
 data(){
        return {
            Email:"",
            Name:"",
            Phone:"",
            Car_Plate:"",
            Address:"",
            Salary:"",
            passwords:"",
        }
    },
     methods: {
    async ADD() {
      try {
        let data = {
          Email:this.Email,
          NAME: this.Name,
          Phone:this.Phone,
          Car_Plate:this.Car_Plate,
          Address:this.Address,
          Salary:this.Salary,
          passwords:this.passwords,

        }
        let request = {
          url: "http://localhost:3000/Employee/AddDelivery",
          withCredentials: true,
          method: "post",
          headers: {
            "Content-type": "application/json"
          },
          data: JSON.stringify(data)
        };
        const response = await axios(request)
this.Email="",
this.passwords="",
this.Address ="",
this.Salary="",
this.Name="", 
thi.Car_Plate="",
this.Phone="",
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