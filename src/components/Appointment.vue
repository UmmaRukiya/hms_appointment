<template>
   <div class="navbar">
        <div class="logo">
            <img src="/assets/image/log.png" alt="Logo" class="logo-img">
            <span>HMS Hospital</span>
        </div>
        <nav>
            <ul>
                <li><a href="#"><i class="fas fa-user-md"></i> Doctor List</a></li>
                <li><a href="#"><i class="fas fa-bell"></i> Reminders</a></li>
                <li><a href="#"><i class="fas fa-user-circle"></i> User Details</a></li>
                <li><a href="#"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
            </ul>
        </nav>
    </div>

    <div class="appointment-container">
        <!-- Appointment Form Section -->
        <div class="form-container">
            <h2>Book Your Appointment</h2>
            <form action="#" method="post" class="appointment-form">
                <!-- Patient Information Section -->
                <label for="patientName">Patient Name</label>
                <input type="text" id="patientName" name="patientName" required placeholder="Enter your full name">

                <label for="contactNumber">Contact Number</label>
                <input type="tel" id="contactNumber" name="contactNumber" required placeholder="Enter your contact number">

                <label for="age">Age</label>
                <input type="number" id="age" name="age" required placeholder="Enter your age">

                <!-- Department Selection Section -->
                <label for="department">Choose Department</label>
                <select id="department" name="department" required>
                    <option value="">--Select Department--</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="neurology">Neurology</option>
                    <option value="orthopedics">Orthopedics</option>
                    <option value="pediatrics">Pediatrics</option>
                </select>

                <!-- Doctor Selection Section -->
                <label for="doctor">Choose Doctor</label>
                <select id="doctor" name="doctor" required>
                    <option value="">--Select Doctor--</option>
                    <option value="dr-smith">Dr. Smith</option>
                    <option value="dr-jones">Dr. Jones</option>
                    <option value="dr-lee">Dr. Lee</option>
                </select>

                <!-- Day & Session Section -->
                <label for="day">Choose Day</label>
                <select id="day" name="day" required>
                    <option value="">--Select Day--</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                </select>

                <label for="session">Choose Session</label>
                <select id="session" name="session" required>
                    <option value="">--Select Session--</option>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                </select>

                <!-- Appointment Date Section -->
                <label for="appointmentDate">Appointment Date</label>
                <input type="date" id="appointmentDate" name="appointmentDate" required>

                <!-- Submit Button -->
                <button type="submit" class="submit-btn">Book Appointment</button>
            </form>
        </div>

        <!-- Booking History Section -->
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
                    <tr>
                        <td>{{doctor}}</td>
                        <td>John Doe</td>
                        <td>2024-11-20</td>
                        <td>2024-11-25 10:00 AM</td>
                        <td>Confirmed</td>
                    </tr>
                    <tr>
                        <td>Dr. Lee</td>
                        <td>Jane Smith</td>
                        <td>2024-11-18</td>
                        <td>2024-12-01 02:00 PM</td>
                        <td>Pending</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  name: "appointment",
  data() {
    return {
      patientName: '',
      contactNumber: '',
      age: '',
      department: '',
      doctor: '',
      day: '',
      session: '',
      appointmentDate: '',
      appointments: []
    };
  },
  methods: {
    handleAppointment() {
      // Validate form inputs
      if (
        !this.patientName || !this.contactNumber || !this.age || !this.department || !this.doctor || !this.day || !this.session || !this.appointmentDate
      ) {
        alert('Please fill all fields!');
        return;
      }

      // Simulate adding an appointment to history
      const newAppointment = {
        patientName: this.patientName,
        contactNumber: this.contactNumber,
        age: this.age,
        department: this.department,
        doctor: this.doctor,
        day: this.day,
        session: this.session,
        appointmentDate: this.appointmentDate,
        status: 'Confirmed'
      };

      this.appointments.push(newAppointment);
      this.clearForm();
      alert('Appointment booked successfully!');
    },
    clearForm() {
      this.patientName = '';
      this.contactNumber = '';
      this.age = '';
      this.department = '';
      this.doctor = '';
      this.day = '';
      this.session = '';
      this.appointmentDate = '';
    },
    async submitAppointment() {
      try {
        // const response = await axios.post('http://localhost:8000/api/appointmentrequest', this.appointment);
        // this.message = response.data.message;  // Success message
      } catch (error) {
        this.message = 'An error occurred while submitting the appointment request.';
        console.error(error);
      }
    }
  }
}
</script>

<style scoped>
/* General reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
}

/* Body and page layout */
body {
    font-family: 'Poppins', sans-serif;
    background-image: url('../assets/image/medicine-background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    color: white;
}
body::before {
    content: ''; /* Necessary to create the pseudo-element */
    position: absolute; /* Position it absolutely inside the container */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: inherit; /* Inherit the background image from the parent */
    background-size: cover; /* Ensure the background image covers the container */
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.1; /* Adjust the opacity of the background image */
    z-index: -1; /* Make sure it stays behind the content */
}

/* Navbar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(90deg, #00c6ff, #0072ff);
    padding: 15px 30px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    border-bottom: 2px solid #fff;
}

.navbar .logo {
    display: flex;
    align-items: center;
    color: white;
    font-size: 24px;
    font-weight: 600;
}

.navbar .logo img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
}

.navbar nav ul {
    list-style: none;
    display: flex;
    gap: 25px;
}

.navbar nav ul li {
    display: inline-block;
}

.navbar nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 15px;
    border-radius: 6px;
    transition: background-color 0.3s, transform 0.3s;
}

/* Hover effect for nav links */
.navbar nav ul li a:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
}

/* Icons styling */
.navbar nav ul li a i {
    font-size: 20px;
    transition: color 0.3s;
}

.navbar nav ul li a:hover i {
    color: #00c6ff;
}

/* Appointment Container */
.appointment-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 150px;
    padding: 40px;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    /* background-image: url('image/history.jpg'); */
   
}

/* Form Container */
.form-container {
    flex: 1;
    background-color: #fff;
    padding: 30px;
    margin-top: 50px;
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
    margin-top: 50px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    background-image: url('../assets/image/history.jpg'); 
    background-size: contain; 
    background-position: center; 
    background-repeat: no-repeat; 
    min-height: 800px;
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
