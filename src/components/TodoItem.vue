<script setup>
import { defineProps } from 'vue'
import { useTodoStore } from '@/stores/todoStore'
defineProps(['todo'])
const store = useTodoStore()
</script>
<template>
  <div class="card mb-2 todo-card">
    <div class="card-body d-flex">
      <input
        type="checkbox"
        class="form-check-input"
        @click="store.toggleCompleted(todo.id)"
        :checked="todo.completed"
      />
      <h4 :class="[{ 'line-through': todo.completed }, 'px-2']">{{ todo.name }}</h4>
      <span class="delete-icon" @click="store.removeTodo(todo.id)"
        ><i class="bi bi-trash"></i
      ></span>
    </div>
  </div>
</template>
<style scoped>
.card.todo-card .d-flex {
  justify-content: space-between;
  cursor: pointer;
  background-color: #f3f6fb;
}
.card.todo-card h4 {
  font-size: 1rem;
  overflow: hidden;
}
.card.todo-card h4.line-through {
  text-decoration: line-through;
}
.card.todo-card .form-check-input,
.card.todo-card .delete-icon {
  cursor: pointer;
}
.card.todo-card .delete-icon {
  color: red;
}
</style>
