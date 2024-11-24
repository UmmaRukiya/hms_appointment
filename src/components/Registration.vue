<template>
  <div class="regi-container">
    <div class="regi-box">
      <h1>
        <img src="@/assets/image/log.png" alt="HMS Hospital" class="regi-logo">HMS Hospital
      </h1>
      <div class="new">Create New Account</div>
      <form @submit.prevent="handleRegistration" class="registration">
        <!-- Patient Information Section -->
        <label for="patientName">Full Name</label>
        <input type="text" v-model="patientName" placeholder="Enter your full name" required />

        <label for="phone">Phone Number</label>
        <input type="tel" v-model="phone" placeholder="Enter your phone number" required />

        <label for="dob">Date of Birth</label>
        <input type="date" v-model="dob" required />

        <label for="email">Email Address</label>
        <input type="email" v-model="email" placeholder="Enter your email address" required />

        <label for="password">Password</label>
        <input type="password" v-model="password" placeholder="Enter your password" required />

        <label for="confirmPassword">Re-type Password</label>
        <input type="password" v-model="confirmPassword" placeholder="Enter your password" required />

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
export default {
  data() {
    return {
      patientName: '',
      phone: '',
      dob: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    handleRegistration() {
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }

      // Registration logic here (e.g., API call)
      alert('Registration successful!');
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
@import "@/assets/css/style.css";
</style>
