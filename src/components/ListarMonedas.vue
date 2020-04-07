<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="monedas"
      item-key="monedas"
      class="elevation-1"
      loading
      loading-text="Loading... Please wait"
    >
      <template v-slot:item.name="{ item }">
        <router-link id="link" :to="{name: 'coin-detail', params:{id: item.id}}">{{item.name}}</router-link>
      </template>
      <template v-slot:item.symbol="{ item }">
        <img
          :src="`https://static.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`"
          loading="lazy"
        />
      </template>
      <template v-slot:item.priceUsd="{ item }">
        <span>{{item.priceUsd | dollar}}</span>
      </template>
      <template v-slot:item.marketCapUsd="{ item }">
        <span>{{item.marketCapUsd | dollar}}</span>
      </template>
      <template v-slot:item.marketCapUsd="{ item }">
        <span>{{item.volumeUsd24Hr | percent}}</span>
      </template>
      <template v-slot:item.ver="{ item }">
        <px-Button @click-detalle="getMoneda(item.id)">
          <span>Ver</span>
        </px-Button>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import PxButton from "./globals/PxButton";
export default {
  name: "ListarMonedas",
  props: ["monedas"],
  components: {
    PxButton
  },

  data: () => ({
    headers: [
      {
        text: "Ranking",
        align: "start",
        sortable: false,
        value: "rank"
      },
      { text: "Símbolo", value: "symbol" },
      { text: "Nombre", value: "name" },
      { text: "Precio", value: "priceUsd" },
      { text: "Cap. de Mercado", value: "marketCapUsd" },
      { text: "Variación 24hs", value: "volumeUsd24Hr" },
      { text: "Detalle", value: "ver" }
    ]
  }),

  methods:{
    getMoneda(id){
      this.$router.push({name:"coin-detail", params:{id}})
    }
  }
};
</script>

<style scoped>
img {
  width: 40px;
  margin-top: 5px;
}
#link {
  color: #4caf50;
}
</style>