<template>
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
          <!-- <li><a href="/profile"><i class="fas fa-user-circle"></i> User Details</a></li>
          <li><a href="#"><i class="fas fa-sign-out-alt"></i> Logout</a></li> -->
          <!-- Add conditional rendering to show user's name after login -->
          <li >
            <a href="/profile"><i class="fas fa-user-circle"></i>{{ userName?.name}}</a>
          </li>
          <li><a href="#" @click="logout"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
        </ul>
      </div>
    </nav>
  </div>

  <div class="appointment-container">
    <div class="row px-4">
      <div class="col-md-5">
        <div class="form-container">
          <h2>Book Your Appointment</h2>
          <form @submit.prevent="handleAppointment" class="appointment-form">
            <!-- Patient Information Section -->
            <div class="row">
              <div class="col-md-12">
                <label for="patientName">Patient Name</label>
                <input type="text" id="patientName" v-model="patientName" required placeholder="Enter your full name" class="form-control">
              </div>

              <div class="col-md-6">
                <label for="contactNumber">Contact Number</label>
                <input type="tel" id="contactNumber" v-model="contactNumber" required placeholder="Enter your contact number" class="form-control">
              </div>
              <div class="col-md-6 px-4">
                <label for="age">Age</label>
                <input type="number" id="age" v-model="age" required placeholder="Enter your age" class="form-control">
              </div>
            </div>

            <!-- Department Select -->
            <div class="row">
              <div class="col-md-12">
                <label for="department">Choose Department</label>
                <select v-model="selectedDepartment" @change="fetchDoctors">
                  <option v-for="department in departments" :key="department.id" :value="department.id">
                    {{ department.dep_name }}
                  </option>
                </select>
                 <p v-if="departments.length === 0">No departments available</p>
              </div>
            </div>

            <!-- Doctor Select -->
            <div class="row">
              <div class="col-md-12">
                <label for="doctor">Choose Doctor</label>
                <select v-model="selectedDoctor" @change="fetchDoctorAvailability">
                  <option v-for="doctor in doctors" :key="doctor.doctor_id" :value="doctor.id">
                    {{ doctor.name }}
                  </option>
                </select>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <label for="day">Day</label>
                <select v-model="selectedDay" @change="autoFillDate">
                  <option value="">--Select Day--</option>
                  <option v-for="day in availableDays" :key="day.day.id" :value="day.day.day_name">
                    {{ day.day.day_name }}
                  </option>
                </select>
              </div>
              <div class="col-md-6 px-4">
                <label for="session">Session</label>
                <select v-model="selectedShift">
                  <option value="">--Select Session--</option>
                  <option v-for="shift in availableShifts" :key="shift.shift.id" :value="shift.shift.id">
                    {{ shift.shift.shift_name }}
                  </option>
                </select>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <label for="appointmentDate">Appointment Date</label>
                <input type="date" v-model="appointmentDate" required class="form-control">
              </div>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="submit-btn btn btn-primary">Book Appointment</button>
          </form>
        </div>
      </div>

      <!-- Booking History Section -->
      <div class="col-md-7 px-4">
            <b-tabs content-class="mt-3">
              <b-tab title="Appointment Requested" active>
                <div class="history-container">
                  <h2>Appointment Requested</h2>
                  <table>
                    <thead>
                      <tr>
                        <th>Doctor</th>
                        <th>Patient</th>
                        <th>Reserved</th>
                        <th>Schedule</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-if="appointments.length === 0">
                        <td colspan="5">No appointment history available.</td>
                      </tr>
                      <tr v-for="appointmentreq in appointments" :key="appointmentreq.id">
                        <td>{{ appointmentreq.doctor.name }}</td>
                        <td>{{ appointmentreq.patient_name }}</td>
                        <td>Serial:{{ appointmentreq.id }}</td>
                        <td>{{ appointmentreq.app_date }} {{ appointmentreq.session }}</td>
                        <!-- <td>{{ appointmentreq.status }}</td> -->
                        <td>
                          <span v-if="appointmentreq.status === 0">Expired</span>
                          <span v-if="appointmentreq.status === 1">Pending</span>
                          <!-- <span v-if="appointmentreq.status === 2">Approved</span> -->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </b-tab>
              <b-tab title="Appointment Accepted">
                <div class="history-container">
                  <h2>Appointment Accepted</h2>
                  <table>
                    <thead>
                      <tr>
                        <th>Doctor</th>
                        <th>Patient</th>
                        <th>Reserved</th>
                        <th>Schedule</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-if="appointment.length === 0">
                        <td colspan="5">No appointment history available.</td>
                      </tr>
                      <tr v-for="appointment in appointment" :key="appointment.id">
                        <td>{{ appointment.doctor.name }}</td>
                        <td>{{ appointment.patient_name }}</td>
                        <td>Serial:{{ appointment.serial }} </td>
                        <td>{{ appointment.app_date }} <br/> {{ appointment.app_time }}</td>
                        <!-- <td>{{ appointment.status }}</td> -->
                        <td>
                          <!-- <span v-if="appointment.status === 0">Expired</span>
                          <span v-if="appointment.status === 1">Pending</span> -->
                          <span v-if="appointment.status === 2">Approved</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </b-tab>
            </b-tabs>
        
        
      </div>
    </div>
  </div>
</template>

<script>
import DataService from '@/services/DataService'; // Adjust the path based on where dataservice.js is located

export default {
  name: "Appointment",
  data() {
    console.log(JSON.parse(sessionStorage.getItem('udata')));
    return {
      departments: [],
      doctors: [],
      selectedDepartment: '',
      selectedDoctor: '',
      selectedDay: '',
      selectedShift: '',
      availableDays: {},
      availableShifts: [],
      appointmentDate: '',
      patientName: '',
      contactNumber: '',
      age: '',
      appointments: [], // Store the appointments for history
      appointment: [], // Store the appointments for history
      userLoggedIn: false, // Check if user is logged in
      userName: JSON.parse(sessionStorage.getItem('udata')), // Store logged-in user's name

    };
  },
  mounted() {
    this.fetchDepartments(); // Fetch departments when component is mounted
    this.fetchAppointments(); // Fetch appointment history
    setInterval(this.fetchAppointments, 60000); // Fetch appointments every 1 minute
    this.fetchAppointment(); // Fetch appointment history
    this.fetchUserProfile(); // Get user data when component is mounted
    
  },
  methods: {
    async fetchUserProfile() {
    try {
      const response = await DataService.login(); // API to fetch logged-in user details
      if (response.data) {
        this.userLoggedIn = true;
        this.userName = response.data; // Set the user's name
        console.log(response.data.name)
      }
    } catch (error) {
      console.error('Error fetching user profile', error);
    }
  },
  logout() {
      // Handle logout
      sessionStorage.removeItem('udata');
      this.$router.push('/login');
    },
    // Fetch all departments from the backend
    async fetchDepartments() {
      try {
        const response = await DataService.department();
        const data = await response.data.data;
        if (data) {
          this.departments = data; // Store departments
        } else {
          console.error('Failed to load departments');
        }
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    },

    // Fetch doctors based on selected department
    async fetchDoctors() {
      if (this.selectedDepartment) {
        try {
          const response = await DataService.doctor(this.selectedDepartment);
          const data = await response.data.data;
          if (data) {
            this.doctors = data; // Store doctors
            this.clearDoctorData(); // Reset doctor availability
          } else {
            this.doctors = [];
          }
        } catch (error) {
          console.error("Error fetching doctors:", error);
        }
      }
    },

    // Fetch doctor's available days and shifts
    async fetchDoctorAvailability() {
      if (this.selectedDoctor) {
        try {
          const response = await DataService.doctorAvailability(this.selectedDoctor);
          const data = await response.data.data;
          console.log(this.selectedDoctor)
          console.log(response.data.data)
          if (data) {
            this.availableDays = response.data.data; // List of available days
            this.availableShifts = response.data.data; // List of available sessions
          } else {
            this.availableDays = [];
            this.availableShifts = [];
          }
        } catch (error) {
          console.error("Error fetching doctor availability:", error);
        }
      }
    },
    autoFillDate() {
      if (this.selectedDay) {
        const nearestDate = this.getNearestAvailableDate(this.selectedDay);
        console.log(nearestDate)
        this.appointmentDate = nearestDate;
      }
    },

    getNearestAvailableDate(dayName,excludeToday=true,refDate = new Date()) {
      // You can implement your own logic here to calculate the nearest available date.
      // Example: Assume the nearest available date is today + 1 day
      const dayOfWeek = ["sun","mon","tue","wed","thu","fri","sat"].indexOf(dayName.slice(0,3).toLowerCase());
      if (dayOfWeek < 0) return;
      refDate.setHours(0,0,0,0);
      refDate.setDate(refDate.getDate() + +!!excludeToday + (dayOfWeek + 7 - refDate.getDay() - +!!excludeToday) % 7);
      const nearestDate = new Date(refDate.setDate(refDate.getDate() + 1));
      return nearestDate.toISOString().split('T')[0];

    },

    // Fetch appointment history for the current user
    async fetchAppointments() {
      try {
        let uid=sessionStorage.getItem('uid');
        const response = await DataService.appointmentrequest(uid); // Call the appointment method
        if (response && response.data.data) {
          this.appointments = response.data.data; // Store appointment history
        }
      } catch (error) {
        console.error("Error fetching appointment history:", error);
      }
    },
    // Fetch appointment history  status for user
    async fetchAppointment() {
      try {
        let uid=sessionStorage.getItem('uid');
        const response = await DataService.appointment(uid); // Call the appointment method
        if (response && response.data.data) {
          this.appointment = response.data.data; // Store appointment approved
        }
      } catch (error) {
        console.error("Error fetching appointment history:", error);
      }
    },

    // Handle appointment form submission
    async handleAppointment() {
      const appointmentData = {
        
        patient_name: this.patientName,
        patient_contact: this.contactNumber,
        age: this.age,
        department_id: this.selectedDepartment,
        doctor_id: this.selectedDoctor,
        app_date: this.appointmentDate,
        day: this.selectedDay,
        shift: this.selectedShift,
        status: 1, // Set the initial status to pending
        ref_id:sessionStorage.getItem('uid')
      };
console.log(appointmentData)
      try {
        await DataService.createAppointment(appointmentData);
        
        // Fetch the updated appointment history
        await this.fetchAppointments();

        // Optionally, show a success message
        alert('Appointment successfully booked');
        
        // Reset the form after booking the appointment
        this.resetForm();
      } catch (error) {
        console.error('Error booking appointment', error);
      }
    },

    // Reset the appointment form
    resetForm() {
      this.patientName = '';
      this.contactNumber = '';
      this.age = '';
      this.selectedDepartment = '';
      this.selectedDoctor = '';
      this.appointmentDate = '';
      this.day = '';
      this.session = '';
    },

    // Clear doctor-related data
    clearDoctorData() {
      this.selectedDoctor = '';
      this.availableDays = [];
      this.availableShifts = [];
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
  .appointment-container {
      font-family: 'Poppins', sans-serif;
      background-image: url('../assets/image/copy-space-medical-desk.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      color: white;
      padding: 30px 0;
      font-size: 18px;
  }


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

  /* Appointment Form */

  /* Form Container */
.form-container {
    flex: 1;
    background-color: #fff;
    padding: 30px;
    /* margin-top: 50px; */
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

/* History Container */
/* .history-container {
    flex: 1;
    background-color: #fff;
    padding: 30px;
    margin-top: 70px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    background-image: url('image/history.jpg');
} */

.history-container {
    flex: 1;
    padding: 30px;
    /* margin-top: 50px; */
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    background-image: url('../assets/image/history.jpg'); 
    background-size: contain; 
    background-position: center; 
    background-repeat: no-repeat; 
    min-height: 700px;
}

.history-container h2 {
    text-align: center;
    color: #021d6e;
    font-size: 28px;
    margin-bottom: 20px;
}

table {
    background-color: #fff;
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

table th, table td {
    padding: 12px;
    text-align: left;
    border: 1px solid #ddd;
    font-size: 16px;
}

table th {
    background-color: #00c6ff;
    color: white;
}
tr {
    color:#333;
}

/* table tr:nth-child(even) {
    background-color: #c5d9e9;
} */

/* Responsive Layout */
@media (max-width: 768px) {
    .appointment-container {
        flex-direction: column;
        gap: 40px;
    }

    .form-container, .history-container {
        width: 100%;
    }
}

  </style>
  