<template>
	<div>{{blogPosts}}</div>
</template>

<script>
export default {
	computed: {
		blogPosts() {
			return this.$store.state.blogPosts;
		}
	}
};
</script>