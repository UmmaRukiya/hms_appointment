<template>
  <div class="profile-container">
    <!-- Navbar -->
    <div class="navbar-app">
      <nav>
        <div class="navbar-left">
          <ul>
          <li><a href="#"><i class="fas fa-user-md"></i> Doctor List</a></li>
          <li><a href="#"><i class="fas fa-bell"></i> Reminders</a></li>
        </ul>
        </div>
        <div class="navbar-right">
          <ul>
            <li >
              <a href="#"><i class="fas fa-user-circle"></i> {{ userName && userName.name ? userName.name : 'Guest' }}</a>
            </li>
            <li><a href="#" @click="logout"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
          </ul>
        </div>
      </nav>
    </div>

    <!-- Profile Section -->
    <div class="profile-section">
      <div class="form-container">
        <h2>{{userName.name}} Profile</h2>
        
        <!-- Profile Form -->
        <form class="profile-form">
          <div class="row">
            <div class="col-md-6">
              <label for="patientName">Full Name</label>
              <input type="text" id="patientName" v-model="userName.name"  placeholder="Enter your full name" class="form-control" disabled>
            </div>
            <div class="col-md-6">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" v-model="userName.contact"  placeholder="Enter your phone number" class="form-control" disabled>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <label for="dob">Date of Birth</label>
              <input type="date" id="dob" v-model="userName.birth_date" class="form-control" disabled>
            </div>
            <div class="col-md-6">
              <label for="email">Email Address</label>
              <input type="email" id="email" v-model="userName.email"  placeholder="Enter your email address" class="form-control" disabled>
            </div>
          </div>
          
          <div class="row">
            <div class="col-md-6">
              <label for="password">Password</label>
              <input type="password" id="password" v-model="userName.password"  placeholder="Enter your password" class="form-control" disabled>
            </div>
            <div class="col-md-6">
              <label for="confirmPassword">Re-type Password</label>
              <input type="password" id="confirmPassword" v-model="confirmPassword"  placeholder="Confirm your password" class="form-control" disabled>
            </div>
          </div>

          <button @click="enableEditing" type="button" class="submit-btn">Edit Profile</button>
        </form>
      </div>
      <div v-if="isEditing" class="form-container">
        <h2>User Profile</h2>
        
        <!-- Profile Form -->
        <form @submit.prevent="updateProfile" class="profile-form">
          <div class="row">
            <div class="col-md-6">
              <label for="patientName">Full Name</label>
              <input type="text" id="patientName" v-model="userName.name"  placeholder="Enter your full name" class="form-control">
            </div>
            <div class="col-md-6">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" v-model="userName.contact"  placeholder="Enter your phone number" class="form-control">
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <label for="dob">Date of Birth</label>
              <input type="date" id="dob" v-model="userName.birth_date"  class="form-control">
            </div>
            <div class="col-md-6">
              <label for="email">Email Address</label>
              <input type="email" id="email" v-model="userName.email"  placeholder="Enter your email address" class="form-control">
            </div>
          </div>
          
          <div class="row">
            <div class="col-md-6">
              <label for="password">Password</label>
              <input type="password" id="password" v-model="userName.password"  placeholder="Enter your password" class="form-control">
            </div>
            <div class="col-md-6">
              <label for="confirmPassword">Re-type Password</label>
              <input type="password" id="confirmPassword" v-model="confirmPassword"  placeholder="Confirm your password" class="form-control">
            </div>
          </div>

          <button type="submit" class="submit-btn">Update Profile</button>
          <button @click="cancelEditing " type="button" class="submit-btn">Cancel Update </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import DataService from '@/services/DataService'; // Assuming a DataService is used for API calls

export default {
  name: "UserProfile",
  data() {
    const userData = JSON.parse(sessionStorage.getItem('udata'));
    console.log('User Data:', userData);  // Check if userData is null or has the expected data
    return {
      userName: userData || { name: 'Guest' },  // Use a default if not found
      isEditing : false,
      patientName: '',
      phone: '',
      dob: '',
      email: '',
      password: '',
      confirmPassword: '',
      userLoggedIn: false,
     
      
    };
  },
  mounted() {
    this.fetchUserProfile();
  },
  methods: {

      enableEditing() {
          this.isEditing = true;
      },
      cancelEditing() {
          this.isEditing = false;
      },
    async fetchUserProfile() {
      // Assuming an API call to get user profile
      try {
        const response = await DataService.getUserProfile();
        if (response.data) {
          const userData = response.data;
          this.patientName = userData.patientName;
          this.phone = userData.phone;
          this.dob = userData.dob;
          this.email = userData.email;
          this.password = userData.password;
          this.confirmPassword = userData.password;
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    },
    async updateProfile() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      const updatedData = {
        patientName: this.patientName,
        phone: this.phone,
        dob: this.dob,
        email: this.email,
        password: this.password,
      };

      try {
        const response = await DataService.updateUserProfile(updatedData);
        if (response.data.success) {
          alert("Profile updated successfully!");
        } else {
          alert("Failed to update profile.");
        }
      } catch (error) {
        console.error("Error updating profile:", error);
      }
    },
    logout() {
      // Handle logout
      this.$router.push('/login'); // Redirect to login first
      sessionStorage.removeItem('udata'); // Clear session storage
    },
  },
};
</script>

<style scoped>
/* General Styles */
.profile-container {
  font-family: 'Poppins', sans-serif;
  padding: 30px;
  min-height: 100vh;
  background-color: #f4f7f6;
}

/* Navbar */
.navbar-app {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(174 202 238 / 60%);
  padding: 15px 30px;
  top: 0;
  width: 100%;
  z-index: 100;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.navbar-app .logo {
  display: flex;
  align-items: center;
  color: white;
  font-weight: 600;
  font-size: 24px;
}

.navbar-app .logo .logo-img {
  width: 30px;
  margin-right: 10px;
}

/* Navbar Navigation */
.navbar-app nav {
  width: 100%;
  display: flex;
  justify-content: space-between; /* Distribute space between left and right sections */
}

.navbar-left,
.navbar-right {
  display: flex;
}

.navbar-left ul,
.navbar-right ul {
  display: flex;
  list-style: none;
  gap: 20px;
  padding: 0;
  margin: 0;
}

.navbar-left ul li,
.navbar-right ul li {
  color: rgb(37, 37, 37);
  font-size: 18px;
}

.navbar-left ul li a,
.navbar-right ul li a {
  color: rgb(2, 1, 94);
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
}

.navbar-left ul li a:hover,
.navbar-right ul li a:hover {
  color: #00c6ff; /* Change color on hover */
}

/* Push the right section to the right */
.navbar-right {
  margin-left: auto;
}

/* Push the left section to the left */
.navbar-left {
  margin-right: auto;
}


/* Profile Form */
.form-container {
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #021d6e;
  font-size: 28px;
  margin-bottom: 20px;
}

label {
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
  display: block;
}

input, select, textarea {
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 16px;
}

input:focus, select:focus, textarea:focus {
  border-color: #00c6ff;
  box-shadow: 0 0 5px rgba(0, 198, 255, 0.5);
}

.submit-btn {
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

.submit-btn:hover {
  background-color: #0072ff;
}
</style>
