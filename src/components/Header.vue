<template>
  <div class="my-header py-2">
    <div>
      <div class="top-container">
        <div class="img-wrapper ">
          9:10
        </div>
        <div class="">
          <v-icon small color="gray darken-2">
            mdi-wifi
          </v-icon>
        </div>
      </div>
    </div>
    <div class="my-container">
      <div class="bott">
        <div class="img-wrapper float-left">
          <img class="h-100 w-100" src="@/assets/img/minista.png" alt="">
        </div>
        <div class="">
          <v-icon class=" mr-2" small color="gray darken-2">
            mdi-bell
          </v-icon>
          <v-avatar size="36px">
            <img alt="Avatar" src="@/assets/img/hello.jpg"> 
          </v-avatar>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-header',

  data: () => ({

  }),
}
</script>
<style scoped>
.bott {
  display: flex;
  justify-content: space-between;
}
</style>