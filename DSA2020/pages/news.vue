<template>
    <div class="wrapper">
        <div class="head head_news">
            <div class="tittle">
                <span>最新消息</span>
                <span class="sub">NEWS</span>
            </div>
        </div>
        <main class="news">
            <!-- <div class="popup-news" style="display:none;">
        <div class="news-expand"><a class="btn-close" href="#"></a>
          <div class="news-date-expand">
            <div class="wrap-date">
              <div class="month">JUN</div>
              <div class="day">25</div>
            </div>
          </div><img src="~assets/img/news-img.png">
          <div class="wrap-news-content">
            <h4>趨勢觀察三 / 深化互動媒體再造新價值</h4>
            <p>就 2017 年全年台灣數位廣告市場，預估仍可保持 25% 以上的成長動能，除了市場上主要的大型跨國媒體類型，積極以新技術工具主導整體市場發展外，台灣這一兩年也出現很多本地新興的媒體平台，加上傳統五大媒體也積極推動轉型計畫，進行跨平台的經營策略，這些轉變也挹注了整體台灣數位廣告量能的增加，在 DMA 所進行的「2017年上半年數位廣告量調查」中，特別是影音內容投資的增加，讓本地新聞媒體在轉型的道路上看到些許曙光。<br>在過去媒體的廣告操作，多是透過代理商和媒體購買公司的廣告投放，隨著程序化購買日漸成熟，未來的媒體是不是也能發揮本身的社群影響力，串連網紅內容資產，變成開放的內容平台，甚至扮演往上游擴張，成為代理或行銷顧問的角色，會是本地媒體面對境外媒體經營壓力之下，可能的一種解法。特別是在網路看似內容龐雜巨量，但其實好內容稀缺的年代，媒體藉由專業內容生產，來連結社會資源與使用者的能力仍強，因此本地新媒體發展的關鍵能力，不在於內容，而是整個重新思考內容遞送方式與如何深化社群互動的問題。</p>
            <h6>讓技術引領內容</h6>
            <p>比如老字號《華盛頓郵報》或是中國新品牌《今日頭條》，一個轉型成功，一個新創有成，關鍵因素不在於內容製作，而是導入新的科技，透過跨平台串接、數據整合到社群互動，幫助媒體不論在內容遞送，或是廣告推播上，都做到了以前媒體不太能做到的事，因此對於轉型或發展中的數位媒體，需要更多的整合工具，加入技術的思考與資源，協助品牌客戶在符合屬性的傳播媒體管道上，搭配不同的素材組合推出合適的廣告類型。事實上，台灣本地已有網路原生媒體平台積極操作此種路線。</p>
            <h6>讓技術引領內容</h6>
            <p>比如老字號《華盛頓郵報》或是中國新品牌《今日頭條》，一個轉型成功，一個新創有成，關鍵因素不在於內容製作，而是導入新的科技，透過跨平台串接、數據整合到社群互動，幫助媒體不論在內容遞送，或是廣告推播上，都做到了以前媒體不太能做到的事，因此對於轉型或發展中的數位媒體，需要更多的整合工具，加入技術的思考與資源，協助品牌客戶在符合屬性的傳播媒體管道上，搭配不同的素材組合推出合適的廣告類型。事實上，台灣本地已有網路原生媒體平台積極操作此種路線。</p>
          </div>
        </div>
      </div> -->
            <transition name='nuxtchild' mode=''>
                <nuxt-child :key="$route.params.id" />
            </transition>
            <ul class="new-list">

                <li v-for="(value, key, index) in list" :key="index">

                    <div class="news-date">
                        <div class="wrap-date">
                            <div class="month">{{value.dateMonth}}</div>
                            <div class="day">{{value.dateDay}}</div>
                        </div>
                    </div>
                    <a class="wrap-news-pic" href="#" @click.prevent="handleDetail(value.n_key)">
                        <div class="news-pic">
                            <img :src="value.imgURL">
                        </div>
                    </a>
                    <div class="wrap-news-content">
                        <div class="news-content">
                            <div class="headline">{{ value.shortenTitle }}</div>
                            <p>{{ value.summary }}</p>
                        </div>
                        <a class="btn-news" href="#" @click.prevent="handleDetail(value.n_key)">
                            <span class="txt">more</span>
                            <span class="arrow"></span>
                        </a>
                    </div>

                </li>

            </ul>
        </main>
    </div>
</template>

<script>
import qs from 'qs';

export default {
	/**
	 * asyncData用於填充頁面組件的數據。當您返回一個對象時，它將在渲染前與數據輸出合併。
	 * fetch用於填充Vuex Store。如果你返回一個promise，Nuxt將等待，直到它在渲染前解決。
	 */

	async asyncData({ redirect, app, store, params }) {},

	async fetch({ store, params, app }) {
		// await app
		// 	.$axios({
		// 		method: 'POST',
		// 		data: qs.stringify({ act_mode: 'list' }),
		// 		url: '/getNews.ashx',
		// 	})
		// 	.then(response => {
		// 		// console.log(response.data.list);
		// 		store.commit('news/updateList', response.data.list);
		// 	})
		// 	.catch(err => {});
	},
	head() {
		return {
			title: '最新消息',
		};
	},
	layout: 'layoutIndex',
	data() {
		return {
			list: [],
		};
	},
	computed: {
		//	表單資料
		vuexNewsList() {
			return this.$store.getters['news/getterList'];
		},
	},
	methods: {
		handleDetail(id) {
			$nuxt._router.push({ name: 'news-detail', query: { id: id } });
			// $nuxt._router.push({ name: 'news-id', params: { id: id } });
		},
	},
	created() {
		// console.log(this.$store.state.news.list);
		this.$store.commit('news/updateVisited');
		this.$axios({
			method: 'POST',
			data: qs.stringify({ act_mode: 'list' }),
			url: '/getNews.ashx',
		})
			.then(response => {
				//this.$store.commit('news/updateList', response.data.list);
				this.list = response.data.list.map(function(item, index, array) {
					item.imgURL =
						(process.env.NODE_ENV !== 'production'
							? 'https://dsaaward.iprefer.com.tw/upload/News/'
							: 'https://www.dsaawards.com/upload/News/') + item.img_name;

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
					item.dateMonth =
						months[parseInt(item.created_at.split('/')[1] - 1, 10)];
					item.dateDay = item.created_at.split('/')[2];
					item.shortenTitle =
						item.title.substring(0, 25) + (item.title.length > 24 ? '…' : '');
					return item;
				});
				this.$store.commit('news/updateList', Object.assign({}, this.list));
			})
			.catch(err => {});
	},

	mounted() {
		console.log(document.referrer)
	},
	watch: {
		$route(to, from) {
            // document.querySelector('html').style.height = '100%';
            // document.querySelector('body').style.height = '100%';
		},
	},
	// scrollToTop: false,
};
</script>


<style scoped>

@import '~/assets/css/news.css';
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
,.page-leave-active 
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

@media screen and (min-width: 600px) {
	.news ul li {
		height: 330px;
		vertical-align: top;
	}
}
</style>

