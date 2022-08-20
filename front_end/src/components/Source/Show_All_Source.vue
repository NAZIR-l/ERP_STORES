<template>
    <div class="imgBx">
        <img src="https://th.bing.com/th/id/OIP.aD28yBY-7Xs9sp_NmJFp_wHaHZ?pid=ImgDet&w=981&h=980&rs=1" alt="">
    </div>
    <nav>
        <div class="home_contants">
            <div class="container">
                <div class="row">

                    <div class="col" v-for="item in items" :key="item._id">
                        <div class="card">
                            <div class="imgBx"    @click="deleteSource(item._id)">
                                <img class="imgBxs" src="https://cdn2.iconfinder.com/data/icons/flaticons-solid/16/x-3-1024.png" alt="">
                            </div>
                            <div class="content">
                                <div class="details">
                                    <h3> Name : {{ item.Name }} </h3>
                                    <h3> Email : {{ item.Email }}</h3>
                                    <h3>Address : {{ item.Address }}</h3>
                                    <h3> Phone Number : {{ item.Phone }}</h3>
                                    <span style="background: black;"><a href="" style="text-decoration:none;  color: aliceblue;">STORE NAME : {{ item.Institution }}
                                        </a> </span>

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
import axios from "axios";

export default {
    name: "Show_All_Source",
    data() {
        return {
            items: []
        }
    },

    created() {
        this.getSource();
    },

    methods: {
        // Get All Products
        async getSource() {
            try {
                const response = await axios.get("http://localhost:3000/Source/Show");
                this.items = response.data;
                console.log(response.status)
                console.log(response.data)

            } catch (err) {
                console.log(err);
            }
        },
        async deleteSource(id) {
            try {
                const response = await axios.delete(`http://localhost:3000/Source/Delete/${id}`);
                console.log(response.data);
                this.getSource();

            } catch (err) {
                console.log(err);
            }
        }
    }

}
</script>

<style>
.imgBxs {


    width: 40px;
    position: relative;
    top: -5px;
    background: red;
    cursor: pointer;
    z-index: 10;
}
</style>