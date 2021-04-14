<template>
	<section class="flex justify-end leading-8" :class="{'px-3':!isPostList, 'items-center':!isPostList, 'h-20':!isPostList}">
		<div class="flex cursor-pointer hover:underline " :class="{'items-center': !isPostList}" @click="$store.dispatch('openAuthorProfile', {postId:post.id, authorId: post.userId})">
			<span class="mr-3 font-black">{{ post.userData.username }}</span> 
			<img class="rounded-full" :class="{'h-8': isPostList, 'h-10':!isPostList}" src="https://via.placeholder.com/150" alt="userImg" />
		</div>
	</section>
</template>
<script>
export default {
	name: 'Post',
	props:['post', 'isPostList']
}
</script>