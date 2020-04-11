<template>
  <v-container>
    <bounce-loader class="center-loader" :loading="isLoading" :color="'#68d391'" :size="100" />
    <v-row class="mt" v-if="moneda.id">
      <v-col cols="4">
        <div>
          <v-img
            class="center"
            :src="`https://static.coincap.io/assets/icons/${moneda.symbol.toLowerCase()}@2x.png`"
            :alt="moneda.name"
            width="100"
          />
          <h1 class="text-center">
            {{moneda.name}}
            <small>{{moneda.symbol}}</small>
          </h1>
        </div>
      </v-col>
      <v-col cols="4">
        <div>
          <ul v-if="historial.length>0">
            <li>
              <b>Rankink</b>
              <span>{{moneda.rank}}</span>
            </li>
            <li>
              <b>Precio Actual</b>
              <span>{{moneda.priceUsd | dollar}}</span>
            </li>
            <li>
              <b>Precio más bajo</b>
              <span>{{min | dollar}}</span>
            </li>
            <li>
              <b>Precio más alto</b>
              <span>{{max | dollar}}</span>
            </li>
            <li>
              <b>Precio Promedio</b>
              <span>{{avg | dollar}}</span>
            </li>
            <li>
              <b>Variación 24hs</b>
              <span>{{moneda.changePercent24Hr | percent}}</span>
            </li>
          </ul>
        </div>
      </v-col>
      <v-col cols="4">
        <div>
          <v-btn block tile outlined color="success">USD to BTC</v-btn>
          <v-text-field />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MonedaDetalle",
  data: () => ({
    moneda: {},
    historial: [],
    isLoading: true
  }),

  methods: {
    getModeda() {
      fetch(`https://api.coincap.io/v2/assets/${this.$route.params.id}`)
        .then(res => res.json())
        .then(data => (this.moneda = data.data));
    },
    getHistorialMoneda() {
      let now = new Date();
      let end = now.getTime();
      now.setDate(now.getDate() - 1);
      let start = now.getTime();
      fetch(
        `https://api.coincap.io/v2/assets/${this.$route.params.id}/history?interval=h1&start=${start}&end=${end}`
      )
        .then(res => res.json())
        .then(data => {
          this.historial = data.data;
          this.isLoading = false;
        });
    }
  },

  computed: {
    min() {
      return Math.min(
        ...this.historial.map(i => parseFloat(i.priceUsd).toFixed(2))
      );
    },
    max() {
      return Math.max(
        ...this.historial.map(i => parseFloat(i.priceUsd).toFixed(2))
      );
    },
    avg() {
      return Math.abs(
        ...this.historial.map(i => parseFloat(i.priceUsd).toFixed(2))
      );
    }
  },

  created() {
    this.getModeda();
    this.getHistorialMoneda();
  }
};
</script>

<style scoped>
.center {
  margin: auto;
}

.center-loader {
  margin: auto;
  position: absolute;
  height: 100px;
  top: 50%;
  left: 45%;
}

.text-center {
  text-align: center;
}

.mt {
  margin-top: 60px;
}

.form-control {
  display: inline-block;
}
</style>
