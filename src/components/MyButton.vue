<template>
    <div class="text-center">
      <v-btn
        class="ma-2"
        :loading="loading"
        :disabled="loading"
        color="green"
        @click="loader = 'loading'"
      >
        {{text}}
      </v-btn>
    </div>
  </template>
  <script>
  export default {
    props:{
        has_loader: Boolean,
        text:String,
    },
    data () {
      return {

      }
    },

  }
</script>
<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>