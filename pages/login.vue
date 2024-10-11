<template>
    <section >
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid"
            alt="Sample image">
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form  @submit.prevent="handleLogin">
            

            <!-- Email input -->
            <div class="form-outline mb-4">
              <input type="text" v-model="username" required class="form-control form-control-lg"
                placeholder="Enter the user name" />
              <label class="form-label" for="username"></label>
            </div>

          
            <div class="form-outline mb-3">
              <input type="password"  v-model="password" required class="form-control form-control-lg"
                placeholder="Enter password" />
              <label class="form-label" for="password"></label>
            </div>

            <div class="text-center">
              <p v-if="error" class="text-danger">{{ error }}</p>
            </div>

            <div v-if="error">
            <button  class="btn btn-secondary"  @click="tryAgain">Try Again</button>
            <a href="/" class="back">Go Back to Home</a>
            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
              <button type="submit" class="btn btn-primary">Login</button>
              
            </div>

          </form>
        </div>
      </div>
    </div>
    
  </section>
    
</template>

<style>
  section{
    height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
  }
  .back{
    float: right;
  }
</style>
  
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
  