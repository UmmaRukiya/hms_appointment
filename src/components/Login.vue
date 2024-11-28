<template>
    <div class="login-container">
      <div class="login-box">
        <div class="logo">
          <h2><img src="@/assets/image/log.png" alt="Medical Logo">HMS Hospital</h2>
        </div>
        <div class="welcome">welcome to</div>
            <h3 class="wel">HMS Hospital Ltd.</h3>
            <div class="welcome">Log in to make an appointment . . .</div>
        <form @submit.prevent="handleLogin" class="form">
          <div class="input-group">
            <input type="text" v-model="FormData.contact" placeholder="01XXXXXXXXX" required>
          </div>
          <div class="input-group">
            <input type="password" v-model="FormData.password" placeholder="Password" required>
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
    name: "login",
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
            
            router.push({ name: 'appointment' });
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
 /* General reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body and page layout */
.login-container {
    font-family: 'Poppins', sans-serif;
    /* background: linear-gradient(135deg, #00c6ff, #0072ff);  */
    background-image: url('../assets//image/copy-space-medical-desk.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: white;
}
/* .login-container::before {
    content: ''; 
    position: absolute; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: inherit; 
    background-size: cover; 
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.3;
    z-index: -1; 
} */


/* Login Container */
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

/* Login Box */
.login-box {
    background-color: white;
    padding: 40px 30px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    width: 400px;
    text-align: center;
    position: relative;
    z-index: 1;
    /* opacity: 0.8; */
    /* margin-top: 150px; */
}

/* Logo */
.logo img {
    width: 30px;
    height: 30px;
    /* padding-top: 5px; */
    /* margin-bottom: 20px; */
}

/* Heading */
h2 {
    font-size: 26px;
    color: #333;
    margin-bottom: 30px;
    font-weight: 600;
}

/* Form elements */
.input-group {
    margin-bottom: 20px;
    position: relative;
}

.input-group input {
    width: 100%;
    padding: 14px 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    outline: none;
    transition: 0.3s ease;
}

.input-group input:focus {
    border-color: #00c6ff;
    box-shadow: 0 0 5px rgba(0, 198, 255, 0.5);
}

/* Forgot password link */
.forgot-password {
    text-align: right;
    margin-bottom: 15px;
}

.forgot-password a {
    font-size: 14px;
    color: #00c6ff;
    text-decoration: none;
    transition: color 0.3s;
}

.forgot-password a:hover {
    color: #0072ff;
}

/* Login Button */
.login-btn {
    width: 100%;
    padding: 14px;
    background-color: #00c6ff;
    color: white;
    font-size: 18px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.login-btn:hover {
    background-color: #0072ff;
}
.login-btn a {
    color: white;
    text-decoration: none;
    

}
.welcome{
    color: #021d6e;
    text-align: left;
    font-size: 14px;
}
.wel{
    color: #021d6e;
    text-align: left;
    font-weight: 600;
}
.form{
    padding-top: 20px;
}

/* Sign Up link */
.signup-link {
    margin-top: 15px;
    font-size: 14px;
    color: #021d6e;
}

.signup-link a {
    color: #00c6ff;
    text-decoration: none;
    transition: color 0.3s;
}

.signup-link a:hover {
    color: #0072ff;
}

/* Hover effects for input fields */
.input-group input:focus,
.login-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

/* Smooth page transition */
body, .login-container {
    animation: fadeIn 1s ease-in-out;
}

/* Keyframe animation for fade-in effect */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}



  </style>
  