<script setup>
import { useTodoStore } from '@/stores/todoStore'
import { ref } from 'vue'
const store = useTodoStore()
const todoText = ref('')
const handleSubmit = () => {
  if (todoText.value.trim()) {
    store.addTodo(todoText.value)
  } else {
    alert('Enter todo text')
  }
  todoText.value = ''
}
</script>
<template>
  <div class="form-wrapper bg-body-secondary px-4 py-3 rounded-2 mb-4">
    <form class="row" @submit.prevent="handleSubmit()">
      <div class="col-md-9 col-sm-12">
        <div class="form-floating">
          <input type="text" class="form-control" placeholder="Enter Todo" v-model="todoText" />
          <label for="floatingInput">Enter Todo</label>
        </div>
      </div>
      <div class="col-md-3 col-sm-12">
        <button type="submit" class="btn btn-primary mt-2">Add Todo</button>
      </div>
    </form>
  </div>
</template>
<style scoped>
.form-wrapper .form-floating .form-control {
  min-height: 38px;
  height: auto;
}
</style>
