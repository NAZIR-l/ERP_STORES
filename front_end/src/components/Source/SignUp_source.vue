<template>
  <div class="imgBx" style="position: fixed;left: 0;">
    <img src="https://th.bing.com/th/id/OIP.aD28yBY-7Xs9sp_NmJFp_wHaHZ?pid=ImgDet&w=981&h=980&rs=1" alt="">
  </div>
  <form class="row g-3" id="form">
    <div class="col-md-6">
      <label for="inputEmail4" class="form-label">Email</label>
      <input type="email" class="form-control" id="inputEmail4" v-model="email">
    </div>
    <div class="col-md-6">
      <label for="inputPassword4" class="form-label">Password</label>
      <input type="password" class="form-control" id="inputPassword4" v-model="password">
    </div>
    <div class="col-6">
      <label for="Name" class="form-label">Name</label>
      <input type="text" class="form-control" id="Name" v-model="name">
    </div>
    <div class="col-6">
      <label for="Address" class="form-label">Address </label>
      <input type="text" class="form-control" id="Address" v-model="address">
    </div>
     <div class="col-6">
      <label for="Phone" class="form-label">Phone Number </label>
      <input type="text" class="form-control" id="Phone" v-model="Phone">
    </div>
    <div class="col-md-6"    >
      <label for="Institution" class="form-label">Institution</label>
      <input type="text" class="form-control" id="Institution" v-model="Institution">
    </div>



    <div class="col-12" style="padding-bottom: 20px;">
      <button type="submit" @click="SignIES" class="btn btn-dark">Sign Up Source</button>
    </div>
  </form>

</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      name: "",
      address: "",
      Institution: "",
      Phone: 0,
    }
  },
  methods: {
    async SignIES() {
      try {
        let data = {
          Email: this.email,
          password: this.password,
          Name: this.name,
          Address: this.address,
          Institution: this.Institution,
          Phone: this.Phone

        }
        let request = {
          url: "http://localhost:3000/Source/SignUp",
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
#form {
  position: absolute;
  /* padding-top: 100px; */
  background: #e1e9e6;
  border-radius: 20%;
  top: 150px;
}
</style>