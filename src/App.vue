<template>
  <v-app>
    <Header />

    <router-view />
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue"

export default {
  name: 'App',
  components: {
    Header,
  },
  data: () => ({}),
};
</script>
<style lang="scss">
@import "./assets/style/scss/global.scss";

.img-wrapper {
  img {
    width: 130px;
    height: 34px;
  }
}
.theme--light.v-application{
  background: #fcfdff !important;
}
</style>