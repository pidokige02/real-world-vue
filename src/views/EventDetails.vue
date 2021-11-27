<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import EventService from '@/services/EventService.js'
export default {
  props: ['id'], // this prop is fed in to the api call getevent().
  data() {
    return {
      //id: 123, // it's not needed, if we don't use hardcoded one.
      event: null,
    }
  },
  created() {
    //fetch event (by id) and set local data
    EventService.getEvent(this.id)
      .then((response) => {
        this.event = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>
