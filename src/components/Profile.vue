<template>
	<section v-if="$store.getters.isAuthorProfileSet" class="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-white-09 overflow-auto">
		<div class="w-full max-w-750px bg-yellow-200 border-black border max-h-screen overflow-auto">
			<div class="flex bg-yellow-450 border-black border-b justify-end p-2">
				<img class="h-7 mr-3" src="../assets/logo_black.png" alt="logo" />
				<div class="w-7 h-7 text-white-1 font-black text-4xl leading-4 cursor-pointer" @click="$store.commit('resetAuthorId')">x</div>
			</div>
			<div class=" bg-yellow-450 border-b border-black py-5 pl-16 flex justify-start">
				<img class="rounded-full h-10 mr-3" src="https://via.placeholder.com/150" alt="userImg" />
				<div class="flex items-center font-black text-3xl">{{ author.userData.username }}</div>
			</div>
			<div class="flex justify-start pl-16 py-6 border-b border-gray-300">
				<div class="uppercase w-1/6 text-left pr-2 leading-6 pt-0.5">Name</div>
				<div class="font-black pl-2 text-xl leading-6">{{ author.userData.name }}</div>
			</div>
			<div class="flex justify-start pl-16 py-6 border-b border-black">
				<div class="uppercase text-right pr-2 leading-6 pt-0.5">Address</div>
				<div class="font-black pl-2 text-xl leading-6 text-left">
					<div>{{ author.userData.address.street }}</div>
					<div>{{ author.userData.address.suite }}</div>
					<div>{{ author.userData.address.city }}</div>
					<div>{{ author.userData.address.zipcode }}</div>
				</div>
			</div>
			<div class="flex justify-start pl-16 py-6 border-b border-black">
				<div class="uppercase text-right pr-2 leading-6 pt-0.5">Company</div>
				<div class="font-black pl-2 text-xl leading-6">{{ author.userData.company.name }}</div>
			</div>
			<div class="flex justify-start px-8 py-5 border-b border-gray-300">
				<div class="font-black pl-2 text-xl leading-6 text-left">{{ author.userData.company.bs }}</div>
			</div>
			<div class="flex justify-start px-8 py-5 border-b border-black">
				<div class="font-black pl-2 text-xl leading-6 text-left">{{ author.title }}</div>
			</div>
			<div class="flex justify-start px-8 py-5">
				<div class="font-black pl-2 text-xl leading-6 text-left">{{ author.userData.company.catchPhrase }}</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Post',
	data(){
		return{
			// author: this.$store.getters.getAuthorProfile
		}
	},
	computed:{
		author(){
			return this.$store.getters.getAuthorProfile;
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
