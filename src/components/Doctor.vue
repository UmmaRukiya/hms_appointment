<template>
    <main>
      <!-- Hero Section Start -->
      <div class="slider-area2">
        <div class="slider-height2 d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="hero-cap hero-cap2 text-center">
                  <h2>{{ departmentName }} Doctors</h2> <!-- Display the department name dynamically -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Hero Section End -->
  
      <!-- Doctors List Section -->
      <div class="team-area section-padding30">
        <div class="container">
          <!-- Section Title -->
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section-tittle text-center mb-100">
                <span>Our Doctors</span>
                <h2>Our Specialists</h2>
              </div>
            </div>
          </div>
  
          <div class="row">
            <!-- Loop over doctors dynamically -->
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-" v-for="doctor in doctors" :key="doctor.id">
              <div class="single-team mb-30">
                <div class="team-img">
                  <img :src="doctor.image" alt="Doctor Image" />
                </div>
                <div class="team-caption">
                  <h3><a href="#">{{ doctor.name }}</a></h3>
                  <span>{{ doctor.specialist }}</span> <!-- Display doctor specialist -->
                  <p>{{ doctor.designation }}</p> <!-- Display doctor designation -->
                  <p><strong>Email:</strong> {{ doctor.email }}</p> <!-- Display email -->
                  <p><strong>Contact:</strong> {{ doctor.contact }}</p> <!-- Display contact -->
                  <p><strong>Education:</strong> {{ doctor.education }}</p> <!-- Display education -->
                  <p><strong>Fees:</strong> {{ doctor.fees }}</p> <!-- Display fees -->
  
                  <!-- Team social (optional) -->
                  <div class="team-social">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fas fa-globe"></i></a>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-pinterest-p"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
        </div>
      </div>
      <!-- Doctors List End -->
    </main>
  </template>
  
  <script>
  import DataService from "@/services/DataService";  // Import the service to fetch doctor data
  import { ref, onMounted } from "vue";  // Import Vue composition API hooks
  import { useRoute } from "vue-router";  // To access the current route
  
  export default {
    name: "Doctor",
    setup() {
      const doctors = ref([]);  // Store the list of doctors
      const departmentName = ref("");  // Store the department name (e.g., "Cardiology")
      const route = useRoute();  // Get the current route
  
      // Fetch doctors based on department
      const fetchDoctors = async (departmentId) => {
        try {
          // Fetch the list of doctors from the backend by department ID
          const response = await DataService.doctor(departmentId);
          doctors.value = response.data.data;  // Store the doctors in the component
        } catch (error) {
          console.error("Error fetching doctors:", error);
        }
      };
  
      // Set department name and fetch doctors when component is mounted
      onMounted(() => {
        const departmentId = route.params.department;  // Get the department name (e.g., "cardiology") from the route
        departmentName.value = departmentId.charAt(0).toUpperCase() + departmentId.slice(1);  // Capitalize the department name
        fetchDoctors(departmentId);  // Fetch doctors for that department
      });
  
      return {
        doctors,  // Return doctors to be used in the template
        departmentName,  // Return department name for dynamic display
      };
    },
  };
  </script>
  