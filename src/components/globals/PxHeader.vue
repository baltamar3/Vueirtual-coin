<template>
  <v-app-bar app color="success" dark>
      <px-icon />
      <span><strong>Vue</strong>irtual-Coin</span>
  </v-app-bar>
</template>

<script>
import PxIcon from "./PxIcon";
export default {
  name: "PxHeader",
  components: {
    PxIcon
  }
};
</script>

<style scoped>
span {
  font-size: 24px;
  margin-top: 0px;
  margin-left: 10px;
}
</style>