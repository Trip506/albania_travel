<template>
	<div>
		<!-- {{blogPosts}} -->
		IMAGE
		<v-container grid-list-xs>
			<v-layout row wrap>
				<v-card class="my-5" v-for="(item, index) in blogPosts" :key="index">
					<v-card-title primary-title>{{item.title}}</v-card-title>
					<v-card-media contain height="auto" src="src">
						<v-img :src="item.image" alt />
					</v-card-media>
					<v-card-text>{{item.body}}</v-card-text>
					<v-card-actions>
						<nuxt-link :to="'/blog/' + item.slug">
							<v-btn success>read more</v-btn>
						</nuxt-link>
					</v-card-actions>
				</v-card>
			</v-layout>
		</v-container>
	</div>
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