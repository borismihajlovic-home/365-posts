<template>
	<div class="login h-screen bg-yellow-450 flex justify-center items-center p-5">
		<section class="max-w-350px">
			<img src="../assets/logo.png" alt="logo" />
			
			<form class="p-5 pb-10" @submit.prevent="submitForm">
				<div class="text-l font-bold text-red-500">{{ error }}</div>

				<div class="flex justify-between mb-3">
					<label for="username" class="relative"><span class="w-1/4 absolute -bottom-2 text-black text-base">Username</span></label>
					<input @input="isDirtyInput" v-model="user.username" required class="w-3/4 bg-yellow-450 border-b-2 border-t-0 border-l-0 border-r-0 border-black text-lg text-black px-2 outline-none font-black" type="text" name="username" id="username" />
				</div>
				
				<div class="flex justify-between mb-3">
					<label for="password" class="relative "><span class="w-1/4 absolute -bottom-2 text-black text-base">Password</span></label>
					<input @input="isDirtyInput" v-model="user.password" required class="w-3/4 bg-yellow-450 border-b-2 border-t-0 border-l-0 border-r-0 border-black text-lg text-black px-2 outline-none font-black" type="password" name="passsword" id="password" />
				</div>
				
				<button :disabled="!isDirty" class="cursor-pointer focus:outline-none bg-white-1 text-lg text-black font-black mt-7 px-5 py-3 disabled:opacity-40 disabled:text-yellow-400">{{ buttonText }}</button>
			</form>
			
			<span @click="toggleLoginRegister" class="underline cursor-pointer text-black tracking-wide">{{ changeFormText}}</span>
		</section>
	</div>
</template>

<script>
export default {
	name: 'Login',
	data(){
		return{
			user:{
				username:'',
				password:''
			},
			isRegister: false,
			isDirty: false,
			error: ''
		}
	},
	computed:{
		buttonText(){
			if(this.isRegister){
				return 'subscribe'
			}
			return 'login';
		},
		changeFormText(){
			if(this.isRegister){
				return 'login'
			}
			return 'subscribe';
		}
	},
	methods:{
		submitForm(){
			this.error='';
			if(!this.usernameValidation()){
				this.error = 'Username must be more then 4 and less then 15 characters long';
				return;
			}
			if(!this.passwordValidation()){
				this.error = 'Password must be more then 4 and less then 20 characters long';
				return;
			}
			this.isRegister ? this.authenticate(this.user, 'register') : this.authenticate(this.user, 'login');
		},
		authenticate(userObj, authType){
			const response = this.$store.dispatch(authType, userObj);
			response
			.then(result=>{
				if(result.ok){
					this.$router.push('/posts');
				}else{
					throw result.message
				}
			})
			.catch(er=>{
				this.error = er;
			});
		},
		usernameValidation(){
			return this.user.username.length>4 && this.user.username.length<15;
		},
		passwordValidation(){
			return this.user.password.length>4 && this.user.password.length<20;
		},
		isDirtyInput(){
			console.log(this.user.username.trim.length)
			if(this.user.username.trim().length > 0 && this.user.password.trim().length > 0){ 
				this.isDirty=true;
			}else{
				this.isDirty=false;
			}
		},
		toggleLoginRegister(){
			this.isRegister = !this.isRegister;
			this.userName = '';
			this.password = '';
		}
	}
}
</script>

