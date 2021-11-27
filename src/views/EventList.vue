<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <!-- Parent feeds each EventCard its own event to display  -->
    <!-- :event="event" passes the event object that is currently iterating over -->
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

//import axios from 'axios'

export default {
  name: 'EventList',
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
    }
  },
  created() {
    //axios  // no longer required instead use EventService
    EventService.getEvents()
      // .get(
      //   // get data from mock database
      //   'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3/events'
      // )
      .then((response) => {
        this.events = response.data
        //console.log('events', response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
