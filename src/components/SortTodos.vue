<script setup>
import { useTodoStore } from '@/stores/todoStore'
const store = useTodoStore()
</script>
<template>
  <div class="d-flex">
    <span class="p-2">Sort By:</span>
    <select v-model="store.sortTodos" class="form-select w-auto">
      <option value="">Select</option>
      <option value="date">By Date</option>
      <option value="alphabet">By Alphabet</option>
    </select>
  </div>
</template>
