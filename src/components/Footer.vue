<template>
  <footer class="footer full-width">
    <div class="icons">
      <a href="https://github.com/DKanthio/" target="_blank"><i class="fab fa-github"></i></a>
      <a href="https://www.instagram.com/k_a_n_t_h_i_o/" target="_blank"><i class="fab fa-instagram"></i></a>
      <a href="https://twitter.com/KanthioDoucoure" target="_blank"><i class="fab fa-twitter"></i></a>
    </div>
    <p>Dernière mise à jour : {{ getLastUpdateDate() }}</p>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  methods: {
    getLastUpdateDate() {
      const date = new Date(); // Obtenez la date actuelle
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('fr-FR', options);
    },
  },
};
</script>


<style scoped>
.footer {
  background-color: #907DB3; /* Couleur de fond du pied de page */
  text-align: center;
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px; /* Espacement autour du contenu du pied de page */
  
}

.icons a {
  text-decoration: none;
  margin: 0 10px;
  color: white; /* Couleur des icônes de médias sociaux */
  font-size: 24px;
}

.icons i:hover {
  color: #e01212; /* Couleur des icônes au survol */
}

p {
  color: white;
  margin: 0;
}
.full-width {
  width: 100%;
}
</style>
