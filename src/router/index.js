import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Posts from '../views/Posts'
import SinglePost from '../views/SinglePost'

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/posts', name: 'Posts', component: Posts },
  { path: '/post/:userId/:postId', name: 'Single Post', component: SinglePost }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
