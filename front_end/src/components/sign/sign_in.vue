<template>


  <Header :ProductHeader="true" :Sign_inHeader="false" :SignUp = "!Gets" />
  <Nav  v-if="Gets"  />

  <section>

    
    <div class="imgBx">
      <img src="../images/ERP3.jpg" alt="">
    </div>
    <div class="contentBx">
      <div class="formBx">


        <h2>Login</h2>

   <h1>{{ dataes}}</h1>
        <form action="">
          <div class="inputBx">
            <span>
              Eamil
            </span>
            <input type="email" name="email" v-model="email" required>
          </div>
          <div class="inputBx">
            <span>Password</span>
            <input type="password" name="password" v-model="password" required>
          </div>
          <div class="remember">
            <label for=""><input type="checkbox">Remember me </label>
          </div>
          <div class="inputBx">
            <!-- <input @click="SignIES" type="submit" value="Signin"> -->
            <p @click="SignIES" style="background: #e5dddd;" class="btuo"> Submit </p>
          </div>

          <div class="inputBx">
            <p>Do not have an account <a href="#">Sign Up</a> </p>
          </div>
        </form>
        <h3>Login with social media</h3>
        <ul class="sci">
          <li @click="SignIES"><img src="" alt=""> <i class="bi bi-facebook" style="font-size: 2rem; color: white;"></i>
          </li>
          <li><img src="" alt=""><i class="bi bi-google" style="font-size: 2rem; color: white;"></i></li>
          <li><img src="" alt=""><i class="bi bi-linkedin" style="font-size: 2rem; color: white;"></i></li>

        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Header from '../layout/header.vue';
import Nav from '../layout/nav.vue'
import axios from "axios";
import {reactive} from 'vue'

export default {
   data(){
        return{
            email:"",
            password:"",
            showes:true,
            Gets:false,
            dataes:""
        }
    },
  components: {
    Header,
    Nav
  },
  
  created() {
 this.Get();
   
  },
  methods: {
  
    async Get(){
  let request = {
          url: "http://localhost:3000/login/get",
          withCredentials: true,
          method: "get",
          headers: {
            "Content-type": "application/json"
          },
        };
        const response = await axios(request)
        console.log(response.data)
        console.log(response.status)
        if(response.status == 203){
          this.Gets = false
        }
        else if(response.status == 200){
          this.Gets = true
        }
        return response
    },
  async       SignIES() {
      try {

        let data = {
          email: this.email,
          password: this.password,

        };
        let request = {
          url: "http://localhost:3000/login",
          withCredentials: true,
          method: "post",
          headers: {
            "Content-type": "application/json"
          },
          data: JSON.stringify(data)
        };
        const response = await axios(request)
        if (response.data == "ADMIN") {
          this.dataes = response.data
          window.location = "http://localhost:8081/manger"
        }
       else if (response.data == "USER") {
          this.showes = false
          this.dataes = response.data
          console.log(response.status)
               this.$router.push({ name: 'home' })
        }
        else if(response.data == "employee") {
          this.dataes = response.data

               this.$router.push({ name: 'HomeEmployee' })
        }
          else if(response.data == "Resource") {
          this.dataes = response.data

               this.$router.push({ name: 'Home_source' })
        } 
        else if(response.data == "Delivery") {
          this.dataes = response.data

               this.$router.push({ name: 'HomeDelivery' })
        }
          else{
          this.dataes = response.data[0]  
          this.showes = true
          console.log(response.data)
          }
            

        
        return response;

      }
      catch (err) {
        console.log(err);
      }
    }
  },

}
</script>

<style scoped>
@import '../css/Sign_in.css';
</style>
