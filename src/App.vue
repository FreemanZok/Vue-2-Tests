<template>
  <v-app>
    <Header />
    <Body />
    <router-view />
  </v-app>
</template>

<script>

import Header from "@/components/Header.vue"
import Body from "@/components/Body.vue"
export default {
  name: 'App',
  components: {
    Header,
    Body
  },
  data: () => ({}),
};
</script>
<style lang="scss">
@import "./assets/style/scss/global.scss";

.img-wrapper {
  img {
    width: 80px;
    height: 30PX;
  }
}
.theme--light.v-application{
  background: #fcfdff !important;
}
</style>