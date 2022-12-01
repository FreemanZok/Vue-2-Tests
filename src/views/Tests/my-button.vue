<template>
    <MyButton :text="'Hello'"/>
</template>
<script>
import MyButton from '../../components/MyButton.vue';
export default {
  name: 'my-header',
  components: {
    MyButton,
  },
  data: () => ({
  }),
  computed: {},
  methods: {},
  mounted() { }
}
</script>