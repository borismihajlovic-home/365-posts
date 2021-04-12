<template>
	<div class="posts min-h-screen bg-yellow-450 pb-8">
		<div class="max-w-750px bg-transparent mx-auto border-black border-l border-r">
			<Header></Header>
			<Post></Post>
		</div>
	</div>
</template>

<script>
import Header from '../components/Header'
import Post from '../components/Post'

export default {
	name: 'Posts',
	components: { Header, Post },
	methods: {
		fetchPassResponse(response){
			if(response.ok){
				return response.json();
			}
		},
		getPosts(){
			fetch('https://jsonplaceholder.typicode.com/posts/')
			.then(this.fetchPassResponse)
			.then(responseData => {
				responseData.forEach(item => {
					this.getUser(item.userId).then(data=>{
						item.userData=data;
						this.$store.commit('addPostToArray', item);
					});	
				});
				this.isLoading=false;
			}).catch(er => {
				console.log(er);
			});
		},
		getUser(userId){
			return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
			.then(this.fetchPassResponse)
			.then(responseData => {
				this.$store.commit('addAuthorToArray', responseData);
				return responseData;
			}).catch(er => {
				console.log(er);
			});
		}
	},
	created(){
		this.getPosts();
	}
}
</script>
