<template>
  <header>
    <nav class="ui block header olive">
      <px-icon />
      <span>Vueirtual-Coin</span>
    </nav>
  </header>
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
nav {
   background-color: #869D05;
}
</style>