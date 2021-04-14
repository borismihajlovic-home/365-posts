<template>
	<router-view/>
</template>

<script>
export default {
	created(){
		this.$store.dispatch('getPosts');
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #000;
}
</style>
