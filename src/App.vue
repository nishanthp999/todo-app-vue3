<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
</script>

<template>
  <header>
    <Header />
  </header>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped></style>
