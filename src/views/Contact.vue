<template>
  <div class="contact contact-component">
    <h1>Contactez-moi</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="firstName">Prénom:</label>
        <input type="text" v-model="firstName" required />
      </div>
      <div>
        <label for="lastName">Nom:</label>
        <input type="text" v-model="lastName" required />
      </div>
      <div>
        <label for="subject">Objet:</label>
        <input type="text" v-model="subject" required />
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea v-model="message" required></textarea>
      </div>
      <button type="submit">Envoyer</button>
      <div v-if="error" class="error-message">{{ error }}</div>
      <div v-if="success" class="success-message">{{ success }}</div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      subject: "",
      message: "",
      error: null,
      success: null,
    };
  },
  methods: {
    async submitForm() {
      try {
        if (!this.firstName || !this.lastName || !this.subject || !this.message) {
          this.error = "Veuillez remplir tous les champs.";
          return;
        }

        const data = {
          firstName: this.firstName,
          lastName: this.lastName,
          subject: this.subject,
          message: this.message,
        };

        const mailto = "doucourekan923@gmail.com"; // Remplacez par votre adresse e-mail

        const mailSubject = encodeURIComponent(data.subject);
        const mailBody = encodeURIComponent(data.message);

        const mailtoLink = `mailto:${mailto}?subject=${mailSubject}&body=${mailBody}`;

        window.location.href = mailtoLink;

        this.success = "Le formulaire a été soumis avec succès!";
      } catch (error) {
        this.error = "Une erreur s'est produite lors de l'envoi du formulaire.";
      }
    },
  },
};
</script>






  <style scoped>
  .contact h1 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #fff;
  font-family: 'Lora', serif;
  font-weight: 500; /* Poids 500 pour le gras */

}

.submitForm {
  margin-bottom: 50px;
  border: 1px solid #000; /* Ajout de la bordure noire */
  border-radius: 4px; /* Ajout de coins arrondis */
  padding: 0px; /* Ajout de marge intérieure */
  background-color: #fff; /* Fond blanc */
}

label {
  display: block;
  font-weight: bold;
  color: #555555;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none; /* Retirer la bordure du champ de texte */
  outline: none; /* Retirer le contour de focus */
}

button {
  padding: 12px 24px;
  font-size: 16px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.contact-link:hover {
  background-color: #bd2130;
}
.contact-component {
  margin-bottom: 10px; /* Ajustez la valeur selon vos préférences */
  padding: 250px;
}
.error-message, .success-message {
  font-size: 16px;
  color: red; /* pour les erreurs */
  /* ou */
  color: green; /* pour les succès */
}
  </style>
  