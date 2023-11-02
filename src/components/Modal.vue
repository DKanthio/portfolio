<template>
    <div class="modal" @click.self="closeModal">
      <div class="modal-content">
        <h2>{{ projet.title }}</h2>
        <p>Date de création : {{ projet.date }}</p>
        <p>Technologies utilisées : {{ projet.technologies }}</p>
        <p><a :href="projet.link" target="_blank">Visiter le site</a></p>
        <a v-if="projet.github" :href="projet.github" target="_blank">Repository GitHub</a>
        <button @click="closeModal">Fermer</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      projet: Object,
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
    },
  };
  </script>
  

  <style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    max-width: 600px;
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .modal-content h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  .modal-content p {
    font-size: 1rem;
    margin-bottom: 10px;
  }
  
  .modal-content a {
    color: #007bff;
    text-decoration: none;
    display: block;
    margin-top: 10px;
  }
  
  .modal-content button {
    background: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .modal-content button:hover {
    background: #0056b3;
  }
  </style>
  
  