<template>
	<div class="posts min-h-screen bg-yellow-450 pb-8">
		<Loader v-if="isLoading"></Loader>
		<div class="max-w-750px bg-transparent mx-auto border-black border-l border-r">
			<Header></Header>
			<Post v-for="post in posts" :key="post.id+post.userId" :post="post"></Post>
		</div>
	</div>
</template>

<script>
import Header from '../components/Header'
import Loader from '../components/Loader'
import Post from '../components/Post'

export default {
	name: 'Posts',
	// components: {Loader, Header},
	components: {Loader, Header, Post},
	data(){
		return{
			posts: [],
			isLoading: true,
			openedProfile: true
		}
	},
	methods: {
		getPosts(){
			fetch('https://jsonplaceholder.typicode.com/posts/').then(response => {
				if(response.ok){
					return response.json();
				}
			}).then(responseData => {
				responseData.forEach(item => {
					this.getUser(item.userId).then(data=>{
						item.userData=data;
						this.posts.push(item);
					});	
				});
				this.isLoading=false;
			}).catch(er => {
				console.log(er);
			});
		},
		getUser(userId){
			return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(response => {
				if(response.ok){
					return response.json();
				}
			}).then(responseData => {
				return responseData;
			}).catch(er => {
				console.log(er);
			});
		}
	},
	mounted(){
		this.getPosts();
	}
}
</script>
