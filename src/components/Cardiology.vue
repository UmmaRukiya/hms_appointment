<template>
    <main>
    <!--? Hero Start -->
    <div class="slider-area2">
        <div class="slider-height2 d-flex align-items-center">
            <div class="container">
                <div class="row">
                <div class="col-xl-12">
                    <div class="hero-cap hero-cap2 text-center">
                        <h2>Doctors</h2>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Hero End -->
    <div class="team-area section-padding30">
        <div class="container">
            <!-- Section Tittle -->
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="section-tittle text-center mb-100">
                        <span>Our Doctors</span>
                        <h2>Our Specialist</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <!-- Doctors will be dynamically displayed here -->
                <div v-for="doctor in doctors" :key="doctor.id" class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div class="single-team mb-30">
                        <div class="team-img">
                            <!-- <img :src="doctor.image_url || 'default-image.png'" alt="Doctor Image"> -->
                             {{ doctor.image }}
                        </div>
                        <div class="team-caption">
                            <h2><a href="#">{{ doctor.name }}</a></h2>
                            <span>{{ doctor.specialization }}</span>
                            <!-- Team social -->
                            <div class="team-social">
                                <a href="#" v-if="doctor.twitter"><i class="fab fa-twitter"></i></a>
                                <a href="#" v-if="doctor.website"><i class="fas fa-globe"></i></a>
                                <a href="#" v-if="doctor.facebook"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" v-if="doctor.pinterest"><i class="fab fa-pinterest-p"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </main>

</template>
<script>
import DataService from '@/services/DataService';

export default {
  name: 'Cardiology',
  data() {
    return {
      departmentId: 1, // For example, 1 is the ID for Cardiology, change as needed
      doctors: [],
    };
  },
  mounted() {
    this.fetchDoctors();
  },
  methods: {
    // Fetch doctors based on department
    async fetchDoctors() {
      try {
        const response = await DataService.doctor();
          const data = await response.data.data;
          if (data) {
            this.doctors = data; // Store doctors
          }else{
            this.doctors =[];
          }
        } catch (error) {
          console.error("Error fetching doctors:", error);
        }
    },
  },
};
</script>