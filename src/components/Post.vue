<template>

	<article class="py-5 px-10 text-left border-black border-b">
		<router-link :to="`/post/${post.id}`">
			<h2 class="post-title text-5xl font-black mb-3 hover:underline">{{ post.title }}</h2>
		</router-link>		
		<section class="post-body mb-10">{{ post.body }}</section>
		<footer class="flex justify-end leading-8">
			<div class="flex cursor-pointer hover:underline" @click="openProfile(post.userId)">
				<span class="mr-3 font-black">{{ post.userData.username }}</span> 
				<img class="rounded-full h-8" src="https://via.placeholder.com/150" alt="userImg" />
			</div>
		</footer>
	</article>
</template>

<script>
export default {
	name: 'Post',
	props: ['post'],
	methods:{
		openProfile(userId){
			console.log(userId);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.post-title::first-letter,
.post-body::first-letter{
	text-transform: capitalize;
}
</style>
