<template>
  <div id="app">
  <div class="header-placeholder"></div>
    <Entete />
  <div class="main-content">
      <router-view />
  </div>
    <Footer />
  <div class="footer-placeholder"></div>
  </div>
</template>

<script>
import Entete from './components/Entete.vue';
import Footer from './components/Footer.vue';

export default {
  name: "App",
  components: {
    Entete,
    Footer
  }
};
</script>

<style scoped>
/* Vos styles pour App.vue */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.header-placeholder, .footer-placeholder, .content, #app {
  width: 100%;
}
.footer {
  padding-bottom: 30px;
}

.content {
  min-height: 100vh;
}

body {
  height: 100vh;
  margin: 0;
}

#app {
  min-height: 100vh; /* Assurez-vous que l'application a une hauteur minimale de 100% de la vue */
  display: flex;
  flex-direction: column;
  width: 100%;
  
}

.main-content {
  min-height: 100%;
  background-color:  #14051E;
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0px;
}


</style>
