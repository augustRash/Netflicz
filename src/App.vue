<template>
  <navbar />
  <router-view />
</template>


<script>
import Navbar from "./components/Navbar.vue";
import searchSpec from "./components/searchSpec.vue";
export default {
  components: { Navbar,},
};
</script>