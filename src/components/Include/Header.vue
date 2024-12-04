<template>
    <header>
    <!--? Header Start -->
    <div class="header-area">
        <div class="main-header header-sticky">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <!-- Logo -->
                    <!-- <div class="col-xl-2 col-lg-2 col-md-1">
                        <div class="logo">
                            <a href="index.html"><img src="assets/img/logo/logo.png" alt="" class="log"></a>
                        </div>
                    </div> -->
                    <div class="logo-container">
          <img src="/assets/image/log.png" alt="Logo" class="logo" />
          <span class="logo-text">HOSPITAL</span>
        </div>
                    <div class="col-xl-10 col-lg-10 col-md-10">
                        <div class="menu-main d-flex align-items-center justify-content-end">
                            <!-- Main-menu -->
                            <div class="main-menu f-right d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                                        <li><router-link to="home">Home</router-link></li>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="doctor">Doctors</a></li>
                                        <li><router-link to="department">Department</router-link >
                                        <ul class="submenu">
                                            <li><a href="blog_details.html">Neuro Medicine</a></li>
                                            <li><a href="/cardiology">Cardiology</a></li>
                                            <li><a href="elements.html">Gastroenterology</a></li>
                                            <li><a href="elements.html">Ent</a></li>
                                            <li><a href="elements.html">Gynee & OBS</a></li>
                                            <li><a href="elements.html">Nephrology</a></li>
                                            <li><a href="/orthopedics">Orthopedics</a></li>
                                            <li><a href="elements.html">Oncology</a></li>
                                            <li><a href="elements.html">Psychiatry</a></li>
                                            <li><a href="elements.html">Pediatrics</a></li>
                                            <li><a href="elements.html">Physical Medicine</a></li>
                                            <li><a href="elements.html">Surgery</a></li>
                                            <li><a href="elements.html">Urology</a></li>

                                        </ul></li>
                                        <li><a href="blog.html">Blog</a>
                                            <ul class="submenu">
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="blog_details.html">Blog Details</a></li>
                                                <li><a href="elements.html">Element</a></li>
                                            </ul>
                                        </li>
                                        <!-- <li><a href="contact.html">Contact</a></li> -->
                                        <li><router-link to="appointment">Appointment</router-link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="header-right-btn f-right d-none d-lg-block ml-30">
                                <a href="#" class="btn header-btn">+955654416</a>
                            </div>
                        </div>
                    </div>   
                    <!-- Mobile Menu -->
                    <div class="col-12">
                        <div class="mobile_menu d-block d-lg-none"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Header End -->
</header>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      uid:sessionStorage.getItem('uid')
    };
  },
  props: {
    msg: String
  },
//   methods: {
//     logout() {
//       this.uid="";
//       sessionStorage.setItem('uid', '');
//       window.location.reload();
//     }
//   }
}
</script>
<style scoped>
  .logo-container {
    display: flex;
    align-items: center;
  }
 .logo-text {
    font-size: 24px;
    font-weight: 700;
    margin-left: 10px;
    color: #1f2b7b;
  }
  .logo {
    width: 50px;
    height: 50px;
  }
  
  
</style>


  