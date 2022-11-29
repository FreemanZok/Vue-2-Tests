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
        <v-icon medium color="gray darken-2">
          mdi-magnify
        </v-icon>
      </div>
      <div class="d-flex">
        <div class="elements mr-2">
          <div v-for="el in elements" :key="el" class=" mb-2">
            <Element :data="el" />
          </div>
        </div>
        <div class="calendar-wrapper">
          <!-- <Calendar /> -->
          <!-- <Calendar2 /> -->
          <Calendar3 />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Element from "@/components/Element.vue"
// import Calendar from "@/components/Calendar.vue"
// import Calendar2 from "@/components/Calendar2.vue"
import Calendar3 from "@/components/Calendar3.vue"

export default {
  name: 'my-header',
  components: {
    Element,
    // Calendar,
    // Calendar2,
    Calendar3,
  },
  data: () => ({
    elements: [
      {
        name: "alizoka",
        cost: 21,
        job: "Laundry Woman Services",
        score: 2.5,
        reviews: 3.82,
        active: true,
        image: "555555.png",
      },
      {
        name: "alizoka",
        cost: 21,
        job: "Laundry Services",
        score: 2.5,
        reviews: 3.82,
        active: true,
        image: "222222.png",
      },
      {
        name: "Jane Cooper",
        cost: 21,
        job: "Laundry Services",
        score: 2.5,
        reviews: 3.82,
        active: true,
        image: "333333.png",
      },
      {
        name: "alizoka",
        cost: 21,
        job: "Laundry Woman Services",
        score: 2.5,
        reviews: 3.82,
        active: true,
        image: "Screenshot 2022-11-29 113943.png",
      },

    ]
  }),
  computed: {},
  methods: {},
  mounted() { }
}
</script>
<style scoped>
.tops {
  display: flex;
  justify-content: space-between;
}

.elements {
  width: calc(100% - 300px)
}

.calendar-wrapper {
  width: 300px;
  height: 360px;
  box-shadow: 0 0 5px #dedede;
  border-radius: 12px;
  overflow: hidden;
}
</style>