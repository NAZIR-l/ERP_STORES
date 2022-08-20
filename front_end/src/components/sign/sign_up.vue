<template>
  <Header :ProductHeader="true" :Sign_inHeader="true" />
  <Nav  v-if="shownav"/>
  <section>
    <!-- for error icons -->
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">

      <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
        <path
          d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      </symbol>
    </svg>
    <!-- ======================= -->
    <div class="imgBx">

      <img src="../images/ERP3.jpg" alt="">
    </div>
    <div class="contentBx">

      <div class="formBx">




        <h2>Rigister</h2>

        <div class="alert alert-danger d-flex align-items-center" role="alert" v-if="ShowError">
          <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:">
            <use xlink:href="#exclamation-triangle-fill" />
          </svg>
          <div>
            {{ ERROR }}
          </div>
        </div>
        <div class="alert alert-success d-flex align-items-center" role="alert" v-if="ShowSuccess">
          <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:">
            <use xlink:href="#exclamation-triangle-fill" />
          </svg>
          <div>
            {{ Success }}
          </div>
        </div>
        <form action="">

          <div class="inputBx">
            <span>Email</span>
            <input type="text" name="email" v-model="email" required>
          </div>
          <div class="inputBx">
            <span>First Name</span>
            <input type="text" name="fname" v-model="firstname" required>
          </div>
          <div class="inputBx">
            <span>Last Name</span>
            <input type="text" name="lname" v-model="lastname" required>
          </div>
          <div class="inputBx">
            <span>City</span>
            <input type="text" name="address" v-model="address" required>
          </div>
          <div class="inputBx">
            <span>Street</span>
            <input type="text" name="Street" v-model="Street" required>
          </div>
          <div class="inputBx">
            <span>Phone Number</span>
            <input type="text" name="Phone" v-model="Phone" required>
          </div>
          <div class="inputBx">
            <span>Password</span>
            <input type="password" name="password" v-model="passwords" required>
          </div>
          <div class="inputBx">
            <span>Confirm Password</span>
            <input type="password" name="conf_password" v-model="confi_password" required>
          </div>
          <div class="inputBx">
            <input @click="saveuser" type="submit" value="SignUP">

          </div>

        </form>



      </div>
    </div>
  </section>


</template>

<script>
import Header from '../layout/header.vue'
import Nav from '../layout/nav.vue'
import { ref } from 'vue'
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      firstname: "",
      lastname: "",
      address: "",
      passwords: "",
      confi_password: "",
      Phone: "",
      ERROR: "",
      Street: "",
      ShowError: false,
      ShowSuccess: false,
      Success: "",
      shownav: false,

    }
  },
  components: {
    Header,
    Nav
  },
   created() {
    this.Test();
  },
  methods: {


    async saveuser() {
      try {
        const response = await axios.post("http://localhost:3000/signup", {
          First_name: this.firstname,
          Last_name: this.lastname,
          Address: this.address,
          Email: this.email,
          passwords: this.passwords,
          confi_password: this.confi_password,
          Street: this.Street,
          Phone: this.Phone
        })
        console.log("--------------------------------" + response.status)
        console.log("--------------------------------" + response.data)
        if (response.status === 200) {
          this.ShowSuccess = false;
          this.Success = ""
          this.ShowError = true;
          this.ERROR = response.data
        }
        if (response.status === 201) {
          this.ShowSuccess = true;
          this.ShowError = false;
          this.ERROR = ""
          this.Success = response.data
        }
        this.firstname = "";
        this.lastname = "";
        this.address = "";
        this.email = "";
        this.passwords = "";
        this.confi_password = "";
        this.Street = "";
        this.Phone = "";
      }
      catch (err) {
        console.log(err.message);
      }
    },
    

    // Get All Products
      async  Test() {
  let request = {
        url: "http://localhost:3000/signupTEST", // should be replaced after going to production with domain URL
        withCredentials: true,
        method: "get",  
        headers: {
          "Content-type": "application/json"
        }
      };
      const response = await axios(request);
      console.log(response.status);
      if (response.status == 203) {
this.shownav = false;
      }
else{
this.shownav = true;

}
      return response;
  }
}
}
</script>

<style scoped>
@import '../css/Sign_in.css';
</style>