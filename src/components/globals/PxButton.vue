<template>
  <v-btn @click="handdlerClick" class="ma-2" tile outlined color="success">
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: "PxButton",

  methods: {
    handdlerClick(){
      this.$emit("click-detalle")
    }
  }
}
</script>