<script setup>
import { useTodoStore } from '@/stores/todoStore'
import TodoItem from './TodoItem.vue'
import SortTodos from './SortTodos.vue'
const store = useTodoStore()
</script>
<template>
  <div class="todolist-wrapper" v-if="store.filterTodos.length > 0">
    <div class="d-flex">
      <div>
        <h6>Todo List</h6>
      </div>
      <div>
        <SortTodos />
      </div>
    </div>
    <hr class="mt-1" />
    <div class="">
      <TodoItem v-for="(todo, index) in store.filterTodos" :key="index" :todo="todo" />
    </div>
  </div>
</template>
<style scoped>
.todolist-wrapper .d-flex {
  justify-content: space-between;
}
</style>
