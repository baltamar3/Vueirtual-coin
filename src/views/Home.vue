<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <listar-monedas :monedas="monedas"></listar-monedas>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import PxHeader from "./globals/PxHeader.vue"
import ListarMonedas from "../components/ListarMonedas.vue";
export default {
  name: "Home",

  components: {
    // PxHeader,
    ListarMonedas
  },

  data: () => ({
    monedas: []
  }),

  created() {}
};
</script>