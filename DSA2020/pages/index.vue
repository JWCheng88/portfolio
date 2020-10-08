<template>
  <div class="wrapper">
        <!-- <div class="shadow"></div> -->
        <div class="content">
            <p><img src="~/assets/img/title.png" alt="">
				在這個充滿異想的數位世界，每一點都是創意力、科技力、行銷力的碰撞驚奇<br>發現智能奇點，開啟無限想像，共生共存，互助互利<br>向世界發聲，讓好事發生，我們正激盪出一個不思議的大未來
            </p>
            <a class="btn_index" href="award"  @click.prevent="handleGotoSingularity">
                <span class="txt">深入奇點</span>
                <span class="arrow"></span>
            </a>
        </div>

    </div>
</template>

<script>

export default {
	head() {
		return {
			title: '首頁',
			script: [
				/**
				 * *重要*
				 * 要載全域, 否則ROUTE切換回來時, 重新載createjs已經來不及,
				 * initCanvas() 會無作用, STO 延遲治標不治本.
				 * 於是直接全域引用
				 */

				// { src: './js/createjs-2015.11.26.min.js',  defer: true },
				// { src: './js/kv.js', defer: true },
				// { src: './js/initCanvas.js', defer: true },
				// { src: './js/particles.js', defer: true },
			],
		};
	},
	layout: 'layoutIndex',
	data() {
		return {};
	},
	methods: {
		handleGotoSingularity() {
			// this.util_LinkTo('/'+this.$i18n.locale+'/award');
			this.util_LinkTo('/award');
		},
		
	},
	created() {},

	mounted() {
		// this.$nextTick(() => {
		// 	// if (process.browser) {
		// 	// 	window.onNuxtReady(app => {
		// 	// 	});
		// 	// }
		// 	// window.onload = function() {};
		// 	// $(function() {});

		// 	const detectLibrary = window.setInterval(function() {
		// 		if (typeof initCanvas !== undefined) {
		// 			initCanvas();
		// 			window.clearInterval(detectLibrary);
		// 		}
		// 	}, 20);

		// 	// console.log(process.env.API_URL);
		// });
		
	},
};
</script>

<style scoped>
@import '~/assets/css/index.css';
.wrapper{
	background-image: url('~assets/img/bg_kv.jpg');
	background-repeat: no-repeat;
	background-size: cover;
}
@media screen and (max-width: 1024px) {
	.wrapper{
		background-image: url('~assets/img/bg_kv_m.jpg');
		background-repeat: no-repeat;
		background-size: cover;
	}
}
</style>

