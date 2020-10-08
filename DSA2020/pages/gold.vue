<template>
    <div class="wrapper">
        <div class="head head_news">
            <div class="tittle">
                <span>歷年得獎作品</span>
                <span class="sub">GOLD AWARD</span>
            </div>
        </div>
        <main class="news">
			
			<div class="award-submenu">
                <div class="award-submenu2">
                    <a class="btn-award-sub" href="javascript:;" @click.prevent="goldShow">
                        <span class="txt">金獎作品</span>
                        <span class="arrow"></span>
                    </a>
                    <a class="btn-award-sub" href="awardList" @click.prevent="util_LinkTo('/awardList')">
                        <span class="txt">得獎名單</span>
                        <span class="arrow"></span>
                    </a>
                </div>
            </div>

			<transition name='nuxtchild' mode=''>
				<nuxt-child :key="$route.params.id" />
			</transition>
						<h5>2019 金獎作品</h5>
			<ul class="new-list">
				<li v-for="(value, key, index) in list.y2019" :key="index">
					<a class="wrap-news-pic" href="#" @click.prevent="handleDetail(value.id)">
						<div class="news-pic">
							<img :src="value.imgURL">
						</div>
					</a>
					<div class="wrap-news-content">
						<div class="news-content">
							<div class="headline" v-html="value.shortenTitle"></div>
							<p v-html="value.summary"></p>
						</div>
						<a class="btn-news" href="#" @click.prevent="handleDetail(value.id)">
							<span class="txt">more</span>
							<span class="arrow"></span>
						</a>
					</div>
				</li>
			</ul>						
						<h5>2018 金獎作品</h5>
			<ul class="new-list">
				<li v-for="(value, key, index) in list.y2018" :key="index">
					<a class="wrap-news-pic" href="#" @click.prevent="handleDetail(value.id)">
						<div class="news-pic">
							<img :src="value.imgURL">
						</div>
					</a>
					<div class="wrap-news-content">
						<div class="news-content">
							<div class="headline" v-html="value.shortenTitle"></div>
							<p v-html="value.summary"></p>
						</div>
						<a class="btn-news" href="#" @click.prevent="handleDetail(value.id)">
							<span class="txt">more</span>
							<span class="arrow"></span>
						</a>
					</div>
				</li>
			</ul>						
						<h5>2017 金獎作品</h5>
						<ul class="new-list">
				<li v-for="(value, key, index) in list.y2017" :key="index">
					<a class="wrap-news-pic" href="#" @click.prevent="handleDetail(value.id)">
						<div class="news-pic">
							<img class="gold17" :src="value.imgURL">
						</div>
					</a>
					<div class="wrap-news-content">
						<div class="news-content">
							<div class="headline" v-html="value.shortenTitle"></div>
							<p v-html="value.summary"></p>
						</div>
						<a class="btn-news" href="#" @click.prevent="handleDetail(value.id)">
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

import Vue from 'vue';
import VueYoutube from 'vue-youtube';

Vue.use(VueYoutube)

export default {
	/**
	 * asyncData用於填充頁面組件的數據。當您返回一個對象時，它將在渲染前與數據輸出合併。
	 * fetch用於填充Vuex Store。如果你返回一個promise，Nuxt將等待，直到它在渲染前解決。
	 */

	async asyncData({ redirect, app, store, params }) {},

	async fetch({ store, params, app }) {

	},
	head() {
		return {
			title: '歷年得獎作品',
		};
	},
	layout: 'layoutIndex',
	data() {
		return {
			list: {
				y2019: [
					{
						id: '21',
						imgURL: require('@/assets/img/gold/gold2019_cover_01.png'),
						shortenTitle: 'ShoplusAI社群商務賣家助理/<br>iKala',
						summary: '數位技術類別大獎<br>最佳AI應用獎'
					},
					{
						id: '22',
						imgURL: require('@/assets/img/gold/gold2019_cover_02.png'),
						shortenTitle: '實境LIVE賞屋 / 永慶房產集團',
						summary: '最佳體驗技術運用獎<br>最佳科技創新獎'
					},
					{
						id: '23',
						imgURL: require('@/assets/img/gold/gold2019_cover_03.png'),
						shortenTitle: '台北健森房—活水飛輪 /<br>米蘭營銷策劃股份有限公司',
						summary: '品牌體驗與促動行銷類大獎<br>最佳互動體驗裝置與技術應用獎<br>最佳遊戲/置入娛樂獎<br>最佳APP及行動網路行銷獎<br>最佳遊戲及遊戲置入行銷獎<br>最佳跨媒體整合行銷獎'
					},
					{
						id: '24',
						imgURL: require('@/assets/img/gold/gold2019_cover_04.png'),
						shortenTitle: 'iDrip智能手沖咖啡機 /<br>艾聚普股份有限公司',
						summary: '創新類大獎<br>最佳IoT應用獎<br>最佳產品創新獎'
					},
					{
						id: '25',
						imgURL: require('@/assets/img/gold/gold2019_cover_05.png'),
						shortenTitle: '多元身分驗證方式之手機門號驗證 / 新光人壽保險股份有限公司 ',
						summary: '最佳科技創新獎'
					},
					{
						id: '26',
						imgURL: require('@/assets/img/gold/gold2019_cover_06.png'),
						shortenTitle: '美賣AI媒合KOL電商平台 /<br>威士康股份有限公司',
						summary: '最佳商業轉型創新獎'
					},
					{
						id: '27',
						imgURL: require('@/assets/img/gold/gold2019_cover_07.png'),
						shortenTitle: '人生的真相 /<br>只要有人社群顧問有限公司',
						summary: '社群與影響者行銷類大獎<br>最佳社群經營行銷獎'
					},
					{
						id: '28',
						imgURL: require('@/assets/img/gold/gold2019_cover_08.png'),
						shortenTitle: '舒潔好聲音 / 偉門智威',
						summary: '最佳社群內容行銷獎'
					},
					{
						id: '29',
						imgURL: require('@/assets/img/gold/gold2019_cover_09.png'),
						shortenTitle: '夢幻新車上市計畫 /<br>台灣麥肯傳播集團',
						summary: '最佳社群內容行銷獎'
					},
					{
						id: '30',
						imgURL: require('@/assets/img/gold/gold2019_cover_10.png'),
						shortenTitle: '我的不意外家庭 / 台灣奧美',
						summary: '娛樂行銷類大獎<br>最佳內容娛樂獎<br>最佳影片創意獎'
					},
					{
						id: '31',
						imgURL: require('@/assets/img/gold/gold2019_cover_11.png'),
						shortenTitle: '血月搖滾 / 偉門智威',
						summary: '最佳音樂娛樂獎'
					},
					{
						id: '32',
						imgURL: require('@/assets/img/gold/gold2019_cover_12.png'),
						shortenTitle: '全聯新聞台：新竹男友 /<br>台灣奧美',
						summary: '最佳數據洞察創新獎'
					},
					{
						id: '33',
						imgURL: require('@/assets/img/gold/gold2019_cover_13.png'),
						shortenTitle: '你知道怎麼找出真正的消費者是誰嗎 / 安布思沛行銷股份有限公司',
						summary: '最佳數據洞察創新獎'
					},
					{
						id: '34',
						imgURL: require('@/assets/img/gold/gold2019_cover_14.png'),
						shortenTitle: 'EagleEye CDP /<br>紅門互動股份有限公司',
						summary: '數據創新類大獎<br>最佳數據科技創新獎'
					},
					{
						id: '35',
						imgURL: require('@/assets/img/gold/gold2019_cover_15.png'),
						shortenTitle: '捐血地標 / 偉門智威',
						summary: '行動行銷類大獎<br>最佳適地性促動行銷獎<br>最佳行動廣告行銷獎'
					},
					{
						id: '36',
						imgURL: require('@/assets/img/gold/gold2019_cover_16.png'),
						shortenTitle: '弘道「寒冬助老，刻不容緩」募款計畫 / 創異促動',
						summary: '電子商務行銷類大獎<br>最佳O2O行銷獎'
					},
					{
						id: '37',
						imgURL: require('@/assets/img/gold/gold2019_cover_17.png'),
						shortenTitle: '用 LINE 打造行銷新渠道 /<br>漸強實驗室 ',
						summary: '最佳顧客旅程及介面設計獎'
					},
					{
						id: '38',
						imgURL: require('@/assets/img/gold/gold2019_cover_18.png'),
						shortenTitle: '不吃不喝 / 台灣奧美',
						summary: '最佳社群影片創意獎'
					},
					{
						id: '39',
						imgURL: require('@/assets/img/gold/gold2019_cover_19.png'),
						shortenTitle: '不意外騎士 情路三行詩 /<br>台灣奧美',
						summary: '最佳活動網站行銷獎'
					},
					{
						id: '40',
						imgURL: require('@/assets/img/gold/gold2019_cover_20.png'),
						shortenTitle: '佳議員事件簿 / 台灣電通',
						summary: '最佳數位平台整合行銷獎'
					}
				],
				y2018: [
					{
						id: '0',
						imgURL: require('@/assets/img/gold/gold2018_cover_01.png'),
						shortenTitle: '虎妮 / Oath 台灣 ',
						summary: '最佳AR/VR應用獎'
					},
					{
						id: '1',
						imgURL: require('@/assets/img/gold/gold2018_cover_02.png'),
						shortenTitle: '會叫雞的冰箱 / 小米公司',
						summary: '最佳loT 應用獎'
					},
					{
						id: '2',
						imgURL: require('@/assets/img/gold/gold2018_cover_03.png'),
						shortenTitle: '實境找房 / 永慶房產集團',
						summary: '最佳網站技術應用獎'
					},
					{
						id: '3',
						imgURL: require('@/assets/img/gold/gold2018_cover_04.png'),
						shortenTitle: '客人您想買甚麼 / <br>安布思沛台灣',
						summary: '最佳數據應用獎<br>年度創新技術獎'
					},
					{
						id: '4',
						imgURL: require('@/assets/img/gold/gold2018_cover_05.png'),
						shortenTitle: 'NIKE試穿體驗空間 / <br>演鏡互動',
						summary: '最佳互動裝置應用獎<br>最佳數位服務體驗應用獎'
					},
					{
						id: '5',
						imgURL: require('@/assets/img/gold/gold2018_cover_06.png'),
						shortenTitle: 'HBL吉祥物扭蛋 / 演鏡互動',
						summary: '最佳數位服務體驗應用獎<br>最佳數位平台整合行銷獎<br>最佳行動行銷獎'
					},
					{
						id: '6',
						imgURL: require('@/assets/img/gold/gold2018_cover_07.png'),
						shortenTitle: '節氣時光 / 不來梅',
						summary: '最佳企業網站及APP創意獎'
					},
					{
						id: '7',
						imgURL: require('@/assets/img/gold/gold2018_cover_08.png'),
						shortenTitle: '第三個願望 / <br>台灣麥肯傳播集團',
						summary: '最佳影片創意獎'
					},
					{
						id: '8',
						imgURL: require('@/assets/img/gold/gold2018_cover_09.png'),
						shortenTitle: '鼻不通 行不通 / 安索帕台灣',
						summary: '最佳展示廣告創意獎'
					},
					{
						id: '9',
						imgURL: require('@/assets/img/gold/gold2018_cover_10.png'),
						shortenTitle: '101許願牆 / 安索帕台灣',
						summary: '最佳社群行銷獎<br>最佳策展行銷獎'
					},
					{
						id: '10',
						imgURL: require('@/assets/img/gold/gold2018_cover_11.png'),
						shortenTitle: '被消失的文章 / <br>米蘭營銷策劃',
						summary: '最佳內容行銷獎'
					},
					{
						id: '11',
						imgURL: require('@/assets/img/gold/gold2018_cover_12.png'),
						shortenTitle: '台灣之星 黑點行動 / <br>新極現廣告',
						summary: '最佳跨媒體整合行銷獎<br>全場大獎'
					},
					{
						id: '12',
						imgURL: require('@/assets/img/gold/gold2018_cover_13.png'),
						shortenTitle: '實踐顧客旅程地圖 / <br>adHub經緯廣告科技',
						summary: '最佳程序化行銷獎'
					},
				],
				y2017: [
					{
						id: '13',
						imgURL: require('@/assets/img/gold/gold2017_cover_01.png'),
						shortenTitle: '燒符傳好運 Live Photo / <br>我是大衛廣告',
						summary: '最佳社群文案創意獎'
					},
					{
						id: '14',
						imgURL: require('@/assets/img/gold/gold2017_cover_02.png'),
						shortenTitle: '一念 / 台灣電通',
						summary: '最佳長影片創意獎<br>最佳跨媒體整合行銷獎'
					},
					{
						id: '15',
						imgURL: require('@/assets/img/gold/gold2017_cover_03.png'),
						shortenTitle: '全聯中元祭 / 台灣奧美',
						summary: '最佳互動影片創意獎<br>最佳社群行銷獎'
					},
					{
						id: '16',
						imgURL: require('@/assets/img/gold/gold2017_cover_04.png'),
						shortenTitle: '陳綺貞《時間的歌》 / <br>米蘭營銷策劃',
						summary: '最佳活動網站及APP創意獎<br>最佳網站技術應用獎<br>最佳數位平台整合行銷獎<br>年度大獎'
					},
					{
						id: '17',
						imgURL: require('@/assets/img/gold/gold2017_cover_05.png'),
						shortenTitle: '極限+1 / 安索帕台灣',
						summary: '最佳廣告技術應用獎'
					},
					{
						id: '18',
						imgURL: require('@/assets/img/gold/gold2017_cover_06.png'),
						shortenTitle: 'Be A Giver – 感謝先生篇 /<br>雪芃廣告',
						summary: '最佳內容行銷獎'
					},
					{
						id: '19',
						imgURL: require('@/assets/img/gold/gold2017_cover_07.png'),
						shortenTitle: 'Wow Girl女力實驗室 / <br>新極現廣告',
						summary: '最佳內容行銷獎'
					},
					{
						id: '20',
						imgURL: require('@/assets/img/gold/gold2017_cover_08.png'),
						shortenTitle: '家族的秘密 / 安索帕台灣',
						summary: '評審團特別獎'
					},
				]
			},
		};
	},
	computed: {
		//	表單資料
		// vuexNewsList() {
		// 	return this.$store.getters['news/getterList'];
		// },
	},
	methods: {
		handleDetail(id) {
			// $nuxt._router.push({ name: 'gold-id', query: { id: id } });
			$nuxt._router.push({ name: 'gold-id', params: { id: id } });
		},
		goldShow(){
			$('#gold').show();
			$('#list').hide();
		},
		listShow(){
			$('#list').show();
			$('#gold').hide();
		}
	},
	created() {
		// console.log(this.$store.state.news.list);
		this.$store.commit('news/updateVisited');

	},

	mounted() {
		
	},
	watch: {
		// $route(to, from) {
    //         // document.querySelector('html').style.height = '100%';
    //         // document.querySelector('body').style.height = '100%';
		// },
	},
	// scrollToTop: false,
};
</script>


<style scoped>

@import '~/assets/css/gold.css';
/* transition */
/* .nuxtchild-enter-active,
.nuxtchild-leave-active {
	transition: opacity .8s;
}

.nuxtchild-enter,
.nuxtchild-leave-to {
	opacity: 0;
} */

.gold17{
	height: 100%;
	width: auto;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);	
}

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
		height: 370px;
		vertical-align: top;
	}
}
</style>

