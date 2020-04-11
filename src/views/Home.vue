<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <bounce-loader class="center-loader" :loading="isLoading" :color="'#68d391'" :size="100" />
        <listar-monedas v-if="!isLoading" :monedas="monedas"></listar-monedas>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ListarMonedas from "../components/ListarMonedas.vue";
export default {
  name: "Home",

  components: {
    ListarMonedas
  },

  data: () => ({
    monedas: [],
    isLoading: true
  }),

  methods: {
    getModedas() {
      fetch("https://api.coincap.io/v2/assets")
        .then(res => res.json())
        .then(data => {
          this.monedas = data.data;
          this.isLoading = false;
        });
    }
  },

  created() {
    this.getModedas();
  }
};
</script>

<style scoped>
.center-loader {
  margin: auto;
  position: absolute;
  height: 100px;
  top: 50%;
  left: 45%;
}
</style>