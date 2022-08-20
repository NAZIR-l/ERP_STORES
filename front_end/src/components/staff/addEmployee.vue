
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
            passwords: ""
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
        async getEmployyById() {
            let request = {
                url: "http://localhost:3000/Employee/addEmployee", // should be replaced after going to production with domain URL
                withCredentials: true,
                method: "get",
                headers: {
                    "Content-type": "application/json"
                }
            };
            const response = await axios(request);
            console.log(response.status)
            if (response.status == 203) {
                this.$router.push({ name: 'signin' })
            }
            return response;
        },

        async CreateEmployee() {
            try {
                await axios.post("http://localhost:3000/Employee/addEmployee", {
                    NAME: this.name,
                    Phone: this.phone,
                    Address: this.address,
                    Salary: this.salary,
                    Email: this.email,
                    Date: this.date,
                    passwords: this.passwords

                });
                this.email = "";
                this.name = "";
                this.salary = "";
                this.address = "";
                this.phone = "";
                this.date = "";
                this.passwords = "";
                this.$router.push({ name: 'manger' })

            }
            catch (err) {
                console.log(err.message);
            }
        },
    }
}
</script>


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
                        <input type="text" name="Email" v-model="email">
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
                    <div class="inputBx">
                        <input type="submit" name="" value="ADD" @click="CreateEmployee">
                    </div>


                </form>

            </div>
        </div>
    </section>

</template>

<style scoped>
@import '../css/Sign_in.css';

#select {
    display: flex;
    justify-content: center;
    align-items: center;
}

.inputBx select {
    padding: 2px;
    width: 20px;
    /* height: 20px; */
}

.inputBx select option p {
    /* padding: 12px; */
    font-size: 1.4em;
    font-weight: 500;

}
</style>