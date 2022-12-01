<template>
  <div class="home">
    <Body />
    
  </div>
</template>

<script>


import Body from "@/components/Body.vue"
import test from "./test.js"
export default {
  name: 'Home',
  components: {
    Body
  },
  data: () => ({
    test:test,
  }),
  mounted(){
    console.log(test)
  }
};

</script>
