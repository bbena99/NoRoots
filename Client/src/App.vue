<script setup lang="ts">
import  NavBar from "./components/NavBar.vue"
</script>

<template>
  <div class="w-screen h-screen bg-red-500">
    <NavBar />
    <div id="page" class="w-screen bg-purple-500">

    </div>
  </div>
</template>

<style scoped>
#page{
  height: calc(100vh - 5rem);
}
</style>
