<template>
  <div class="my-element py-4 px-3">
    <div class="mr-3">
      <v-avatar tile size="85px">
        <img alt="Avatar" :src="require(`@/assets/img/${data.image}`)">
      </v-avatar>
    </div>
    <div>
      <div class="name-character mb-2">{{ data.name }}</div>
      <h5 class="mb-1">{{ data.job }}</h5>
      <div class="cost mb-1"><span>$</span> <span>{{ data.cost }}</span></div>
      <div class="bot-text">
        <span class="mr-1">
          <svg width="14px" height="13px" viewBox="0 0 32 32">
            <defs>
              <linearGradient id="grad">
                <stop :offset="(data.score * 100 / 5) + '%'" stop-color="#fc9a0f" />
                <stop stop-color="#fed8a2" />
              </linearGradient>
            </defs>
            <path fill="url(#grad)"
              d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118l11.547-1.2L16.026,0.6L20.388,10.918z" />
          </svg>
        </span>
        <span class="mr-1">{{ data.score }}</span> |
        <span class="mx-1">{{ data.reviews }}</span>
        <span>reviews</span>
      </div>
    </div>
    <div class="tag-active" :class="{'not-active' : !data.active}">
      <v-icon small color="#7c3eee">
        mdi-bookmark
      </v-icon>
      <v-icon v-if="!data.active" class="empty-bookmark">
        mdi-bookmark
      </v-icon>
    </div>
  </div>
</template>
<script>

export default {
  name: 'my-header',
  props:{
    data: Object
  },
  components: {},
  data: () => ({
    name: "Jane Cooper",
    cost: 21,
    job: "Laundry Services",
    score: 2.5,
    reviews: 3.82,
    active: true,
    image:"222222.png"
  }),
  computed: {},
  methods: {},
  mounted() { }
}
</script>

<style lang="scss" scoped>
.my-element {
  background: white;
  // height: 135px;
  border-radius: 14px;
  box-shadow: 0 0 5px #ededed;
  display: flex;
  position: relative;
}

.empty-bookmark {
  font-size: 10px !important;
  transform: translate(-13px, 0px);
  color: white;
}

.tag-active {
  position: absolute;
  right: 10px;
  top: 5px;
}
.not-active.tag-active{
  right: -5px;
}
.v-avatar {
  img {
    border-radius: 18px;
  }
}

.name-character {
  font-size: 10px;
}

.cost {
  color: #7c3eee;
  font-size: 13px;
  font-weight: bold;
}

.bot-text {
  font-size: 11px;
}
</style>