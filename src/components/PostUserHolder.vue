<template>
	<section class="flex justify-end leading-8">
		<div class="flex cursor-pointer hover:underline" @click="$store.dispatch('openAuthorProfile', {postId:post.id, authorId: post.userId})">
			<span class="mr-3 font-black">{{ post.userData.username }}</span> 
			<!-- <span class="mr-3 font-black">username</span>  -->
			<img class="rounded-full h-8" src="https://via.placeholder.com/150" alt="userImg" />
		</div>
	</section>
</template>
<script>
export default {
	name: 'Post',
	props:['post']
}
</script>