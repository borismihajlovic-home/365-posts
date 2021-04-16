<template>
	<div class="posts min-h-screen bg-yellow-450 pb-8">
		
		<Profile></Profile>
		<div class="max-w-750px bg-transparent mx-auto border-black border-l border-r pt-16 sm:pt-24">	
			<Header></Header>
			<PostUserHolder :isPostList="false" :post="post"></PostUserHolder>

			<!-- post section  -->
			<section class="text-left p-5 border-black border-t">
				<h2 class="text-5xl font-black mb-3">{{ post.title }}</h2>
				<div class="mb-10">{{ post.body }}</div>
			</section>

			<!-- comments section  -->
			<section  class="bg-yellow-200 text-left border-b border-black">
				<div class="px-7 py-5 font-black text-blue-400 text-3xl border-t border-gray-400">Comments</div>
				
				<!-- comment -->
				<div v-for="comment in comments" :key="comment.id" class="flex justify-between p-5 pb-10 border-t border-gray-400">
					<div class="image w-20 sm:w-1/12"><img class="rounded-full h-8 w-8" src="https://via.placeholder.com/150" alt="userImg" /></div>
					<div class="px-2">
						<div class="text-blue-400 text-xs mb-2 font-black">{{ comment.username ? comment.username : comment.email }}</div>
						<div>{{ comment.body }}</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import Profile from '../components/Profile';
import Header from '../components/Header';
import PostUserHolder from '../components/PostUserHolder';

export default {
	name: 'Single Post Page',
	components: { Header, Profile, PostUserHolder },
	data(){
		return{
			post:{},
			comments: []
		}
	},
	methods:{
		setPost(postsArray){
			const clickedPost = postsArray.filter(item => item.id == this.$route.params.postId && item.userId == this.$route.params.userId);
			this.post = clickedPost[0];
		},
		fetchComments(){
			fetch(`https://jsonplaceholder.typicode.com/posts/${this.post.userId}/comments`).then(response=>{
				if(response.ok){
					return response.json();
				}
			}).then(responseData => {
				responseData.forEach(element => {
					const allAuthors = this.$store.getters.getAllAuthors;
					
					element.username = allAuthors.filter(item => item.email === element.email)[0];
					console.log(element);
					this.comments.push(element);
				});
			}).catch(er=>{
				console.log('ERROR getting comments: ',er);
			});
		}
	},
	created(){
		this.setPost(this.$store.getters.getAllPosts);
		this.fetchComments();
		console.log(this.$store.state.authors);
	}
}
</script>

