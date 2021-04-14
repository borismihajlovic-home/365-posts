<template>
	<div class="posts min-h-screen bg-yellow-450 pb-8">
		
		<Profile></Profile>
		<div class="max-w-750px bg-transparent mx-auto border-black border-l border-r">	
			<Header></Header>
			<PostUserHolder :isPostList="false" :post="post"></PostUserHolder>
			
			<!-- post user holder 
				<section class="flex justify-end px-3 items-center h-20">
					<div class="flex cursor-pointer items-center hover:underline" @click="$store.dispatch('openAuthorProfile', {postId:usersPost.id, authorId: usersPost.userId})">
						<span class="mr-3 font-black">{{ usersPost.userData.username }}</span> 
						<img class="rounded-full h-10" src="https://via.placeholder.com/150" alt="userImg" />
					</div>
				</section> -->

			<!-- post section  -->
			<section class="text-left p-5 border-black border-t">
				<h2 class="text-5xl font-black mb-3">{{ post.title }}</h2>
				<div class="mb-10">{{ post.body }}</div>
			</section>

			<!-- comments section  -->
			<section  class="bg-yellow-200 text-left border-b border-black">
				<div class="px-7 py-5 font-black text-blue-400 text-3xl border-t border-gray-400">Comments</div>
				
				<!-- comment -->
				<!-- <div v-for="comment in usersPost.comments" :key="comment.id" class="flex justify-between p-5 pb-10 border-t border-gray-400">
					<div class="image w-1/6"><img class="rounded-full h-8 w-8" src="https://via.placeholder.com/150" alt="userImg" /></div>
					<div class="px-2">
						<div class="text-blue-300 text-xs mb-2 font-black">Bret</div>
						<div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, atque ab velit, hic dolore reprehenderit cumque corporis voluptate maiores repudiandae optio eligendi iste aspernatur! Eveniet modi obcaecati magnam itaque aut.</div>
					</div>
				</div> -->
				
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
			post:{}
		}
	},
	methods:{
		setPost(postsArray){
			const clickedPost = postsArray.filter(item => item.id == this.$route.params.postId && item.userId == this.$route.params.userId);
			this.post = clickedPost[0];
		}
	},
	created(){
		this.setPost(this.$store.getters.getAllPosts);
	}
}
</script>

<style scoped>

</style>
