import http from "../http-common";

class DataService {
  login(data) {
    return http.post("patient_login", data);
  }
  registration(data) {
    return http.post("patient_register", data);
  }
  department(data) {
    return http.get("department/index", data);
  }
  doctor(d) {
    return http.get("doctor/index?department_id="+d);
  }
  doctorAvailability(d) {
    return http.get("schedule/index?doctor_id="+d);
  }
  appointmentrequest(data) {
    return http.get("appointmentrequest/index", data);
  }

   // Add createAppointment method to handle POST request for creating an appointment
   createAppointment(data) {
    return http.post("appointmentrequest/create", data);  // Correct POST route to create an appointment
  }
  
  // orders(uid) {
  //   return http.get(`/orders/${uid}`);
  // }
  // ordertrack(uid) {
  //   return http.get(`/ordertrack/${uid}`);
  // }
  // ordertrack_save(data) {
  //   return http.post("/ordertrack_save", data);
  // }
  // doctor(dept) {
  //   return http.get(`/doctor/${dept}`);
  // }
  // getAll(uid) {
  //   return http.get(`/booking/${uid}`);
  // }

  // get(id) {
  //   return http.get(`/booking_single/${id}`);
  // }
  // student_details(id) {
  //   return http.get(`/student_details/${id}`);
  // }

  // login(data) {
  //   return http.post("/student_login", data);
  // }

  // update(id, data) {
  //   return http.put(`/tutorials/${id}`, data);
  // }

  // delete(id) {
  //   return http.delete(`/tutorials/${id}`);
  // }



  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new DataService();