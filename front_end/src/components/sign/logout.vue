<template>
  
</template>

<script>
import axios from "axios";

export default {
     async created(){



let request = {
    url: "http://localhost:3000/logout", // should be replaced after going to production with domain URL
    withCredentials: true,
    method: "get",
    headers: {
      "Content-type": "application/json"
    }
      };

  const response = await axios(request);
  console.log(response.status);
  console.log(response.data);


  if(response.status == 203){
               this.$router.push({ name: 'signin' })
      }
  return response;



  }

}
</script>

<style>

</style>