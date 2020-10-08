<template>
	<footer>
		<div class="wrap">
			<div class="logo foot">
				<p>主辦單位</p>
				<div class="dma-logo">
					<img src="~assets/svg/logo_dma.svg" width="150px" alt="">
				</div>

			</div>
			<div class="info foot">
				<p>CONTACT</p>
				台灣數位媒體應用暨行銷協會
				<br class="mf">電話：02-7718-0056 聯絡信箱：
				<a href="mailto:office@dma.org.tw">office@dma.org.tw</a>
				<br> 地址：106 台北市大安區敦化南路2段2號4樓之1 (DMA)
				<br> 官網網站：
				<a href="http://www.dma.org.tw/" target="_blank">www.dma.org.tw</a> 
                <br>DSA粉絲專頁：
				<a href="https://www.facebook.com/dsaawards/" target="_blank">https://www.facebook.com/dsaawards/</a>
			</div>
			<div class="share foot">
				<p>SHARE</p>
				<a class="fb" href="" @click.prevent="shareFacebook">
					<span class="icon-fb"></span>
				</a>
				<a class="line" href="" @click.prevent="shareLine">
					<span class="icon-line"></span>
				</a>
			</div>
		</div>
	</footer>
</template>
<script>
export default {
	data() {
		return {
			shareURL: {
				Facebook: 'https://www.dsaawards.com/2020/',
				Line: 'https://www.dsaawards.com/2020/',
			},
		};
	},
	methods: {
		shareFacebook: function() {
			var paramsTrack = '?website';
			var fb_url = is.mobile()
				? 'http://m.facebook.com/sharer.php?u='
				: 'http://www.facebook.com/sharer/sharer.php?u=';
			var final_url =
				fb_url +
				encodeURIComponent(this.shareURL.Facebook + paramsTrack);

			var dualScreenLeft =
				window.screenLeft != undefined
					? window.screenLeft
					: screen.left;
			var dualScreenTop =
				window.screenTop != undefined ? window.screenTop : screen.top;

			var width = window.innerWidth
				? window.innerWidth
				: document.documentElement.clientWidth
					? document.documentElement.clientWidth
					: screen.width;
			var height = window.innerHeight
				? window.innerHeight
				: document.documentElement.clientHeight
					? document.documentElement.clientHeight
					: screen.height;

			var left = width / 2 - 400 / 2 + dualScreenLeft;
			var top = height / 2 - 400 / 2 + dualScreenTop;

			var fbshareWindow = window.open(
				final_url,
				'',
				'top=' +
					top +
					',left=' +
					left +
					',width=' +
					400 +
					',height=' +
					400
			);
		},
		shareLine: function() {
			var paramsTrack = '?website';
			// var fb_url = is.mobile()
			// 	? 'http://m.facebook.com/sharer.php?u='
			// 	: 'http://www.facebook.com/sharer/sharer.php?u=';
			var final_url =
				'https://social-plugins.line.me/lineit/share?url=' +
				this.shareURL.Line +
				paramsTrack;

			var dualScreenLeft =
				window.screenLeft != undefined
					? window.screenLeft
					: screen.left;
			var dualScreenTop =
				window.screenTop != undefined ? window.screenTop : screen.top;

			var width = window.innerWidth
				? window.innerWidth
				: document.documentElement.clientWidth
					? document.documentElement.clientWidth
					: screen.width;
			var height = window.innerHeight
				? window.innerHeight
				: document.documentElement.clientHeight
					? document.documentElement.clientHeight
					: screen.height;

			var left = width / 2 - 500 / 2 + dualScreenLeft;
			var top = height / 2 - 500 / 2 + dualScreenTop;

			var shareWindow = window.open(
				final_url,
				'',
				'top=' +
					top +
					',left=' +
					left +
					',width=' +
					500 +
					',height=' +
					500
			);
		},
	},
	created() {},

	mounted() {},
};
</script>

<style>
</style>

