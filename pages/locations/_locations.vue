<template>
	<div>
		<article>
			<h1>{{blogPost.title}}</h1>
			<div>{{blogPost.body}}</div>
		</article>
	</div>
</template>
<script>
export default {
	async asyncData({ params, payload }) {
		if (payload) return { blogPost: payload };
		else
			return {
				blogPost: await require(`~/assets/content/locations/${params.blog}.json`)
			};
	}
};
</script>