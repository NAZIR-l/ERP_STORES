<template>
    <header>
        <Header :ProductHeader="false" :Sign_inHeader="true" />
        <Nav v-if="show" />
    </header>
    <nav>
        <div class="home_contants">
            <div class="container">
                <div class="row">
                    <div class="col" v-for="item in items" :key="item._id">
                        <div class="card">
                            <div class="imagbox">
                                <!-- <img src="../images/ERP3.jpg" class="card-img-top" alt=""> -->
                                <img :src="item.imagePath" class="card-img-top" :alt="item.imagePath">
                            </div>
                            <div class="content">
                                <div class="details">
                                    <h2>{{ item.productName }} </h2>
                                    <ul class="scic">
                                        <li><img src="" alt=""> <i class="bi bi-facebook"
                                                style="font-size: 2rem; color: white;"></i></li>
                                        <li @click="ADDTOCART(item._id)">
                                            <img src="" alt=""><i class="bi bi-cart"
                                                style="font-size: 2rem; color: white;"></i>
                                        </li>
                                        <li><img src="" alt=""><i class="bi bi-heart"
                                                style="font-size: 2rem; color: white;"></i></li>
                                    </ul>
                                    <span><a href="" style="text-decoration:none;">$ {{ item.price }} </a> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import Header from '../layout/header.vue'
import Nav from '../layout/nav.vue'
import axios from "axios";


export default {
    data() {
        return {
            items: [],
            show: false
        }
    },
    components: {
        Header,
        Nav
    },

    created() {
        this.getEmployee();
    },

    methods: {
        // Get All Products
        async getEmployee() {
            try {
                let request = {
                    url: "http://localhost:3000/Products/adds", // should be replaced after going to production with domain URL
                    withCredentials: true,
                    method: "get",
                    headers: {
                        "Content-type": "application/json"
                    }
                };
                const response = await axios(request);
                console.log(response.status)
                console.log(response.data)
                if (response.status == 203) {
                    this.$router.push({ name: 'signin' })
                }
                else {
                    this.items = response.data;
                    this.show = true;
                }
                return response;

            } catch (err) {
                console.log(err);
            }
        },
        async ADDTOCART(id) {
            try {
                let request = {
                    url: `http://localhost:3000/Products/add/${id}`, // should be replaced after going to production with domain URL
                    withCredentials: true,
                    method: "get",
                    headers: {
                        "Content-type": "application/json"
                    }
                };
                const response = await axios(request);
                this.getEmployee();
                console.log(response.data)
                console.log(response.status)
                if (response.status == 203) {
                    this.$router.push({ name: 'signin' })
                }
                else{
                    this.$router.push({ name: 'Product' })

                }
                //   this.items = response.data;
                getEmployee()
                return response;


            } catch (error) {
                console.log(error);
            }
        }

    }
}
</script>

<style scoped>
@import '../css/product.css';
/* @import '../css/ign.css'; */

.scic {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 50px;

}

.scic li {
    list-style: none;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(152, 185, 225);
    border-radius: 50%;
    margin: 0 7px;
    transition: 0.5s ease;
    cursor: pointer;
    transform: scale(0.8);

}

.scic li:hover {
    background: rgb(152, 185, 225);
    transform: rotateX(360deg)
}

.scic li img {
    transform: scale(0.5);
    filter: invert(1);
}

.scic li i {

    border-radius: 50%;
    transition: 0.3s ease;
    transform: translateX(-25%)
}
</style>