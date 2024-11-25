<template>
    <div class="login-container">
      <div class="login-box">
        <div class="logo">
          <h2><img src="@/assets/image/log.png" alt="Medical Logo">HMS Hospital</h2>
        </div>
        <div class="welcome">Welcome to HMS Hospital</div>
        <form @submit.prevent="handleLogin" class="form">
          <div class="input-group">
            <input type="text" v-model="contact" placeholder="01XXXXXXXXX" required>
          </div>
          <div class="input-group">
            <input type="password" v-model="password" placeholder="Password" required>
          </div>
          <div class="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
          <div class="input-group">
            <button type="button" @click="login" class="login-btn">Login</button>
          </div>
        </form>
        <div class="signup-link">
          <p>Don't have an account? <router-link to="/registration">Sign up here</router-link></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import DataService from "../services/DataService";
  import router from '@/router';
  export default {
    name: "Login",
    data() {
      return {
        FormData: {
          contact: '',
          password: ''
        },
        
      };
    },
    methods: {
      login(){
        var data={
          contact:this. FormData.contact,
          password: this. FormData.password
        };
      
      // handleLogin() {
      //   // Handle login logic here (e.g., API call)
      //   alert('Logged in!');
      //   this.$router.push('/appointment');
      // }

      DataService.login(data)
        .then(response => {
          console.log(response.data.data.token)
          if(response.data.data.token)
            sessionStorage.setItem('uid', response.data.data.token);
          else
            alert(response.data.error)
            
            router.push({ name: 'Appointment' });
            window.location.href='/appointment';
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
  </script>
  
  <style scoped>
  @import "@/assets/css/style.css";
  </style>
  