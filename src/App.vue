<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../../fuck1.jpg"
          
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>


      <span class="mr-2">Latest Release</span>
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
