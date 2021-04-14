<template>
	<article class="py-5 px-10 text-left border-black border-b" v-for="post in $store.getters.getAllPosts" :key="post.id+post.userId">
		<router-link :to="`/post/${post.userId}/${post.id}`">
			<h2 class="post-title text-5xl font-black mb-3 hover:underline">{{ post.title }}</h2>
		</router-link>		
		<section class="post-body mb-10">{{ post.body }}</section>
		<PostUserHolder :post="post"></PostUserHolder>
	</article>
</template>

<script>
import PostUserHolder from '../components/PostUserHolder';

export default {
	name: 'Post',
	components: { PostUserHolder }
}
</script>

<style scoped>
	.post-title::first-letter,
	.post-body::first-letter{
		text-transform: capitalize;
	}
</style>
