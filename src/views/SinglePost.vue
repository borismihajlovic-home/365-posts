<template>
  <div class="single-post">
    <h1>Single post page</h1>
    <p>UserId: {{ $route.params.userId }}</p>
    <p>PostId: {{ $route.params.postId }}</p>
  </div>
</template>

<script>
export default {
  name: 'SinglePost'
}
</script>

<style scoped>

</style>
