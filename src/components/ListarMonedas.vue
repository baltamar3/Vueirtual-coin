<template>
  <div>
    <v-data-table :headers="headers" :items="monedas"></v-data-table>
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
      {text: "Nombre", value: "name"},
      {text: "Precio", value: "priceUsd"},
      {text: "Cap. de Mercado", value: "marketCapUsd"},
      {text: "Variación 24hs", value: "volumeUsd24Hr"},
    ]
  })
};
</script>