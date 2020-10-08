var _Footer = {
	data: {
		init: function() {},
	},
	methods: {},
	setups: {},
	initListener: function() {
        var share = $('div.share.foot');
		console.log(share);
		// fb
		share.find('a.fb').on('click', function(e) {
			e.preventDefault();

			var paramsTrack = '?site';
			var fb_url = is.mobile()
				? 'http://m.facebook.com/sharer.php?u='
				: 'http://www.facebook.com/sharer/sharer.php?u=';
			var final_url =
				fb_url + encodeURIComponent('https://www.dsaawards.com/2017/' + paramsTrack);

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

			fbshareWindow = window.open(
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
		});

		

		// line
		share.find('a.line').on('click', function(e) {
			e.preventDefault();
			var paramsTrack = '?';
			// var fb_url = is.mobile()
			// 	? 'http://m.facebook.com/sharer.php?u='
			// 	: 'http://www.facebook.com/sharer/sharer.php?u=';
			var final_url = 'https://social-plugins.line.me/lineit/share?url=https://www.dsaawards.com/2017/' + paramsTrack;

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

			shareWindow = window.open(
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
		});
	},
	init: function() {
		this.initListener();
	},
};

$(function() {
	_Footer.init();
});
