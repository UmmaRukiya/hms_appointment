<template>
    <div class="regi-container">
        <div class="regi-box">
        <h1><img src="@/assets/log.png" alt="" class="regi-logo">HMS Hospital</h1>
            <div class="new">Create New Account</div>
                <form @submit.prevent="handleSubmit" class="registration">
                    <!-- Patient Information Section -->
                    <label for="patientName">Full Name</label>
                    <input type="text" id="patientName" v-model="form.patientName" required placeholder="Enter your full name">

                    <label for="phone">Phone Number</label>
                    <input type="tel" id="phone" v-model="form.phone" required placeholder="Enter your phone number">
                    
                    <label for="dob">Date of Birth</label>
                    <input type="date" id="dob" v-model="form.dob" required>
                    
                    <label for="email">Email Address</label>
                    <input type="email" id="email" v-model="form.email" required placeholder="Enter your email address">
                    
                    <label for="password">Password</label>
                    <input type="password" id="password" v-model="form.password" required placeholder="Enter your password">
                    
                    <label for="passwordConfirm">Re-type Password</label>
                    <input type="password" id="passwordConfirm" v-model="form.passwordConfirm" required placeholder="Enter your password">
                    
                    <!-- Submit Button -->
                    <button type="submit" class="submit-btn">Create Account</button>
                    
                    <div class="login-link">
                    <p>Already have an account? <a href="/login">Log in</a></p>
                    </div>
                </form>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        patientName: '',
        phone: '',
        dob: '',
        email: '',
        password: '',
        passwordConfirm: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission (e.g., validate and send to server)
      if (this.form.password !== this.form.passwordConfirm) {
        alert("Passwords do not match!");
        return;
      }
      console.log("Form submitted", this.form);
    }
  }
};
</script>