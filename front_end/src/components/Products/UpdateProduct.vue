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
                        <input type="submit" name="" @click="UpdateProduct" value="ADD">
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
    this.getProductById();
  },
        methods: {

    async getProductById() {
      try {  const response = await axios.get(`http://localhost:3000/Products/add/${this.$route.params.id}`);
        this.name = response.data.productName;
        this.resource = response.data.name_sources;
        this.image = response.data.imagePath;
        this.price = response.data.price;
        this.information = response.data.information;
        this.quantity = response.data.quantity;
      }
      
      catch (err) {
        console.log(err);
      }
    },
       async UpdateProduct() {
    try {
        await axios.put(`http://localhost:3000/Products/add/${this.$route.params.id}`,
          {         productName: this.name,
                    name_sources: this.resource,
                    imagePath: this.image,
                    price: this.price,
                    information: this.information,
                    quantity: this.quantity,}
        );
                this.image = "";
                this.name = "";
                this.price = null;
                this.information = "";
                this.resource = "";
                this.quantity = null;
        this.$router.push("/");
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