<template>
  <v-container>
    <v-row v-if="moneda.id">
      <v-col cols="12">
        <div>
          <v-img
            :src="`https://static.coincap.io/assets/icons/${moneda.symbol.toLowerCase()}@2x.png`"
            :alt="moneda.name"
            width="100"
          />
          <h1>
            {{moneda.name}}
            <small>{{moneda.symbol}}</small>
          </h1>
        </div>
        <div>
          <ul>
            <li>
              <b>Rankink</b>
              <span>{{moneda.rank}}</span>
            </li>
            <li>
              <b>Precio Actual</b>
              <span>{{moneda.priceUsd}}</span>
            </li>
            <li>
              <b>Precio más bajo</b>
              <span>{{moneda.rank}}</span>
            </li>
            <li>
              <b>Precio más alto</b>
              <span>{{moneda.rank}}</span>
            </li>
            <li>
              <b>Precio Promedio</b>
              <span>{{moneda.rank}}</span>
            </li>
            <li>
              <b>Variación 24hs</b>
              <span>{{moneda.changePercent24Hr}}</span>
            </li>
          </ul>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CoinDetail",
  data: () => ({
    moneda:{},
    historial:{}
  }),

  methods: {
    getModeda() {
      fetch(`https://api.coincap.io/v2/assets/${this.$route.params.id}`)
        .then(res => res.json())
        .then(data => this.moneda = data.data);
    },
    getHistorialMoneda() {
      let now = new Date
      let end = now.getTime()
      now.setDate(now.getDate()-1)
      let start = now.getTime()
      fetch(`https://api.coincap.io/v2/assets/${this.$route.params.id}/history?interval=h1&start=${start}&end=${end}`)
        .then(res => res.json())
        .then(data => this.historial = data.data);
    }
  },

  computed: {
    // min() {},
    // max() {},
    // avg() {}
  },

  created() {
    this.getModeda()
    this.getHistorialMoneda()
  }
};
</script>

<style scoped>

</style>
