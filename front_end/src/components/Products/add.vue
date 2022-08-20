<template>
    <Header :ProductHeader="true" :Sign_inHeader="false" />
    <Nav />
    <section>
        <div class="imgBx">
            <img src="../images/ERP3.jpg" alt="">
        </div>
        <div class="contentBx">
            <div class="formBx">
                <h2>Add Product</h2>
                <form action="">
                    <div class="inputBx">
                        <span>Product Name</span>
                        <input type="text" name="Name" v-model="name">
                    </div>
                    <div class="inputBx">
                        <span>Resource</span>
                        <input type="text" name="Resource" v-model="resource">
                    </div>
                    <div class="inputBx">
                        <span> Image </span>
                        <input type="text" name="image" v-model="image">
                    </div>
                    <div class="inputBx">
                        <span> Information </span>
                        <input type="text" name="information" v-model="information">
                    </div>
                    <div class="inputBx">
                        <span>Quantity</span>
                        <input type="number" name="quantity" v-model="quantity">
                    </div>
                    <div class="inputBx">
                        <span>Price</span>
                        <input type="number" name="Price" v-model="price">
                    </div>
                    <div class="inputBx" id="select">
                        <span>Type</span>
                        <select name="" id="">
                            <option value="Computer">
                                <p> Select Type</p>
                            </option>
                            <option value="Computer">Computer</option>
                            <option value="Clothes">Clothes</option>
                            <option value="Furniture">Furniture</option>
                        </select>

                    </div>
                    <div class="inputBx">
                        <input type="submit" name="" @click="CreateProduct" value="ADD">
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
            name: "",
            resource: "",
            image: "",
            price: "",
            information: "",
            quantity: "",
        }
    },
    components: {
        Header,
        Nav
    },
         created: function () {
    this.getADDHOME();
  },
    methods: {



         async   getADDHOME ( ){
 let request = {
        url: "http://localhost:3000/Products/AuthCreate", 
        withCredentials: true,
        method: "get",  
        headers: {
          "Content-type": "application/json"
        }
      };
      const response = await axios(request);
      if(response.data == "404 Not Found"){
    console.log(response.data)
       this.$router.push({ name: 'signin' })
      }
      else{
    console.log(response.data)
      }
     
      return response;
        },
        
  async CreateProduct() {
            try {
                await axios.post("http://localhost:3000/Products/add", {
                    imagePath: this.image,
                    productName: this.name,
                    price: this.price,
                    information: this.information,
                    name_sources: this.resource,
                    quantity: this.quantity,
                });
                this.image = "";
                this.name = "";
                this.price = "";
                this.information = "";
                this.resource = "";
                this.quantity = "";
                this.$router.push("/");
            } catch (err) {
                console.log(err.message);
            }
        },


    }
}
</script>

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