<template>


  <div class="home">


    <Header :ProductHeader="true" :Sign_inHeader="true" />


  </div>
 
   <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>



      <button v-for="item in index" :key="item._id" type="button" data-bs-target="#carouselExampleDark"
        :data-bs-slide-to="item" aria-label="Slide 2"></button>

    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="1000">
        <img :src="items.Image" class="d-block w-100" :alt="items.Image">
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ items.Name }}</h5>
          <p>{{ items.Details }}</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="1000" v-for="item in array" :key="item._id">
        <img :src="item.Image" class="d-block w-100" :alt="item.Image">
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ item.Name }}</h5>
          <p>{{ item.Details }}</p>
        </div>
      </div>

    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <nav style="  position: relative;">
 
    <div class="home_contants">
      <div class="container">
        <div class="row">

          <div class="col" v-for="itemes in array2" :key="itemes._id">
            <div class="card">
              <div class="imagbox">
                <!-- <img src="../images/ERP3.jpg" class="card-img-top" alt=""> -->
                <img :src="itemes.imagePath" class="card-img-top" :alt="itemes.imagePath">

              </div>
              <div class="content">
                <div class="details">
                  <h2>{{ itemes.productName }} </h2>
              
                  <span><a href="" style="text-decoration:none;">$ {{ itemes.price }} </a> </span>

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
import Header from '@/components/layout/header.vue'

import axios from "axios";

export default {
  name: 'HomeView',
  components: {
    Header,
  },
  data() {
    return {
      Products: [],
      items: [],
      array: [],
      array2: [],
      index: 1,
    };
  },

  created() {
 this.ShowCarousel();
    this.GetProduct();
  },

  methods: {
    async GetProduct() {
      let request = {
        url: "http://localhost:3000/Products/addes", // should be replaced after going to production with domain URL
        withCredentials: true,
        method: "get",
        headers: {
          "Content-type": "application/json"
        }
      };
      const response = await axios(request);
      var arrays = [];
      for (var i = 0; i < response.data.length && i < 7 ; i++) {
        arrays.push(response.data[i])
      }
      console.log(arrays)
      this.array2 = arrays
      console.log(this.array2)
      return response;

    },

     async ShowCarousel() {
      let request = {
        url: "http://localhost:3000/carousel/Show", // should be replaced after going to production with domain URL
        withCredentials: true,
        method: "get",
        headers: {
          "Content-type": "application/json"
        }
      };
      const response = await axios(request);
      var array = []
      for (var i = 1; i < response.data.length; i++) {
        array.push(response.data[i])
      }
      this.items = response.data[0];
      this.array = array
      this.index = array.length
      console.log(this.items);
      console.log(array.length);

      return response;
    },



  }
}
</script>

<style>
.carousel-dark .carousel-caption {
  color: #ece5e5;
  position: absolute;
  bottom: 80px;
}

.carousel {
    position: relative;
    width: 70%;
    top: 80px;
    display: inline-block;
    height: 480px;
    justify-content: center;
    align-items: center;
}
</style>
