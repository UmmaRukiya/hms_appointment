<template>
    <main>
      <!--? slider Area Start-->
      <div class="slider-area position-relative">
        <div class="slider-active">
          <!-- Single Slider -->
          <div class="single-slider slider-height d-flex align-items-center">
            <div class="container">
              <div class="row">
                <div class="col-xl-7 col-lg-9 col-md-8 col-sm-9">
                  <div class="hero__caption">
                    <span>Committed to success</span>
                    <h1 class="cd-headline letters scale">
                      We care about your
                      <strong class="cd-words-wrapper">
                        <b class="is-visible">{{ visibleWord }}</b>
                        <!-- <b>sushi</b>
                        <b>steak</b> -->
                      </strong>
                    </h1>
                    <p data-animation="fadeInLeft" data-delay="0.1s">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi uquip ex ea commodo consequat is aute irure.
                    </p>
                    <router-link to="/login" class="btn hero-btn" data-animation="fadeInLeft" data-delay="0.5s">
                      Appointment <i class="ti-arrow-right"></i></router-link>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- slider Area End-->
      <!--? About Start-->
      <div class="about-area section-padding2">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-10">
              <div class="about-caption mb-50">
                <!-- Section Tittle -->
                <div class="section-tittle section-tittle2 mb-35">
                  <span>About Our Company</span>
                  <h2>Welcome To Our Hospital</h2>
                </div>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <div class="about-btn1 mb-30">
                  <a href="about.html" class="btn about-btn">Find Doctors .<i class="ti-arrow-right"></i></a>
                </div>
                <div class="about-btn1 mb-30">
                  <a href="about.html" class="btn about-btn2">Appointment <i class="ti-arrow-right"></i></a>
                </div>
                <div class="about-btn1 mb-30">
                  <a href="about.html" class="btn about-btn2">Emergency 1 <i class="ti-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <!-- about-img -->
              <div class="about-img">
                <div class="about-font-img d-none d-lg-block">
                  <img src="assets/img/gallery/about2.png" alt="">
                </div>
                <div class="about-back-img">
                  <img src="assets/img/gallery/about1.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- About  End-->
    </main>
  </template>
  
  <script>
  export default {
    name: 'Home',
    data() {
      return {
        visibleWord: 'health', // Initial visible word
      };
    },
    mounted() {
      // Cycle through the words every 2 seconds
      const words = ['health', 'sushi', 'steak'];
      let currentIndex = 0;
  
      setInterval(() => {
        currentIndex = (currentIndex + 1) % words.length;
        this.visibleWord = words[currentIndex]; // Change the word dynamically
        console.log('Visible word:', this.visibleWord); // Debugging output
      }, 2000); // Update every 2 seconds
    },
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- <style scoped>
  /* Make sure that the slider is visible */
  .single-slider {
    background-color: rgba(255, 0, 0, 0.1); /* Temporary background */
  }
  
  .hero__caption {
    color: #fff;
    font-size: 36px;
    font-weight: bold;
  }
  
  .hero__caption h1 {
    font-size: 48px;
    line-height: 1.2;
  }
  
  .hero-btn {
    margin-top: 20px;
    padding: 15px 30px;
    background-color: #f44336;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
  }
  
  .hero-btn i {
    margin-left: 10px;
  }
  </style> -->
  