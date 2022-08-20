<template>

    <div class="sidebar" id="sidebar">

        <ul class="nav_list">

         
            <li v-if="Search">
                <i class='bi bi-search' id="search"></i>
                <input type="text" placeholder="Search...">
                <span class="tooltip">Search</span>
            </li>

            <li v-if="AllOrderDelived">
                <a href="AllOrderDelived">
                    <i class="bi bi-person-plus"></i>
                    <span class="links_name">AllOrderDelived</span>
                </a>
                <span class="tooltip">Dashboard</span>
            </li>
            <li v-if="AddEmployee">
                <a href="addEmployee">
                    <i class="bi bi-person-plus"></i>
                    <span class="links_name">Dashboard</span>
                </a>
                <span class="tooltip">Dashboard</span>
            </li>
            <li v-if="ListEmployees">
                <a href="ListEmployee">
                    <i class="bi bi-person-lines-fill"></i>
                    <span class="links_name">Profile</span>
                </a>
                <span class="tooltip">Profile</span>
            </li>
            <li v-if="listUser">
                <a href="/ListUser">
                    <i class="bi bi-list-columns"></i>
                    <span class="links_name">Messages</span>
                </a>
                <span class="tooltip">Messages</span>
            </li>
            <li v-if="listProduct">
                <a href="ListProduct">
                    <i class="bi bi-bookmark-plus"></i>
                    <span class="links_name">Analytics</span>
                </a>
                <span class="tooltip">Analytics</span>
            </li>
            <li v-if="addProduct">
                <a href="/addproduct">
                    <i class="bi bi-bag-plus-fill"></i>
                    <span class="links_name">Saved</span>
                </a>
                <span class="tooltip">Saved</span>
            </li>
            <li v-if="Allorders">
                <router-link :to="{ name: 'ALLOrders' }">
                    <i class="bi bi-cart3"></i>
                    <span class="links_name">File Manager</span>
                </router-link>
                <span class="tooltip">Files</span>
            </li>
            <li v-if="UpdateState">
                <router-link :to="{ name: 'UpdateState' }">
                    <i class="bi bi-cart3"></i>
                    <span class="links_name">File Manager</span>
                </router-link>
                <span class="tooltip">Files</span>
            </li>
            <li v-if="AllOrder">
                <a href="ALLOrder">
                    <i class='bi bi-cart'></i>
                    <span class="links_name">Order</span>
                </a>
                <span class="tooltip">Order</span>
            </li>
            <li v-if="signupSource">
                <a href="SignUp_Source">
                    <i class="bi bi-person-plus-fill"></i>
                    <span class="links_name">Order</span>
                </a>
                <span class="tooltip">Order</span>
            </li>
            <li v-if="showAllSource">
                <a href="Show_All_Source">
                    <i class="bi bi-person-lines-fill"></i>
                    <span class="links_name">Order</span>
                </a>
                <span class="tooltip">Order</span>
            </li>


            <!-- ////////////// -->
            <li v-if="ADDCarousel">
                <a href="ADDCarousel">
                    <i class="bi bi-image"></i>
                    <span class="links_name">Order</span>
                </a>
                <span class="tooltip">Order</span>
            </li>
            <li v-if="ShowCarousel">
                <a href="ShowCarousel">
                    <i class="bi bi-card-list"></i>
                    <span class="links_name">Order</span>
                </a>
                <span class="tooltip">Order</span>
            </li>
            <li v-if="AddOrder">
                <a href="AddOrder">
                    <i class='bi bi-cart'></i>
                    <span class="links_name">Order</span>
                </a>
                <span class="tooltip">Order</span>
            </li>

            <!-- //////////////////// -->


            <!-- ////////////// -->
            <li v-if="AddDelivery">
                <a href="AddDelivery">
                    <i class="bi bi-truck"></i>
                    <span class="links_name">Order</span>
                </a>
                <span class="tooltip">Order</span>
            </li>
            <li v-if="ShowDelivery">
                <a href="ShowDelivery">
                    <i class="bi bi-card-list"></i>
                    <span class="links_name">ShowDelivery</span>
                </a>
                <span class="tooltip">Order</span>
            </li>
            <!-- ////////////// -->

            <li>
                <a href="/logout"><i class='bi bi-box-arrow-left' id="log_out"></i>
                    <span class="links_name">LogOut</span>

                </a>
                <span class="tooltip">LogOut</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ['AllOrderDelived', 'AddEmployee', 'ListEmployees', 'Search', 'listUser', 'listProduct', 'addProduct', 'Allorders', 'AllOrder', 'signupSource', 'showAllSource', 'ADDCarousel', 'ShowCarousel', 'AddOrder', 'UpdateState', 'ShowDelivery', 'AddDelivery']
    , methods: {
        span() {
            let btn = document.querySelector(".logoHMOE");
            sidebar.classList.toggle("active");
        }
    }

}
</script>

<style scoped>
@import '../css/NavM.css';
</style>