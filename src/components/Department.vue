<template>
    <main>
        <!--? Hero Start -->
        <div class="slider-area2">
            <div class="slider-height2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                    <div class="col-xl-12">
                        <div class="hero-cap hero-cap2 text-center">
                            <h2>Departments</h2>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Hero End -->
        <!--? department_area_start  -->
        <div class="department_area section-padding2">
            <div class="container">
                <!-- Section Tittle -->
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-tittle text-center mb-100">
                            <span>Our Departments</span>
                            <h2>Our Medical Services</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="depart_ment_tab mb-30">
                            <!-- Tabs Buttons -->
                            <ul class="nav" id="myTab" role="tablist">
                                <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                                    <i class="flaticon-teeth"></i>
                                    <h4>Dentistry</h4>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                                    <i class="flaticon-cardiovascular"></i>
                                    <h4>Cardiology</h4>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">
                                    <i class="flaticon-ear"></i>
                                    <h4>ENT Specialists</h4>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="Astrology-tab" data-toggle="tab" href="#Astrology" role="tab" aria-controls="contact" aria-selected="false">
                                    <i class="flaticon-bone"></i>
                                    <h4>Astrology</h4>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="Neuroanatomy-tab" data-toggle="tab" href="#Neuroanatomy" role="tab" aria-controls="contact" aria-selected="false">
                                    <i class="flaticon-lung"></i>
                                    <h4>Neuroanatomy</h4>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="Blood-tab" data-toggle="tab" href="#Blood" role="tab" aria-controls="contact" aria-selected="false">
                                    <i class="flaticon-cell"></i>
                                    <h4>Blood Screening</h4>
                                </a>
                            </li>

    <li class="nav-item">
        <a class="nav-link" id="Gynae-tab" data-toggle="tab" href="#Gynae" role="tab" aria-controls="contact" aria-selected="false">
            <i class="fas fa-baby"></i> <!-- Font Awesome Gynae & Obs -->
            <h4>Gynae & Obs</h4>
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="Gastro-tab" data-toggle="tab" href="#Gastro" role="tab" aria-controls="contact" aria-selected="false">
            <i class="material-icons">local_hospital</i>  <!-- Font Awesome Gastroenterology -->
            <h4>Gastroenterology</h4>
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="Skin-tab" data-toggle="tab" href="#Skin" role="tab" aria-controls="contact" aria-selected="false">
            <i class="material-icons">face</i>  <!-- Font Awesome Skin & VD -->
            <h4>SKIN & VD</h4>
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="Pediatrics-tab" data-toggle="tab" href="#Pediatrics" role="tab" aria-controls="contact" aria-selected="false">
            <i class="fas fa-child"></i> <!-- Font Awesome Pediatrics -->
            <h4>Pediatrics</h4>
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="Surgery-tab" data-toggle="tab" href="#Surgery" role="tab" aria-controls="contact" aria-selected="false">
            <i class="fa fa-cut"></i >
            <h4>Surgery</h4>
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="Medicine-tab" data-toggle="tab" href="#Medicine" role="tab" aria-controls="contact" aria-selected="false">
            <i class="fas fa-pills"></i> <!-- Font Awesome Medicine -->
            <h4>Medicine</h4>
        </a>
    </li>
</ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
  name: 'Department',
  props: {
    msg: String
  }
}
</script>