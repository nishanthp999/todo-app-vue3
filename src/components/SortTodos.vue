<script setup>
import { useTodoStore } from '@/stores/todoStore'
const store = useTodoStore()
</script>
<template>
  <div>
    <select v-model="store.sortTodos" class="form-select w-auto">
      <option value="">SortBy</option>
      <option value="date">Date</option>
      <option value="alphabet">Alphabet</option>
    </select>
  </div>
</template>
