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
          <ul v-if="historial.length>0">
            <li>
              <b>Rankink </b>
              <span>{{moneda.rank}}</span>
            </li>
            <li>
              <b>Precio Actual </b>
              <span>{{moneda.priceUsd | dollar}}</span>
            </li>
            <li>
              <b>Precio más bajo </b>
              <span>{{min | dollar}}</span>
            </li>
            <li>
              <b>Precio más alto </b>
              <span>{{max | dollar}}</span>
            </li>
            <li>
              <b>Precio Promedio </b>
              <span>{{avg | dollar}}</span>
            </li>
            <li>
              <b>Variación 24hs </b>
              <span>{{moneda.changePercent24Hr | percent}}</span>
            </li>
          </ul>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MonedaDetalle",
  data: () => ({
    moneda:{},
    historial:[]
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
    min() {
      return Math.min(
        ...this.historial.map(i => parseFloat(i.priceUsd).toFixed(2))
      )
    },
    max() {
      return Math.max(
        ...this.historial.map(i => parseFloat(i.priceUsd).toFixed(2))
      )
    },
    avg() {
      return Math.abs(
        ...this.historial.map(i => parseFloat(i.priceUsd).toFixed(2))
      )
    }
  },

  created() {
    this.getModeda()
    this.getHistorialMoneda()
  }
};
</script>

<style scoped>


</style>
