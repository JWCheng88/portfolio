const resolve = require('path').resolve;

const config = {
	/*
	 ** Headers of the page
	 */
	head: {
		titleTemplate: '%s | 2020 DSA 數位奇點獎',
		meta: [{
				charset: 'utf-8',
			},
			{
				'http-equiv': 'x-ua-compatible',
				content: 'ie=edge',
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				name: 'description',
				content: '數位產業的創意指標！一起激盪創意力、科技力、行銷力的碰撞驚奇',
			},
			{
				property: 'og:title',
				content: '2020 DSA 數位奇點獎',
			},
			{
				property: 'og:description',
				content: '數位產業的創意指標！一起激盪創意力、科技力、行銷力的碰撞驚奇',
			},
			{
				property: 'og:type',
				content: 'website',
			},
			{
				property: 'og:url',
				content: 'https://www.dsaawards.com/2020/',
			},
			{
				property: 'og:image',
				content: 'https://www.dsaawards.com/2020/share2020.jpg',
			},
			// {
			// 	property: 'og:image',
			// 	content: 'https://www.dsaawards.com/2019/2019_dsa_award_share.jpg',
			// },
		],
		script: [{
				src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js',
			},
			{
				src: 'https://cdnjs.cloudflare.com/ajax/libs/is_js/0.9.0/is.min.js',
			},
			/**
			 * google recaptcha
			 * 搭配：grecaptcha.render('recaptcha-main');
			 * 避免 route 渲染時出錯
			 */

			{
				// src: 'https://www.google.com/recaptcha/api.js?render=explicit',
				src: 'https://recaptcha.net/recaptcha/api.js?render=explicit',
			},
			{
				src: 'https://code.createjs.com/createjs-2015.11.26.min.js',
				/**
				 * 不要 defer, 否則會比頁面的 js 晚載入
				 */
				// defer: true
			},
			// {
			// 	src: '/2019/js/kv.js',
			// 	defer: true
			// },
			// {
			// 	src: '/2019/js/initCanvas.js',
			// 	defer: true
			// },
			// { 
			// 	src: '/2019/js/particles.js', 
			// 	defer: true 
			// },
		],
		link: [{
				rel: 'icon',
				type: 'image/x-icon',
				href: './favicon.ico',
			},
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900,900i',
			},
			// {
			// 	rel: 'stylesheet',
			// 	href:
			// 		'@/assets/css/style.css',
			// },
		],
	},
	css: [
		'~assets/css/style.css',
		'~assets/css/tech/custom.css',
		//  { src: 'sweetalert2/dist/sweetalert2.min.css', lang: 'css' }
	],
	/*
	 ** Customize the progress bar color
	 */
	// loading: { color: '#3B8070' },
	//關閉上方讀取條
	loading: false,
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** Run ESLint on save
		 */
		vendor: ['axios', 'qs'],
		babel: {
			presets: ['es2015', 'stage-0'],
			plugins: ['transform-runtime'],
		},
		extend(config, {
			isDev,
			isClient
		}) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/,
				});
			}
			if (!isDev) {
				// relative links, please.
				//	config.output.publicPath = './_nuxt/';
			}
			return config;
		},
	},

	router: {
		// 改變基準路徑
		base: '/2020/',
		// 增加 404
		extendRoutes(routes) {
			routes.push({
				path: '*',
				component: resolve(__dirname, 'pages/404.vue'),
			});
		},
		// 所有頁面渲染後滾動至頂部
		scrollBehavior: function (to, from, savedPosition) {
			
			// savedPosition is only available for popstate navigations (back button)
			if (savedPosition) {
				return savedPosition
			}
			// if (to.matched.some((r) => r.components.default.options.scrollToTop)) {

			// 	return {}
			// }
			return {
				x: 0,
				y: 0,
			};
		},

		linkActiveClass: 'navibar_focus',

		middleware: 'i18n',
	},
	// 增加 utils.js
	plugins: [
		'~/plugins/util.js',
		{
			src: '~/plugins/axios',
			// 因為 fetch 和 asyncData 要用 axios module
			ssr: true,
		},
		{
			src: '~/plugins/sweetalert2',
			ssr: false,
		},
		'~/plugins/i18n.js',
	],
	// 增加環境變數
	env: {
		API_URL: 'http://localhost:3000/api',
	},
	modules: [
		'@nuxtjs/axios', // With options
		'@nuxtjs/proxy',
    ],
    
	/**
	 * @nuxtjs/axios 設定預設
	 */
	axios: {
		prefix: '/api',//'https://dsaaward.iprefer.com.tw/api'
		proxy: true,
	},
	proxy: {
		'/api': {
			target:
				// process.env.NODE_ENV 'production','development'
				process.env.NODE_ENV !== 'production' ?
				'https://dsa.bigc.tw' : 'https://www.dsaawards.com',
				// 'https://dsaaward.iprefer.com.tw' : 'https://www.dsaawards.com',
			// 路徑複寫
            // pathRewrite: { '^/api': '/api' },
            "secure": false,
            // "changeOrigin": true,
            // "logLevel": "info"
		},
	},
	generate: {
		dir: '2020',
		routes: [
			'/tw/login',
			'/tw/register',
			'/tw/u/list',
			'/tw/u/account',
			'/tw/u/changePassword',
			'/tw/u/worksAdd',
			'/tw/u/worksDetail',
			'/cn/login',
			'/cn/register',
			'/cn/u/list',
			'/cn/u/account',
			'/cn/u/changePassword',
			'/cn/u/worksAdd',
			'/cn/u/worksDetail',
			'/gold/0',
			'/gold/1',
			'/gold/2',
			'/gold/3',
			'/gold/4',
			'/gold/5',
			'/gold/6',
			'/gold/7',
			'/gold/8',
			'/gold/9',
			'/gold/10',
			'/gold/11',
			'/gold/12',
			'/gold/13',
			'/gold/14',
			'/gold/15',
			'/gold/16',
			'/gold/17',
			'/gold/18',
			'/gold/19',
			'/gold/20',
			'/gold/21',
			'/gold/22',
			'/gold/23',
			'/gold/24',
			'/gold/25',
			'/gold/26',
			'/gold/27',
			'/gold/28',
			'/gold/29',
			'/gold/30',
			'/gold/31',
			'/gold/32',
			'/gold/33',
			'/gold/34',
			'/gold/35',
			'/gold/36',
			'/gold/37',
			'/gold/38',
			'/gold/39',
			'/gold/40',
    ]
		
	},
};

module.exports = config;
