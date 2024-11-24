<template>
    <div class="login-container">
      <div class="login-box">
        <div class="logo">
          <h2><img src="@/assets/image/log.png" alt="Medical Logo">HMS Hospital</h2>
        </div>
        <div class="welcome">Welcome to HMS Hospital</div>
        <form @submit.prevent="handleLogin" class="form">
          <div class="input-group">
            <input type="text" v-model="username" placeholder="Username" required>
          </div>
          <div class="input-group">
            <input type="password" v-model="password" placeholder="Password" required>
          </div>
          <div class="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
          <div class="input-group">
            <button type="submit" class="login-btn">Login</button>
          </div>
        </form>
        <div class="signup-link">
          <p>Don't have an account? <router-link to="/registration">Sign up here</router-link></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      handleLogin() {
        // Handle login logic here (e.g., API call)
        alert('Logged in!');
        this.$router.push('/appointment');
      }
    }
  }
  </script>
  
  <style scoped>
  @import "@/assets/css/style.css";
  </style>
  