<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->


<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>  <!-- Placeholder for pages -->

    <Footer></Footer>
  </div>
</template>

<script>

import Header from './components/Include/Header.vue'
import Footer from './components/Include/Footer.vue'
import 'animate.css';
export default {
  name: 'App',
  components: {
    Header,Footer
  }
}
</script>

<style scoped>
/* Global CSS or other styles */

</style>
