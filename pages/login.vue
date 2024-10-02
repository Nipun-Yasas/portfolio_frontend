<template>
    <div>
      <h1>Admin Login</h1>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="username">Username</label>
          <input type="text" v-model="username" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
  
        <!-- Display error message if login fails -->
        <p v-if="error" style="color: red;">{{ error }}</p>
  
        <!-- Provide options to try again or go back to the homepage -->
        <div v-if="error">
          <button @click="tryAgain">Try Again</button>
          <a href="/">Go Back to Home</a>
        </div>
      </form>
    </div>
    
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  // State for username, password, and error message
  const username = ref('')
  const password = ref('')
  const error = ref('')
  
  // Correct credentials for login
  const correctUsername = 'nipun'
  const correctPassword = '1234'
  
  const router = useRouter()
  
  // Handle login submission
  const handleLogin = () => {
    if (username.value === correctUsername && password.value === correctPassword) {
      localStorage.setItem('isAuthenticated', 'true')
      router.push('/admin')
    } else {
      error.value = 'Invalid username or password. Please try again.'
    }
  }
  
  // Clear error message when trying again
  const tryAgain = () => {
    error.value = ''
    username.value = ''
    password.value = ''
  }
  </script>
  