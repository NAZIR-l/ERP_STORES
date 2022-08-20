<template>



    <div>
        <div class="imgBx">
            <img  style="    padding: 10px" src="https://th.bing.com/th/id/R.3f195837c61c3ac85ac5ffe8ebeecbd0?rik=x4jBfbAwqQ%2b%2f2A&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_61803.png&ehk=%2fKdBbQgvGfbY4hzWbcVfeE3DT1dB019X%2fBXxVXrl%2bqc%3d&risl=&pid=ImgRaw&r=0" alt="">
        </div>
        <table class="table is-striped is-bordered mt-2 is-fullwidth">

            <thead>
                <tr class="Email" style="background: #e2e3e5;">
                    <th>EMAIL CUSTOMER :</th>
                    <td>{{ Emails }} </td>
                </tr>
                <tr>

                    <th>Product Name</th>
                    <th> Product Details</th>
                    <th>DATE</th>
                    <th>PRODUCT PRICE</th>
                    <th>PRODUCT Quantity</th>
                    <th class="has-text-centered">Actions</th>
                </tr>
            </thead>
            <tbody class="table table-secondary table-striped ">
                <tr>

                </tr>
                <tr v-for="item in items" :key="item._id">

                    <td>{{ item.Product[0] }}</td>
                    <td>{{ item.Product[2] }}</td>
                    <td>{{ item.createdAt }}</td>


                    <td>{{ item.Product[1] }}</td>
                    <td>{{ item.quantity }}</td>

                    <td class="has-text-centered">

                        <a class="button is-danger is-small" id="delete" @click="deleteOrder(item._id)">Delete</a>
                    </td>
                </tr>
            </tbody>
            <tr style="background: #e2e3e5;     font-size: 1.3em; position: relative; top: 30px;">
                <th>Total Price :</th>
                <td>
                    {{ Total }}
                </td>
            </tr>
            <br>
            <tr style="background: #e2e3e5;     font-size: 1.3em; position: relative; top: 30px;">
                <th>Total Product :</th>
                <td>
                    {{ TotalPRODUCT }}
                </td>
            </tr>
        </table>
    </div>
    <button class="btn btn-secondary" @click="ADDORDER"> ADD ORDER</button>

</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            items: [],
            Total: 0,
            TotalPRODUCT: 0,
            Emails: ""
        };
    },
    created() {
        this.GetOrder();
    },
    methods: {
        // Get All Products
        async GetOrder() {
            let request = {
                url: "http://localhost:3000/Order/List", // should be replaced after going to production with domain URL
                withCredentials: true,
                method: "get",
                headers: {
                    "Content-type": "application/json"
                }
            };
            const response = await axios(request);
            this.items = response.data
            //  console.log(response.data[0].quantity)
            this.Total = 0;
            this.TotalPRODUCT = 0;
            this.Emails = response.data[0].EMAILCustomer
            for (let index = 0; index < response.data.length; index++) {
                this.Total = this.Total + (response.data[index].Product[1] * response.data[index].quantity)
                this.TotalPRODUCT = this.TotalPRODUCT + response.data[index].quantity
            }

            if (response.status == 203) {
                this.$router.push({ name: 'signin' })
            }
            return response;
        },
        async deleteOrder(id) {
            try {
                await axios.delete(`http://localhost:3000/Order/List/${id}`);
                this.GetOrder();
            } catch (err) {
                console.log(err);
            }
        },
        async ADDORDER() {
            var array = [];
            for (var i = 0; i < this.items.length; i++) {
                console.log(this.items[i].Product[0])
                array.push(this.items[i].Product[0])
            }

            // console.log(this.items[0].Product)

            try {
                console.log(array)
                let data = {
                    EMAILCustomer: this.items[0].EMAILCustomer,
                    Total_price: this.Total,
                    Totalquantity: this.TotalPRODUCT,
                    Product: array,
                    State: "false",
                    Location:"in Website"
                };
                let request = {
                    url: "http://localhost:3000/Order/Manage",
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
            } catch (error) {

            }
        }



    },


}
</script>



<style>
</style>