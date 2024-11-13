<script setup lang="ts">
import { RouterView } from "vue-router";
import  NavBar from "./components/NavBar.vue"
</script>

<template>
  <NavBar />
  <div id="router_output" class="w-full">
    <RouterView/>
  </div>
</template>

<style scoped>
#router_output{
  height: calc(100% - 5rem);
}
</style>
