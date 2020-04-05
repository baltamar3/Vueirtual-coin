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
      <template v-slot:item.symbol="{ item }">
        <img :src="`https://static.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`" loading="lazy">
      </template>
      <template v-slot:item.priceUsd="{ item }">
        <span>{{item.priceUsd | dollar}}</span>
      </template>
      <template v-slot:item.marketCapUsd="{ item }">
        <span>{{item.marketCapUsd | dollar}}</span>
      </template>
      <template v-slot:item.volumeUsd24Hr="{ item }">
        <span>{{item.volumeUsd24Hr | percent}}</span>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "ListarMonedas",
  props: ["monedas"],
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
      { text: "Variación 24hs", value: "volumeUsd24Hr" }
    ]
  })
};
</script>

<style scoped>
  img{
    width: 40px;
    margin-top: 5px;
  }
</style>