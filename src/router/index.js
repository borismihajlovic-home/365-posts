import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index'
import Login from '../views/Login.vue'
import Posts from '../views/Posts'
import SinglePost from '../views/SinglePost'

const beforeEnter = (to,from,next)=>{
	if(store.getters.isUserAuthenticated){
		next();
	}else{
		next('/');
	}	
};

const routes = [
	{ path: '/', name: 'Login', component: Login },
	{ path: '/posts', name: 'Posts', component: Posts, beforeEnter },
	{ path: '/post/:userId/:postId', name: 'Single Post', component: SinglePost, beforeEnter }
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router
