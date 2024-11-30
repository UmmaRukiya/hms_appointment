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
          <li><a href="#"><i class="fas fa-user-circle"></i> User Details</a></li>
          <li><a href="#"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
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
                <select v-model="selectedDoctor">
                  <option v-for="doctor in doctors" :key="doctor.doctor_id" :value="doctor.doctor_id">
                    {{ doctor.name }}
                  </option>
                </select>
              </div>
            </div>

            <!-- Day and Session Select -->
            <div class="row">
              <div class="col-md-6">
                <label for="day">Day</label>
                <select v-model="day"  class="form-control">
                  <option value="">--Select Day--</option>
                  <option value="monday">Monday</option>
                  <option value="tuesday">Tuesday</option>
                  <option value="wednesday">Wednesday</option>
                  <option value="thursday">Thursday</option>
                  <option value="friday">Friday</option>
                </select>
              </div>
              <div class="col-md-6 px-4">
                <label for="session">Session</label>
                <select v-model="session" class="form-control">
                  <option value="">--Select Session--</option>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
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
        <div class="history-container">
          <h2>Booking History</h2>
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
              <tr v-for="(appointment, index) in appointments" :key="index">
                <td>{{ appointment.doctor }}</td>
                <td>{{ appointment.patientName }}</td>
                <td>{{ appointment.appointmentDate }}</td>
                <td>{{ appointment.day }} {{ appointment.session }}</td>
                <td>{{ appointment.status }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataService from '@/services/DataService'; // Adjust the path based on where dataservice.js is located
export default {
  name: "Appointment",
  data() {
    return {
      departments: [],
      doctors: [],
      selectedDepartment: '',
      selectedDoctor: '',
      patientName: '',
      contactNumber: '',
      age: '',
      day: '',
      session: '',
      appointmentDate: '',
      appointments: []
    };
  },
  mounted() {
    this.fetchDepartments(); // Fetch departments when component is mounted
    this.fetchAppointments(); // Fetch appointment history
  },
  methods: {
    // Fetch all departments from the backend
    async fetchDepartments() {
      try {
        const response = await DataService.department();
        const data = await response.data.data;
        if (data) {
          console.log(data);
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
        console.log(this.selectedDepartment)
        try {
          const response = await DataService.doctor(this.selectedDepartment);
          const data = await response.data.data;
          if (data) {
            this.doctors = data; // Store doctors
          }else{
            this.doctors =[];
          }
        } catch (error) {
          console.error("Error fetching doctors:", error);
        }
      }
    },

    // Fetch appointment history for the current user
    async fetchAppointments() {
      try {
        const response = await DataService.appointmentrequest(); // Call the doctor method
        if (response && response.data) {
          this.doctors = response.data; // Store doctors data in the component's state
        }
       } catch (error) {
        console.error("Error fetching appointment history:", error);
      }
    },

    // Handle appointment form submission
    async handleAppointment() {
      // Validate form inputs
      if (!this.patientName || !this.contactNumber || !this.age || !this.department || !this.doctor || !this.day || !this.session || !this.appointmentDate) {
        alert('Please fill all fields!');
        return;
      }

      // Prepare the data for the appointment request
      const appointmentRequest = {
        department_id: this.department,
        doctor_id: this.doctor,
        patient_name: this.patientName,
        email: this.contactNumber, // Assuming contactNumber is used as email in the example
        contact_no: this.contactNumber,
        gender: "male", // Add logic for gender input if needed
        age: this.age,
        blood_id: "bloodgroup", // Add logic for blood type if needed
        app_date: this.appointmentDate
      };

      try {
        // Send appointment data to the backend API
        const response = await fetch('/api/appointmentrequest/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(appointmentRequest)
        });

        if (response.ok) {
          // If appointment is successfully booked, update the booking history
          this.appointments.push({
            doctor: this.doctors.find(doc => doc.doctor_id === this.doctor).name,
            patientName: this.patientName,
            appointmentDate: this.appointmentDate,
            day: this.day,
            session: this.session,
            status: 'Confirmed'
          });
          this.clearForm();
          alert('Appointment booked successfully!');
        } else {
          alert('Failed to book appointment.');
        }
      } catch (error) {
        console.error('Error submitting appointment:', error);
      }
    },

    // Clear form after booking
    clearForm() {
      this.patientName = '';
      this.contactNumber = '';
      this.age = '';
      this.department = '';
      this.doctor = '';
      this.day = '';
      this.session = '';
      this.appointmentDate = '';
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
  