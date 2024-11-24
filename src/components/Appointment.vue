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
                        <td>Dr. Smith</td>
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
    }
  }
}
</script>

<style scoped>
@import "@/assets/css/styles.css";
</style>
