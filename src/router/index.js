import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import EventDetails from '../views/EventDetails.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/', // url
    name: 'EventList', // name of the route
    component: EventList, // which "view" component to render
  },
  {
    // make EventCard clickable with a router-link
    path: '/event/:id', // :id is dynamic segment (ex :user, :userid)
    //path: '/event/123', // harcoaded one to access data w/id = 123.
    name: 'EventDetails',
    props: true, // send in route params as component props
    component: EventDetails,
  },
  {
    path: '/about',
    name: 'About',
    component: About, // which "view" component to render
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
