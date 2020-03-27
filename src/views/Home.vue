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
import ListarMonedas from "../components/ListarMonedas.vue";
export default {
  name: "Home",

  components: {
    ListarMonedas
  },

  data: () => ({
    monedas: []
  }),

  methods:{
    getModedas(){
      fetch("https://api.coincap.io/v2/assets")
      .then((res)=>res.json())
      .then((data)=>this.monedas=data.data)
    }
  },

  created() {
    this.getModedas()
  }
};
</script>