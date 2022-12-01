<template>
  <div>

    <v-row class="back-calendar">
      <v-col>
        <h3>this is a calendar</h3>
        <v-calendar ref="calendar" :now="today" :value="today" :events="events" color="primary"
          type="week"></v-calendar>
      </v-col>
    </v-row>
    <div class="first-shcheduler">
      <Scheduler1 />
    </div>
  </div>
</template>
<script>
import Scheduler1 from "../../components/Calendar.vue"
export default {
  components:{
    Scheduler1
  },
  data: () => ({
    today: '2019-01-08',
    events: [
      {
        name: 'Weekly Meeting',
        start: '2019-01-07 09:00',
        end: '2019-01-07 10:00',
      },
      {
        name: `Thomas' Birthday`,
        start: '2019-01-10',
      },
      {
        name: 'Mash Potatoes',
        start: '2019-01-09 12:30',
        end: '2019-01-09 15:30',
      },
    ],
  }),
  mounted() {
    this.$refs.calendar.scrollToTime('08:00')
  },
}
</script>
<style scoped>
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
  left: 4px;
  margin-right: 8px;
  position: relative;
}

.my-event.with-time {
  position: absolute;
  right: 4px;
  margin-right: 0px;
}

.back-calendar {
  background: rgb(236, 236, 236);
}

.v-sheet,
.v-calendar {
  background: inherit !important;
}
</style>