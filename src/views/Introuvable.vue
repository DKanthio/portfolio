<template>
    <div class="error-container">
      <img src="@/assets/images/404.png" alt="Image 404">
      <h1>404</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Introuvable'
  }
  </script>
  
  <style scoped>

.error-container {
    margin-top: 50px;
}

img {
    max-width: 100%;
    height: auto;
}

h1 {
    font-size: 200px;
    margin-top: 20px;
    color: #FF0000;
}

  </style>
  