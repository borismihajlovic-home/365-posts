<template>
	<header class="pt-4 fixed left-0 right-0 top-0 bg-yellow-450">
		<section class="flex justify-between border-black border-b h-12 px-4 sm:h-20">
			<img @click="goToPosts" class="w-auto cursor-pointer" src="../assets/logo.png" alt="logo" />
			<div @click="logout" class="text-white-1 uppercase flex items-center font-black text-2xl cursor-pointer hover:underline">Log out</div>
		</section>
	</header>
</template>

<script>
export default {
	name: 'Header',
	methods:{
		logout(){
			this.$store.dispatch('logout');
			this.$router.push('/');
		},
		goToPosts(){
			this.$router.push('/posts');
		}
	}
}
</script>

