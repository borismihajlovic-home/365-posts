<template>
	<div class="posts min-h-screen bg-yellow-450 pb-8">
		<Profile></Profile>
		<div class="max-w-750px bg-transparent mx-auto border-black border-l border-r pt-20 sm:pt-24">
			<Header></Header>
			<Post></Post>	
		</div>
	</div>
</template>

<script>
import Header from '../components/Header'
import Post from '../components/Post'
import Profile from '../components/Profile'

export default {
	name: 'Posts',
	components: { Header, Post, Profile }
}
</script>
