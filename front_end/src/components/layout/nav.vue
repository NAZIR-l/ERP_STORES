<template>

    <div class="sidebar">
      
        <ul class="nav_list">

            <li>
                <a href="">
                    <i class='bi bi-grid' ></i>
                    <span class="links_name">Dashboard</span>
                </a>
                  <p class="tooltip">Files</p>
            </li>
            <li>
                <a href="/Profile">
                    <i class='bi bi-person'></i>
                    <span class="links_name">Profile</span>
                </a>
                   <p class="tooltip">Files</p>
            </li>

            <li>
                <a href="ALLOrder">
                    <i class='bi bi-folder'></i>
                    <span class="links_name">File Manager</span>
                </a>
                <p class="tooltip">Files</p>
            </li>
            <li>
                <a href="Order">
                    <i class='bi bi-cart'></i>
                    <span class="links_name">Order</span>
                </a>
                  <p class="tooltip">Files</p>
            </li>
        
            <li>
                <i class='bi bi-search' id="search"></i>
                <input type="text" placeholder="Search...">
                <span class="tooltip">Search</span>
            </li>
            <li>
                <a href="/logout">
                    <i class='bi bi-box-arrow-left' id="log_out"></i>
                    <span class="links_name">LogOut</span>
                </a>
                  <p class="tooltip">Files</p>
            </li>
        </ul>

    </div>

</template>

<script>





export default {
    
}
</script>

<style scoped>
@import '../css/Nav.css';
</style>