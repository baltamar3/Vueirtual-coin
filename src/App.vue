<template>
  <v-app>
    <px-header />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import PxHeader from "./components/globals/PxHeader.vue";

export default {
  name: "App",

  components: {
    PxHeader
  },

  data: () => ({
    monedas: []
  }),

  created() {}
};
</script>
