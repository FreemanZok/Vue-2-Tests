<template>
  <div class="my-body">
    <div class="body-container">
      <div class="tops mb-5">
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
      <div>
        <Element />
      </div>
    </div>
  </div>
</template>

<script>
import Element from "@/components/Element.vue"

export default {
  name: 'my-header',
  components:{
    Element
  },
  data: () => ({}),
  computed: {},
  methods: {},
  mounted() {}
}
</script>
<style scoped>
.tops {
  display: flex;
  justify-content: space-between;
}
</style>