<template>
	<div class="login h-screen bg-yellow-450 flex justify-center items-center">
		<section class="max-w-350px">
			<img src="../assets/logo.png" alt="logo" />
			<form class="p-5 pb-10" @submit.prevent="submitForm">
				<div class="flex justify-between mb-3">
					<label for="username" class="relative"><span class="absolute -bottom-2 text-black text-base">Username</span></label>
					<input @input="userValidation" v-model="userName" class="w-3/4 bg-yellow-450 border-b-2 border-t-0 border-l-0 border-r-0 border-black text-lg text-black px-2 outline-none font-black" type="text" name="username" id="username" />
				</div>
				<div class="flex justify-between mb-3">
					<label for="password" class="relative"><span class="absolute -bottom-2 text-black text-base">Password</span></label>
					<input @input="passwordValidation" :value="password" class="w-3/4 bg-yellow-450 border-b-2 border-t-0 border-l-0 border-r-0 border-black text-lg text-black px-2 outline-none font-black" type="password" name="passsword" id="password" />
				</div>
				<button v-if="!isRegister" :disabled="!isDirty" class="disabled:opacity-40 disabled:text-yellow-400 cursor-pointer focus:outline-none bg-white text-lg text-black font-black mt-7 px-5 py-3">sign in</button>
				<button v-if="isRegister" :disabled="!isDirty" class="disabled:opacity-40 disabled:text-yellow-400 cursor-pointer focus:outline-none bg-white text-lg text-black font-black mt-7 px-5 py-3">register</button>
			</form>
			<span v-if="!isRegister" @click="switchToRegister" class="underline cursor-pointer text-black tracking-wide">Register</span>
			<span v-if="isRegister" @click="switchToRegister" class="underline cursor-pointer text-black tracking-wide">Sign in</span>
		</section>
	</div>
</template>

<script>
export default {
	name: 'Login'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
