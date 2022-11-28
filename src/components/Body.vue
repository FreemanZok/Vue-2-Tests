<template>
  <div class="my-body">
    <div class="body-container">
      <div class="tops">

        <div>

          <v-icon small color="gray darken-2">
            mdi-arrow-left-thick
          </v-icon>
          <span>
            Laundry
          </span>
        </div>
        <v-icon small color="gray darken-2">
          mdi-magnify
        </v-icon>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-header',

  data: () => ({

  }),
  computed: {
  },
  methods: {

  },
  mounted() {
  }
}
</script>
<style scoped>
.tops {
  display: flex;
  justify-content: space-between;
}
</style>