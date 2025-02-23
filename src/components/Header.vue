<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">Todo App</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link active">About</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.navbar-expand-lg .navbar-collapse {
  justify-content: flex-end;
}
.navbar-brand {
  color: #fff;
  font-size: 1.2rem;
}
.navbar-expand-lg .nav-link {
  padding: 4px 16px;
  color: #fff;
  font-size: 1rem;
  border-radius: 4px;
}
.navbar-expand-lg .nav-link:hover {
  background-color: #fff;
  color: #0d6efd;
}
.navbar-toggler {
  background-color: #fff;
}
</style>
