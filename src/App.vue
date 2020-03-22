<template>
  <div id="app">
    <px-header msg="Welcome to Your Vue.js App"/>
    <main class="ui container">
      <px-lista-monedas/>
    </main>
  </div>
</template>

<script>
import PxHeader from './components/globals/PxHeader.vue'
import PxListaMonedas from './components/PxListaMonedas'

export default {
  name: 'App',
  components: {
    PxHeader,
    PxListaMonedas
  }
}
</script>

<style>

</style>
