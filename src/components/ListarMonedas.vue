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
        value: "name"
      },
      {text: "Nombre", value: ""},
      {text: "Precio", value: ""},
      {text: "Cap. de Mercado", value: ""},
      {text: "Variación 24hs", value: ""},
    ]
  })
};
</script>