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
        password: this.FormData.password,
        c_password: this.FormData.c_password,
      };

      // Send registration data to the backend
      DataService.registration(data)
        .then(response => {
          if (response.data.data.token) {
            sessionStorage.setItem('uid', response.data.data.token);
            router.push({ name: 'login' });
          } else {
            alert(response.data.error);
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
@import "@/assets/css/style.css";
</style>
