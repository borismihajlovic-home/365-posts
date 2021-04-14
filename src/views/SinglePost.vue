<template>
	<div class="posts min-h-screen bg-yellow-450 pb-8">
		<Profile></Profile>
		<div class="max-w-750px bg-transparent mx-auto border-black border-l border-r">
			
			<Header></Header>
			<!-- <header class="pt-4">
				<section class="flex justify-between border-black border-b h-20 px-4">
					<img class="w-auto" src="../assets/logo.png" alt="logo" />
					<div class="text-white-1 uppercase flex items-center font-black text-2xl cursor-pointer hover:underline">Log out</div>
				</section>
			</header> -->
			<section class="flex justify-end px-3 items-center h-20">
					<div class="flex cursor-pointer items-center hover:underline" @click="$store.dispatch('openAuthorProfile', {postId:usersPost.id, authorId: usersPost.userId})">
						<span class="mr-3 font-black">{{ usersPost.userData.username }}</span> 
						<!-- <span class="mr-3 font-black text-xl">username</span>  -->
						<img class="rounded-full h-10" src="https://via.placeholder.com/150" alt="userImg" />
					</div>
				</section>

			<!-- post section  -->
			<section class="text-left p-5 border-black border-t">
				<h2 class="text-5xl font-black mb-3">{{ usersPost.title }}</h2>
				<div class="mb-10">{{ usersPost.body }}</div>
			</section>

			<!-- comments section  -->
			<section  class="bg-yellow-200 text-left border-b border-black">
				<div class="px-7 py-5 font-black text-blue-400 text-3xl border-t border-gray-400">Comments</div>
				
				<!-- comment -->
				<div v-for="comment in usersPost.comments" :key="comment.id" class="flex justify-between p-5 pb-10 border-t border-gray-400">
					<div class="image w-1/6"><img class="rounded-full h-8 w-8" src="https://via.placeholder.com/150" alt="userImg" /></div>
					<div class="px-2">
						<div class="text-blue-300 text-xs mb-2 font-black">Bret</div>
						<div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, atque ab velit, hic dolore reprehenderit cumque corporis voluptate maiores repudiandae optio eligendi iste aspernatur! Eveniet modi obcaecati magnam itaque aut.</div>
					</div>
				</div>
				
			</section>
			<div>{{ usersPost }}</div>
		</div>
	</div>
</template>

<script>
import Profile from '../components/Profile';
import Header from '../components/Header';

export default {
	name: 'Single Post Page',
	components: { Header, Profile },
	computed:{
		usersPost(){
			return this.$store.getters.getSinglePostData
		},
		username(){
			return 'aaaa';
		}
	},
	created(){
		const authorId = this.$route.params.userId;
		const postId = this.$route.params.postId;
		this.$store.dispatch('setSignlePostData', {postId, authorId});
		console.log(this.$store.getters.getSinglePostData)
		// this.usersPost = this.$store.getters.getSinglePostData;
	}
}
</script>

<style scoped>

</style>
