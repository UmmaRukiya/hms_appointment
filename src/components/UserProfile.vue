<template>
  <div class="profile-container">
    <div class="profile-box">
      <h1>
        <img src="@/assets/image/log.png" alt="HMS Hospital" class="profile-logo">HMS Hospital
      </h1>
      <div class="profile-info">
        <h2>User Profile</h2>
        <form @submit.prevent="updateProfile" class="profile-form">
          <label for="name">Full Name</label>
          <input type="text" v-model="user.name" placeholder="Enter your full name" required />

          <label for="contact">Phone Number</label>
          <input type="tel" v-model="user.contact" placeholder="Enter your phone number" required />

          <label for="birth_date">Date of Birth</label>
          <input type="date" v-model="user.birth_date" required />

          <label for="email">Email Address</label>
          <input type="email" v-model="user.email" placeholder="Enter your email address" required />

          <button type="submit" class="submit-btn">Update Profile</button>
        </form>
      </div>
      <div class="appointment-link">
        <router-link to="/appointments">Book Appointment</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import DataService from "../services/DataService";
// import router from '@/router';

export default {
  name: "Profile",
  data() {
    return {
      user: {
        name: '',
        contact: '',
        birth_date: '',
        email: '',
      },
    };
  },
  mounted() {
    this.fetchUserProfile();
  },
  methods: {
    fetchUserProfile() {
      // Assuming the backend returns user profile data
      const userId = sessionStorage.getItem('uid'); // Or retrieve from a token, etc.
      DataService.getUserProfile(userId)
        .then(response => {
          this.user = response.data;
        })
        .catch(e => {
          console.error(e);
          alert('An error occurred while fetching user details.');
        });
    },
    updateProfile() {
      const userId = sessionStorage.getItem('uid'); // Get the logged-in user's ID

      // Send updated profile data to the backend
      DataService.updateUserProfile(userId, this.user)
        .then(response => {
          if (response.data.success) {
            alert('Profile updated successfully');
          } else {
            alert('Failed to update profile');
          }
        })
        .catch(e => {
          console.error(e);
          alert('An error occurred while updating profile.');
        });
    }
  }
}
</script>

<style scoped>
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('../assets/image/copy-space-medical-desk.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
}

.profile-box {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 40px 30px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 400px;
}

.profile-form label {
  display: block;
  margin: 8px 0 4px;
  color: rgb(1, 1, 63);
  font-size: 14px;
}

.profile-form input {
  width: 100%;
  padding: 5px;
  margin: 5px 0 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
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

.appointment-link {
  margin-top: 20px;
  text-align: center;
}

.appointment-link a {
  color: #00c6ff;
  text-decoration: none;
  font-size: 14px;
}

.appointment-link a:hover {
  color: #0072ff;
}
</style>
