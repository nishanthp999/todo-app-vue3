<script setup>
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'
</script>

<template>
  <div class="mt-4 wrapper">
    <!-- <h2 class="text-center mb-4">TODO LIST</h2> -->
    <TodoForm />
    <TodoList />
  </div>
</template>
<style scoped>
.wrapper {
  max-width: 600px;
  margin: auto;
}
</style>
