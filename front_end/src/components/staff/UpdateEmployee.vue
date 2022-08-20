<template>
    <Header :ProductHeader="true" :Sign_inHeader="false" />
    <Nav />
 <section>
        <div class="imgBx">
            <img src="../images/ERP3.jpg" alt="">
        </div>
        <div class="contentBx">
            <div class="formBx">
                <h2>Add Employee</h2>
                <form action="">

                    <div class="inputBx">
                        <span>Name</span>
                        <input type="text" name="Name" v-model="name">
                    </div>
                    <div class="inputBx">
                        <span>Email Address</span>
                        <input type="Email" name="Email" v-model="email">
                    </div>
                    <div class="inputBx">
                        <span>Birth date:</span>
                        <input type="date" name="date" v-model="date">
                    </div>
                    <div class="inputBx">
                        <span>phone_number</span>
                        <input type="number" name="phone" v-model="phone">
                    </div>
                    <div class="inputBx">
                        <span>Address</span>
                        <input type="text" name="Address" v-model="address">
                    </div>
                    <div class="inputBx">
                        <span>Salary</span>
                        <input type="number" name="Price" v-model="salary">
                    </div>
                    <div class="inputBx">
        <span>Password</span>
        <input type="password" name="password" v-model="passwords" required>
    </div>
                    <div class="inputBx"  >
                        <input type="submit" name="" value="ADD" @click="UpdateEmployee">
                    </div>
                  

                </form>

            </div>
        </div>
    </section>  
</template>

<script>
import Header from '../layout/header.vue'
import Nav from '../layout/nav.vue'

import axios from "axios";

export default {
      data() {
        return {
            email: "",
            name: "",
            salary: "",
            address: "",
            phone: "",
            date: "",
            passwords:""
        }
    },
 components: {
    Header,
        Nav
  },
       created: function () {
    this.getEmployyById();
  },
      methods: {
       
    //// for update 
     async getEmployyById() {
      try {
        const response = await axios.get(
          `http://localhost:3000/Employee/addEmployee/${this.$route.params.id}`
        );
        this.email = response.data.Email;
        this.salary = response.data.Salary;
        this.address = response.data.Address;
        this.name = response.data.NAME;
        this.phone = response.data.Phone;
        this.date = response.data.Date;
        this.passwords = response.data.passwords;

      }
      
      catch (err) {
        console.log(err);
      }
    },
     async UpdateEmployee() {
    try {
        console.log("hello")
        await axios.put(
          `http://localhost:3000/Employee/addEmployee/${this.$route.params.id}`,
          {
                    NAME: this.name,
                    Phone: this.phone,
                    Address: this.address,
                    Salary: this.salary,
                    Email: this.email,
                    Date: this.date,
                    passwords: this.passwords,

          }
        );
            this.email = "";
                this.name = "";
                this.salary = null;
                this.address = "";
                this.phone = null;
                this.date = "";
                this.passwords =""
       this.$router.push({ name: 'manger' })
        
      } 
    catch (err) {
        console.log(err);
      }
    },


    }


}
</script>

<style>

</style>