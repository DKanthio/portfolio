<template>
  <header class="header full-width">
    <router-link to="/">
      <img src="@/assets/images/logo.png" alt="Logo" class="logo" />
    </router-link>
    <nav class="nav">
      <router-link to="/apropos" class="nav-link" :class="{ 'active': currentRoute === '/apropos' }">Présentation</router-link>
      <router-link to="/projets" class="nav-link" :class="{ 'active': currentRoute === '/projets' }">Création</router-link>
      <router-link to="/contact" class="nav-link" :class="{ 'active': currentRoute === '/contact' }">Contact</router-link>
      

    </nav>
  </header>
</template>

<script>
export default {
  name: "Entete",
  data() {
    return {
      currentRoute: "",
    };
  },
  watch: {
    $route(to) {
      this.currentRoute = to.path;
    },
  },
};
</script>

<style scoped>
.header {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color:  #14051E; /* Couleur de fond de l'en-tête */
  color:white; /* Couleur du texte */
  padding: 10px; /* Espacement autour du contenu de l'en-tête */
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  
}

.logo {
  max-width: 90px;
  
}

.nav {
  display: flex;
}

.nav-link {
  margin-left: 20px;
  text-decoration: none;
  color: white; /* Couleur des liens de navigation */
}

.nav-link:hover {
  color: #ff8a65; /* Couleur des liens au survol */
}
.full-width {
  width: 100%;
  
}
.nav-link.active {
  text-decoration: underline; /* Ajout de soulignement */
}

</style>
