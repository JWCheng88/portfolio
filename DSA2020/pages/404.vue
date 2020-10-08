<template>
    <div class="wrapper">
        404
    </div>
</template>

<script>
export default {
	asyncData({ redirect }) {
		return redirect('/');
	},
	head() {
		return {
			title: '404',
		};
	},
	layout: 'layoutIndex',
	data() {
		return {};
	},
	methods: {},
	created() {
		
	},

	mounted() {},
};
</script>

<style scoped>
@import '~/assets/css/index.css';
</style>

