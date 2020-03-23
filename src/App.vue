<template>
  <v-app>
    <px-header/>
    <v-content>
      <v-container>
        <v-row>
          <v-col cols="12">
            <listar-monedas :monedas="monedas" ></listar-monedas>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import PxHeader from "./components/globals/PxHeader.vue"
import ListarMonedas from "./components/ListarMonedas.vue"
export default {
  name: "App",

  components: {
    PxHeader,
    ListarMonedas
  },

  data: () => ({
    monedas: [],
  })
};
</script>
