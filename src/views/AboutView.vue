<template>
<div class="skills">
        
  <h1>À Propos</h1>
          <p>
             Étudiante en développement web et web mobile.<br/> Laissez-moi vous montrer un peu mon parcours...
          </p>
          <p>J'ai des comptences en: HTML5 / CSS3 ,JavaScript (Vue.js) ,Node.js. </p>
          <p>J'ai fait des études supérieure en:</p>
          <p>Licence1 en Informatique - Université Sup-MTI</p>
          <p>Et maintenant un diplôme professionnelle en Développement web et web mobile (En-cours)- Centre Européen de Formation</p>
          <p>J'ai pas encore d'expérience professionnelle</p>
</div>

 
</template>

<script>
export default {
  name: "À Propos", // Pour Contact, changez le name à "Contact"
  data() {
    return {
      title: "À Propos", // Pour Contact, changez le titre à "Contact"
    };
  },
};
</script>

<style scoped>
.skills{
  color:#fff;
  padding: 200px;
}
h1{
  font-family: 'Lora', serif;
  font-weight: 500; /* Poids 500 pour le gras */

}
</style>
