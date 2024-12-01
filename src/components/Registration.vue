<template>
  <div class="regi-container">
    <div class="regi-box">
      <h1>
        <img src="@/assets/image/log.png" alt="HMS Hospital" class="regi-logo">HMS Hospital
      </h1>
      <div class="new">Create New Account</div>
      <form @submit.prevent="registration" class="registration">
        <!-- Patient Information Section -->
        <label for="name">Full Name</label>
        <input type="text" v-model="FormData.name" placeholder="Enter your full name" required />

        <label for="contact">Phone Number</label>
        <input type="tel" v-model="FormData.contact" placeholder="Enter your phone number" required />

        <label for="birth_date">Date of Birth</label>
        <input type="date" v-model="FormData.birth_date" required />

        <label for="email">Email Address</label>
        <input type="email" v-model="FormData.email" placeholder="Enter your email address" required />

        <label for="password">Password</label>
        <input type="password" v-model="FormData.password" placeholder="Enter your password" required />

        <label for="c_password">Re-type Password</label>
        <input type="password" v-model="FormData.c_password" placeholder="Enter your password" required />

        <!-- Submit Button -->
        <button type="submit" class="submit-btn">Create Account</button>

        <div class="login-link">
          <p>Already have an account? <router-link to="/login">Log in</router-link></p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import DataService from "../services/DataService";
import router from '@/router';

export default {
  name: "registration",
  data() {
    return {
      FormData: {
        name: '',
        contact: '',
        birth_date: '',
        email: '',
        password: '',
        c_password: ''
      },
    };
  },
  methods: {
    registration() {
      // Ensure password and confirm password match
      if (this.FormData.password !== this.FormData.c_password) {
        alert("Passwords do not match!");
        return;
      }

      // Prepare the data for the API call
      const data = {
        name: this.FormData.name,
        contact: this.FormData.contact,
        birth_date: this.FormData.birth_date,
        email: this.FormData.email,
        password: this.FormData.password
      };

      // Send registration data to the backend
      DataService.registration(data)
        .then(response => {
          if (response.data.data) {
            // sessionStorage.setItem('uid', response.data.data.token);
            router.push({ name: 'login' });
            alert('register success')
            //window.location.reload();
          } else {
            alert(response.data.error);
            console.log(response.data.error)
          }
        })
        .catch(e => {
          console.error(e);
          alert('An error occurred during registration.');
        });
    }
  }
}
</script>

<style scoped>
.regi-container {
    /* width: 30%;
    margin: 0 auto;
    
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
    /* margin-top: 100px; */


    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.regi-box{
    margin-top: 100px;
    background-color: rgba(255, 255, 255, 0.9); /* Slightly more opaque background for the form */
    /* background-color: white; */
    padding: 40px 30px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    width: 400px;
    /* text-align: center; */
    position: relative;
    z-index: 1;
    /* opacity: 0.8; */
    margin-top: 50px;
}
.registration  label {
    display: block;
    margin: 8px 0 4px;
    color: rgb(1, 1, 63);
    font-size: 14px;
}
.registration input, select, textarea {
    width: 100%;
    padding: 5px;
    margin: 5px 0 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
}
.regi-logo{
    width: 30px;
    height: 30px;
  
}
  .new{
    text-align: center;
    padding-bottom: 10px;
    font-size: 12px;
}
h1 {
    text-align: center;
    color: #50bbf8f1;
}
.submit-btn {
    background-color: #50bbf8f1;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    font-size: 14px;
}
.submit-btn:hover {
    background-color: #50bbf8f1;
}
body::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-image: url('../assets/image/medicine-background.jpg'); */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.7; /* Lower the opacity here */
    z-index: -1; /* Make sure the background is behind the content */
}

.login-link {
    margin-top: 15px;
    font-size: 14px;
    color: #021d6e;
}

.login-link a {
    color: #00c6ff;
    text-decoration: none;
    transition: color 0.3s;
}

.login-link a:hover {
    color: #0072ff; 
}
.regi-container {
    font-family: 'Poppins', sans-serif;
    /* background: linear-gradient(135deg, #00c6ff, #0072ff);  */
    background-image: url('../assets/image/copy-space-medical-desk.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: white;
}
</style>
