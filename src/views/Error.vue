<template>
  <v-container id="container">
    <img src="/img/error-404.png">
    <h1>404</h1>
    <p>Page Not Fount.</p>
    <router-link id="link" to="/">Volver a la pagina de Inicio</router-link>
  </v-container>
</template>

<style scoped>
.container{
    margin-top: 50px;
    text-align: center;
    font-size: 24px;
}

img{
    width: 20%;
}

#link{
    color: #4CAF50;
    font-size: 16px;
}
</style>