<template>
  <Nav/>
  <pdf src="../assets/cv.pdf"></pdf>
</template>

<script>
import Nav from "../components/Nav.vue"
import pdf from "vue-pdf"
export default {
    components:{
Nav ,pdf  }

}
</script>

<style>

</style>