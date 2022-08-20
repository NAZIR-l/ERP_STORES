<template>
    <header class="headers">
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid" id="containerid">
              <a href="/">
              <img src="https://cloudsoft5.com/wp-content/uploads/2018/11/ERP-logo-small.png" alt="">

              </a>
                <button class="navbar-toggler" style="    border: 3px solid #8eaadc;" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="active"><a href="/">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="/Product" v-if="ProductHeader">ALL_Product</a></li>
                        <li><a href="">Search</a></li>
                        


                    </ul>
                </div>
                <a id="sign" v-if="Sign_inHeader"  href="/signin">Sign_in</a>
                <a id="sign" v-if="SignUp"  href="/sign_Up">Sign_UP</a>

            </div>
        </nav>
        
    </header>
    
</template>
<script>
import {ref} from 'vue'
export default {
    props:['ProductHeader','Sign_inHeader', 'SignUp'],
    data(){
        return{
        }
    },
    methods: {
      
    }

}
</script>

<style scoped>
  @import '../css/header.css';
body{
    padding: 0;
    margin: 0;
    background-color:rgb(226, 226, 226);
    text-align: center;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
@media (max-width:320px) {
 header{
box-shadow: 0 0 43px rgb(232, 8, 8);


}
}
@media (max-width:200px) {
 header{
/* width:180%; */
box-shadow: 0 0 43px rgb(68, 8, 232);

}
}
@media (max-width:160px) {
 header{
/* width:260%; */
box-shadow: 0 0 43px rgb(8, 232, 60);

}
}
</style>