<template>
    <div class="popup-news" style="">
        <div class="news-expand">
            <a class="btn-close" href="#" @click.prevent="handleClose"></a>
            <div class="news-date-expand">
                <div class="wrap-date">
                    <div class="month">{{detail.dateMonth}}</div>
                    <div class="day">{{detail.dateDay}}</div>
                </div>
            </div><img :src="detail.imgURL">
            <div class="wrap-news-content">
                <h4>{{detail.title}}</h4>

                <div class="newscontent" v-html="detail.content" />

            </div>
        </div>
    </div>
</template> 
 
<script>
import qs from 'qs';
import { mapGetters } from 'vuex';
import $ from 'jquery'; 


export default {
	/**
	 * asyncData用於填充頁面組件的數據。當您返回一個對象時，它將在渲染前與數據輸出合併。
	 * fetch用於填充Vuex Store。如果你返回一個promise，Nuxt將等待，直到它在渲染前解決。
	 */

	asyncData({ redirect, app, store, params, query }) {},

	async fetch({ store, params, query, app }) {
		// await app
		// 	.$axios({
		// 		method: 'POST',
		// 		data: qs.stringify({ act_mode: 'detail', key: query.id }),
		// 		url: '/getNews.ashx',
		// 	})
		// 	.then(response => {
		// 		store.commit('news/updateDetail', response.data.detail);
		// 	})
		// 	.catch(err => {});
	},
	head() {
		return {
			title: '最新消息',
		};
	},
	// layout: 'layoutIndex',
	data() {
		return {
			detail: {
				content: '',
				created_at: '',
				dateDay: '',
				dateMonth: '',
				imgURL: '',
				img_name: '',
				n_key: '',
				shortenTitle: '',
				title: '',
			},
		};
	},
	computed: {
		// 表單資料
		// vuexNewsDetail() {
		// 	//console.log(this.$store.getters['news/getterDetail']);
		// 	return this.$store.getters['news/getterDetail'];
		// },
	},
	methods: {
		handleClose() {
			// console.log(this.$store.state.news.visited);
			// this.$store.state.news.visited
			// 	? $nuxt._router.back()
			// 	: $nuxt._router.push('/news');
			$nuxt._router.push('/news')
		},
	},
	created() {
			
	},
	beforeMount() {
		let queryID = this.$route.query.id;
		const $this = this;
		$.ajax({
			method: 'POST',
			url: '/api/getNews.ashx',
			data: qs.stringify({ act_mode: 'detail', key: queryID }),
			success: response => {
				// console.log('detail',typeof response);
				// console.log(response);
				

				const data = JSON.parse(response)
				// $this.detail.content = data.detail.content;

				let detail = Object.assign({}, data.detail);
				let imgURL =
					(process.env.NODE_ENV !== 'production'
						? 'https://dsaaward.iprefer.com.tw/upload/News/'
						: 'https://www.dsaawards.com/upload/News/') + detail.img_name;
				var months = [
					'JAN',
					'FEB',
					'MAR',
					'APR',
					'MAY',
					'JUN',
					'JUL',
					'AUG',
					'SEP',
					'OCT',
					'NOV',
					'DEC',
				];

				let dateMonth =
					months[parseInt(detail.created_at.split('/')[1] - 1, 10)];
				let dateDay = detail.created_at.split('/')[2];
				let shortenTitle =
					detail.title.substring(0, 25) + (detail.title.length > 24 ? '…' : '');

				this.detail = Object.assign(detail, {
					imgURL,
					dateMonth,
					dateDay,
					shortenTitle,
				})

			},
			error: payload => {
				console.log(payload);

			}
		})
		
	},

	mounted() {
		
		// let queryID = this.util_getParameterByName('id');
		if (this.$route.name === 'news-detail') {
			// document.querySelector('body').style.height = '100vh';
            // document.querySelector('html').style.height = '100vh';
            // $('html, body').animate({ scrollTop: 0 }, '400');
		}
		//  console.log(this.$store.state.news.detail);
		// this.$store.commit('news/updateVisited');
		console.log(document.referrer)
	},
};
</script> 
 
<style scoped>
@import '~/assets/css/news.css';
/* html {
	overflow: hidden;
} */
main {
	height: 100vh;
}

.news {
	margin: 0;
}

/* .news-expand{
	margin-top: 40px;
} */

.newscontent {
	font-size: 16px;
	font-weight: 300;
	line-height: 2;
}
/* transition */
/* .nuxtchild-enter-active,
.nuxtchild-leave-active {
	transition: opacity .8s;
}

.nuxtchild-enter,
.nuxtchild-leave-to {
	opacity: 0;
} */

.page-enter-active
/* ,.page-leave-active  */
 {
	transition: opacity 0.4s;
}

.popup-news-index.page-leave-active {
	transition: opacity 0s;
}

.page-enter,
.page-leave-to {
	opacity: 0;
}
</style> 