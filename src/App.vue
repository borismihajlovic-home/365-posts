<template>
	<router-view/>
</template>

<script>
export default {
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

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #000;
}
</style>
