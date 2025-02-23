import { defineStore } from 'pinia'
import { reactive, ref, computed } from 'vue'

export const useTodoStore = defineStore('todos', () => {
  const todos = reactive([])

  const sortTodos = ref('')

  const filterTodos = computed(() => {
    switch (sortTodos.value) {
      case 'alphabet':
        return todos.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
      case 'date':
        return todos.sort((a, b) => {
          return new Date(b.date) - new Date(a.date)
        })
      default:
        return todos
    }
  })

  const addTodo = (name) => {
    const todo = { completed: false, name: name, id: 1, date: new Date().toISOString() }
    if (todos.length) {
      todo.id = Math.max(...todos.map((t) => t.id)) + 1
    }
    todos.push(todo)
  }

  const toggleCompleted = (id) => {
    todos.forEach((t) => {
      if (t.id === id) {
        t.completed = !t.completed
      }
    })
  }

  const removeTodo = (id) => {
    const getIndex = todos.findIndex((t) => t.id == id)
    if (getIndex > -1) {
      todos.splice(getIndex, 1)
    } else {
      console.log(getIndex)
    }
  }

  return { todos, filterTodos, sortTodos, addTodo, toggleCompleted, removeTodo }
})
