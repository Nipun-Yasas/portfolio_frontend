// middleware/auth.js
export default defineNuxtRouteMiddleware((to, from) => {
    // Check if the user is authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated')
  
    // If not authenticated, redirect to the login page
    if (!isAuthenticated) {
      return navigateTo('/login')
    }
  })
  