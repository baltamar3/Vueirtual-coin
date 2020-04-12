<template>
  <v-app-bar app color="success" dark>
    <px-icon />
    <router-link id="link" :to="{name: 'home'}">
      <span>
        <strong>Vue</strong>irtual-Coin
      </span>
    </router-link>
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
  color: white;
}
</style>