<template>
  <div>
    <h1>Mes Créations </h1>
    <div class="projets">
      <div v-for="projet in projetsData" :key="projet.id" class="projet">
        <img :src="projet.image" :alt="projet.title" @click="openModal(projet)" />
        <div class="projet-details">
          <h3>{{ projet.title }}</h3>
          <p>Date de création : {{ projet.date }}</p>
          <p>Technologies utilisées : {{ projet.technologies }}</p>
          <a :href="projet.link" target="_blank">En savoir plus</a>
          <a v-if="projet.github" :href="projet.github" target="_blank">Repository GitHub</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectView",
  props: {
    projets: Array,
  },
  data() {
    return {
      projetsData: [
      {
            id: 1,
            title: "Mon Cv",
            date: "02/10/2023",
            technologies: "HTML, CSS",
            github: "https://github.com/DKanthio/devoir-Cv",
            image: "/src/assets/images/creation1.png", 
            link: "/src/assets/cv/index.html", 
        },

        {
          id: 2,
          title: "Cahier Des Charges",
          date: "05/10/2023",
          technologies: "Powerpoint",
          image: "/src/assets/images/CDC.png",
          link: "/src/assets/CDC.pdf",
        },
        {
          id: 3,
          title: "Dynamiser un espace commentaire",
          date: "31/10/2023",
          technologies: "HTML, CSS, Javascript",
          github: "https://github.com/DKanthio/commentaire",
          image: "/src/assets/images/creation1.png",
          link: "/src/assets/commentaire/index.html",
        },
      ],
      selectedProjet: null,
    };
  },
  methods: {
    openModal(projet) {
      this.$emit('open-image', projet);
    },
  },
};
</script>


<style scoped>
h1 {
  color: #fff;
  font-family: 'Lora', serif;
  font-weight: 500; /* Poids 500 pour le gras */
  display: flex;
  justify-content: center;
}
.projets {
  display: flex;
  justify-content: center;
}

.projet {
  margin: 20px;
  max-width: 200px;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.projet img {
  max-width: 100%;
  border-radius: 5px;
  transition: box-shadow 0.3s; /* Ajoutez une transition pour un effet plus doux */
}

.projet:hover img {
  box-shadow: 4px 4px 12px rgba(128, 0, 128, 0.5); /* Ombre violette en bas à droite */
}



.projet-details {
  margin-top: 10px;
  text-align: center;
}

.projet a {
  color: #007bff;
  text-decoration: none;
  display: block;
  margin-top: 10px;
}
</style>
