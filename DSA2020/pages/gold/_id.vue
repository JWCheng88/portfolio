<template>

		<div class="popup-news" style="">
			<div class="news-expand">
				<a class="btn-close" href="#" @click.prevent="handleClose"></a>

					<youtube v-if="detail[$route.params.id].youtubeURL"  :video-id="detail[$route.params.id].youtubeURL" ref="youtube"  fitParent ></youtube>

				<img :src="detail[$route.params.id].imgURL" v-if="detail[$route.params.id].imgURL">
				<div class="wrap-news-content">
					<h4>{{detail[$route.params.id].title}}</h4>
					<p v-html="detail[$route.params.id].award"></p>
					<div class="newscontent" v-html="detail[$route.params.id].content" />
				</div>
			</div>
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

	asyncData({ redirect, app, store, params, query }) {},

	head() {
		return {
			title: '歷年金獎作品',
		};
	},
	// layout: 'layoutIndex',
	data() {
		return {
			detail: [
				{
				title: '虎妮 / Oath 台灣',
				award: '最佳AR/VR應用獎',
        content: '',
        youtubeURL: 'gU-kjqSDNIQ',
				imgURL: '',
				},
				{
				title: '會叫雞的冰箱 / 小米公司',
				award: '最佳loT 應用獎',
        content: '',
        youtubeURL: 'nKPoZF3XA6A',
				imgURL: '',
				},
				{
				title: '實境找房 / 永慶房產集團',
				award: '最佳網站技術應用獎',
        content: '您曾經想過, 看房子, 可以不用親自到現場嗎? <br>永慶房屋堅持創新 , 首創「實境找房」, 從此, 找房也可以很科技！',
        youtubeURL: '',
				imgURL: require('@/assets/img/gold/gold2018_cover_03.png'),
				},
				{
				title: '客人您想買甚麼 / 安布思沛台灣',
				award: '最佳數據應用獎<br>年度創新技術獎',
        content: '台灣萊雅自2015年開始致力於新零售的布局，整合線上及線下行銷活動，在2016卻面臨瓶頸，在網路上以產品兌換帶來線下新客戶名單的方法，轉換率卻每況愈下。<br>面對複雜的線上與下行銷活動，透過數據找出消費者到底想要甚麼呢？',
        youtubeURL: '',
				imgURL: require('@/assets/img/gold/gold2018_cover_04.png'),
				},
				{
				title: 'NIKE試穿體驗空間 / 演鏡互動',
				award: '最佳互動裝置應用獎<br>最佳數位服務體驗應用獎',
        content: '',
        youtubeURL: '_c1QvWVezgA',
				imgURL: '',
				},
				{
				title: 'HBL吉祥物扭蛋 / 演鏡互動',
				award: '最佳數位服務體驗應用獎<br>最佳數位平台整合行銷獎<br>最佳行動行銷獎',
        content: '',
        youtubeURL: '7PMwiriH2Nw',
				imgURL: '',
				},
				{
				title: '節氣時光 / 不來梅',
				award: '最佳企業網站及APP創意獎',
        content: '',
        youtubeURL: 'jgYUXvk9ATk',
				imgURL: '',
				},
				{
				title: '第三個願望 / 台灣麥肯傳播集團',
				award: '最佳影片創意獎',
        content: '',
        youtubeURL: 'V7R2Oa6rF3g',
				imgURL: '',
				},
				{
				title: '鼻不通 行不通 / 安索帕台灣',
				award: '最佳展示廣告創意獎',
        content: '歐治鼻是一種鼻噴劑產品，而台灣消費者使用鼻噴劑產品的比例並不高、對產品感到陌生，且認為產品與自身無關聯性，也不清楚產品優點好處，因此沒有使用這類產品的需要。<br>•目的：<br>•引起鼻塞不適需要立即紓緩的共感，訴求歐治鼻噴鼻液5分鐘見效<br>•強化消費者使用歐治鼻的理由，有感冒症狀時，將歐治鼻納入治療方案中。<br>•1.提升歐治鼻品牌知名度<br>•2.提升產品與消費者間的關聯性，降低消費者對歐治鼻的陌生感',
        youtubeURL: '',
				imgURL: require('@/assets/img/gold/gold2018_cover_09.png'),
				},
				{
				title: '101許願牆 / 安索帕台灣',
				award: '最佳社群行銷獎<br>最佳策展行銷獎',
        content: '',
        youtubeURL: 'ixnE2VUSCsU',
				imgURL: '',
				},
				{
				title: '被消失的文章 / 米蘭營銷策劃',
				award: '最佳內容行銷獎',
        content: '',
        youtubeURL: '0g9cG9Nbz0o',
				imgURL: '',
				},
				{
				title: '台灣之星 黑點行動 / 新極現廣告',
				award: '最佳跨媒體整合行銷獎<br>全場大獎',
        content: '',
        youtubeURL: 'I1s1zOPwrds',
				imgURL: '',
				},
				{
				title: '實踐顧客旅程地圖 / adHub經緯廣告科技',
				award: '最佳程序化行銷獎',
        content: '',
        youtubeURL: 'jHzK6inUr54',
				imgURL: '',
				},
				{
				title: '燒符傳好運 Live Photo / 我是大衛廣告',
				award: '最佳社群文案創意獎',
        content: '中元節是台灣民間習俗中重要的節日之一，為了祭祀好兄弟、祈求闔家平安，不管是個人、家庭，甚至公司企業團體，都會準備許多普渡的祭品，中元節就此成為民生消費品通路的重要競爭檔期。看準這樣的「無形」商機，7-ELEVEN於2015年開始投入資源，操作量販包、多入數產品、進口商品等，祭出誘人的優惠促銷，結合本身通路家數的優勢，以選擇多元、且更便利的購買模式，吸引消費者至門市採買供品。但在這激烈的戰場之中，如何讓消費者對通路品牌有感、有新意，甚至讓年輕族群願意到7-ELEVEN購買中元祭品，成為7-ELEVEN今年中元節的挑戰。',
        youtubeURL: '',
				imgURL: require('@/assets/img/gold/gold2017_cover_01.png'),
				},
				{
				title: '一念 / 台灣電通',
				award: '最佳長影片創意獎<br>最佳跨媒體整合行銷獎',
        content: '台灣是世界單一麥芽威士忌前三大市場，在競爭者眾、甚至品牌名相近的情況下，需要為格蘭利威在消費者腦海中爭取一個明確的地位，用特殊的方式，幫助消費者了解品牌精神。',
        youtubeURL: '',
				imgURL: require('@/assets/img/gold/gold2017_cover_02.png'),
				},
				{
				title: '全聯中元祭 / 台灣奧美',
				award: '最佳互動影片創意獎<br>最佳社群行銷獎',
        content: '過去台灣民俗相信七月鬼門開，有許多禁忌與傳說，並且約定在7月15日中元節，祭祀未能投胎的孤魂野鬼，以保佑家人的平安。<br>然而，我們發現:現代人越來越少祭祀了。全聯身為展店最密集的台灣超市龍頭，一旦能刺激消費者拜拜的意念，就自然能獲得生意。於是，取代本就會拜拜的長輩(既有消費者)，我們將目標轉向了20-29 歲，認為中元節祭祀是老一輩活動的年輕人。現代的年輕人由於科學教育，對於鬼神之說較無忌諱，甚至認為祭祀是一件迷信、老一輩才從事的活動。中元祭的文化意義逐漸失傳，也沖擊了祭祀供品銷售的零售業績。<br>因此，只要能提升年輕人對中元節的關注度，就能活絡中元檔期。',
        youtubeURL: '',
				imgURL: require('@/assets/img/gold/gold2017_cover_03.png'),
				},
				{
				title: '陳綺貞《時間的歌》 / 米蘭營銷策劃',
				award: '最佳活動網站及APP創意獎<br>最佳網站技術應用獎<br>最佳數位平台整合行銷獎<br>年度大獎',
        content: '多年來，陳綺貞創作的歌曲感動了無數迷。<br>面對全球唱片市場的下滑，華語歌手創作陷入僵化，陳綺貞如何推出令人耳目一新的創作?<br>出道十年，陳綺貞的歌陪伴迷走過各種時刻。<br>我們發現，歌迷聽的不只是陳綺貞，歌迷也透過各種方式和手分享，他們聽歌當下的感動。<br>有沒可能將歌迷聽綺貞的每一種感動，也加入在創作之中？',
        youtubeURL: '',
				imgURL: require('@/assets/img/gold/gold2017_cover_04.png'),
				},
				{
				title: '極限+1 / 安索帕台灣',
				award: '最佳廣告技術應用獎',
        content: '為宣傳adidas新裝，品牌舉辦adigirls現場訓練活動，帶領女生一同透過運動，體驗adidas的品牌精神”由我創造極限加1”，adidas希望能感染、號召更多女生一同參與活動。',
        youtubeURL: '',
				imgURL: require('@/assets/img/gold/gold2017_cover_05.png'),
				},
				{
				title: 'Be A Giver – 感謝先生篇 / 雪芃廣告',
				award: '最佳內容行銷獎',
        content: '過去的幾年之內，臺灣的就業市場有⼀些氛圍上⾯的變化，這已經成為整個臺灣的社會現象。產⽣這種社會現象最主要的原因是世代間彼此的不和諧，來⾃不同世代的⼈對於彼此有⼀些不夠正確的看法，甚⾄導致了⼀些社會事件的發⽣。<br>我們企圖運⽤三階段傳播來呼籲50％(650萬⼈)雇員及雇主放下彼此成⾒，互相幫助成⻑。',
        youtubeURL: '',
				imgURL: require('@/assets/img/gold/gold2017_cover_06.png'),
				},
				{
				title: 'Wow Girl女力實驗室 / 新極現廣告',
				award: '最佳內容行銷獎',
        content: '•背景/問題點<br>1.在台灣，華歌爾是深耕40年的日系女性內衣品牌。2010年它因應台灣女性運動風潮推出了Wacoal Sports品牌，但至今卻仍有近90%的女生不清楚，甚至沒聽過。<br>2.台灣女性消費者在選擇「運動內衣」，只會想到Nike、Adidas、Under Armour等巨人級「運動」品牌，完全不會想到以「內衣」起家Wacoal Sports。<br>3.母品牌「華歌爾」面臨老化，被視為媽媽牌，逐漸流失年輕消費者。<br>•目標/挑戰<br>1.幫助已推出6年的Wacoal Sports建立明確定位、提升品牌知曉度。<br>2.以微小預算，在消費者的”運動內衣選單”中，對抗巨大富有的歐美運動品牌。<br>3.客戶期待KPI：影片觀看人次100萬。',
        youtubeURL: '',
				imgURL: require('@/assets/img/gold/gold2017_cover_07.png'),
				},
				{
				title: '家族的秘密 / 安索帕台灣',
				award: '評審團特別獎',
        content: '從嬌生內部所做的調查發現，有落髮問題的消費者這幾年越來越積極的尋找解決方式，尤其是25-29歲的族群。但近一兩年，主要競品(例如：萌髮、566、Alpecin) 增加電視媒體投放預算，消費者的選擇變得更多，同時各家品牌對於產品的功效描述也都差不多，讓消費者不知道為什麼要選擇落建生髮產品。<br><br>我們希望發展出一個新的溝通方向，廣泛地向淺在TA溝通，讓消費者眾多的生髮與健髮產品中，清楚地了解落建與競品的不同，讓TA知道自己是需要選擇落建產品的。同時提升TA對落建品牌的興趣度。',
        youtubeURL: '',
				imgURL: require('@/assets/img/gold/gold2017_cover_08.png'),
				},
				{
				title: 'ShoplusAI社群商務賣家助理 / iKala',
				award: '數位技術類別大獎<br>最佳AI應用獎',
        content: '',
        youtubeURL: 'UDqgpGejlv4',
				imgURL: '',
				},
				{
				title: '實境LIVE賞屋 / 永慶房產集團',
				award: '最佳體驗技術運用獎<br>最佳科技創新獎',
        content: '',
        youtubeURL: 'nL1EBin0UG0',
				imgURL: '',
				},
				{
				title: '台北健森房—活水飛輪 / 米蘭營銷策劃股份有限公司',
				award: '品牌體驗與促動行銷類大獎<br>最佳互動體驗裝置與技術應用獎<br>最佳遊戲/置入娛樂獎<br>最佳APP及行動網路行銷獎<br>最佳遊戲及遊戲置入行銷獎<br>最佳跨媒體整合行銷獎',
        content: '',
        youtubeURL: 'FhqtHNi3pu8',
				imgURL: '',
				},
				{
				title: 'iDrip智能手沖咖啡機 / 艾聚普股份有限公司',
				award: '創新類大獎<br>最佳IoT應用獎<br>最佳產品創新獎',
        content: '',
        youtubeURL: '6x-p4ZwKqAw',
				imgURL: '',
				},
				{
				title: '多元身分驗證方式之手機門號驗證 / 新光人壽保險股份有限公司',
				award: '最佳科技創新獎',
        content: '',
        youtubeURL: 'Y_l0zIQZMDI',
				imgURL: '',
				},
				{
				title: '美賣AI媒合KOL電商平台 / 威士康股份有限公司',
				award: '最佳商業轉型創新獎',
        content: '美賣 KOL 電商平台以 KOL（關鍵意見領袖）為核心社群銷售，提供一條龍的選品、金流、出貨、客戶服務，讓 KOL 能夠盡情依照個人魅力銷售，再透過限時限量操作，創造多 KOL、多團、商品互配的議題堆疊，延續長尾效應與使用者裂變。<br>而面對漸趨飽和的 KOL 營銷，美賣近一步突破缺乏整合與數據驗證的市場困局，發展關鍵 AI 演算機制與具體實踐累積的數據模型，建立自動媒合流程；同時建立社群用戶裂變式增長的拉新、轉化、留存，讓自動轉動的營運模式，打造出創新模式的高價值與前瞻性。',
        youtubeURL: '',
				imgURL: require('@/assets/img/gold/gold2019_06.png'),
				},
				{
				title: '人生的真相 / 只要有人社群顧問有限公司',
				award: '社群與影響者行銷類大獎<br>最佳社群經營行銷獎',
        content: '',
        youtubeURL: 'n1YHgpCvWPo',
				imgURL: '',
				},
				{
				title: '舒潔好聲音 / 偉門智威',
				award: '最佳社群內容行銷獎',
        content: '',
        youtubeURL: 'htvkcQ3AS-k',
				imgURL: '',
				},
				{
				title: '夢幻新車上市計畫 / 台灣麥肯傳播集團',
				award: '最佳社群內容行銷獎',
        content: '台灣新生兒死亡率高居世界第二，甚至是偏鄉地區一部配備行動醫療設備的兒童專用救護車能救回1/5病童而台灣卻一部兒童專用救護車都沒有然而在經濟低迷的時代，大家卻仍渴望擁有一台豪華夢想車<br>台大兒童健康基金會以上市廣告規模發表一款夢幻新車運用影片/網站/展間/型錄等各種造勢引起車主們的高度興趣，瞭解這是台灣病童無法擁有的夢想再透過模型車贈品進行募資終於讓這部夢幻車真實上市讓病童擁有最奢華的夢想 – 活下去',
        youtubeURL: '',
				imgURL: require('@/assets/img/gold/gold2019_09.jpg'),
				},
				{
				title: '我的不意外家庭 / 台灣奧美',
				award: '娛樂行銷類大獎<br>最佳內容娛樂獎<br>最佳影片創意獎',
        content: '',
        youtubeURL: 'M4f3JdRCFp8',
				imgURL: '',
				},
				{
				title: '血月搖滾 / 偉門智威',
				award: '最佳音樂娛樂獎',
        content: '',
        youtubeURL: '0LPzNxAZlgw',
				imgURL: '',
				},
				{
				title: '全聯新聞台：新竹男友 / 台灣奧美',
				award: '最佳數據洞察創新獎',
        content: 'Facebook演算法改變，小編必須衝破演算法的束縛，在社群上維持「地表最強小編」的地位。 那麼，除了維持原本表現良好的內容，還可以再如何突破呢？<br>全聯運用多維數據，深入挖掘女性消費者洞察，在$0媒體預算的限制下，精準切中靶心，推敲出「原來！全台最佳男友人選在新竹！」的嶄新觀點，引發粉絲熱議，造成社群廣大迴響、獲得ETtoday、東森新聞、TVBS、三立新聞等十多家主流媒體自主報導。 ',
        youtubeURL: '',
				imgURL: require('@/assets/img/gold/gold2019_12.jpg'),
				},
				{
				title: '你知道怎麼找出真正的消費者是誰嗎 / 安布思沛行銷股份有限公司',
				award: '最佳數據洞察創新獎',
        content: 'BenQ是台灣知名的消費性電子品牌，因擁有獨家創新的護眼技術，成為台灣護眼電視消費產品之領導品牌。不過台灣電視消費市場，長期被國際品牌所佔據，且價格也越來越競爭，因此當 BenQ 於 2018 年 9 月推出新的旗艦電視 S 系列，要如何精準找到對的目標族群，就成為行銷時的重要課題。<br>安布思沛台灣透過數據洞察，為 BenQ 最新旗艦電視 S 系列 找出更多潛在的生意機會 ，提高廣告成效。',
        youtubeURL: '',
				imgURL: require('@/assets/img/gold/gold2019_13.png'),
				},
				{
				title: 'EagleEye CDP / 紅門互動股份有限公司',
				award: '數據創新類大獎<br>最佳數據科技創新獎',
        content: 'Eagleeye CDP協助為品牌企業客戶整合會員資料、網站/App、廣告、軟硬體數據可辨識的客戶行為軌跡以及POS的銷售資料等各種形式數據，幫助品牌主從數據中，快速勾勒出每位顧客的輪廓與銷售趨勢，進而設定精準行銷方案，帶動營收有意義的成長。<br>Eagleeye CDP分析了顧客活躍度，了解顧客的回訪週期，區分五種客群(新客、主力、瞌睡、沉睡、流失)，以及透過AI智慧演算，歸納出三點營運分針(拉新、留存、促活)，同時導入RFM統計，自訂受眾的篩選功能，分析出三種行為(最近一次的消費日期、購物頻率、消費金額)。<br>Eagleeye CDP 將數據轉化為新能源的科技，挖掘和分析企業數據，得到預測性結論，最終利用它來當作決策依據獲取價值。',
        youtubeURL: '',
				imgURL: require('@/assets/img/gold/gold2019_14.png'),
				},
				{
				title: '捐血地標 / 偉門智威',
				award: '行動行銷類大獎<br>最佳適地性促動行銷獎<br>最佳行動廣告行銷獎',
        content: '',
        youtubeURL: 'WQ_4VkcZ0d8',
				imgURL: '',
				},
				{
				title: '弘道「寒冬助老，刻不容緩」募款計畫 / 創異促動',
				award: '電子商務行銷類大獎<br>最佳O2O行銷獎',
        content: '',
        youtubeURL: '1KbWdh8o7jU',
				imgURL: '',
				},
				{
				title: '用 LINE 打造行銷新渠道 / 漸強實驗室',
				award: '最佳顧客旅程及介面設計獎',
        content: 'Skyscanner希望可以讓旅客在最輕鬆的方式下，找到最便宜的價格。品牌已經做到了後者，而前者則永遠都有優化與發展的可能。<br>以往，Skyscanner的服務範圍僅在平台與app，在消費者主動去尋找資訊的情況下，被動回應消費者的需求。因此，品牌希望藉由LINE平台改變角色，搭配漸強實驗室MAAC後台建置，成為主動推播者，更即時地提供消費者需要的資訊。<br> <a href="https://reurl.cc/alY4WQ">https://reurl.cc/alY4WQ</a>',
        youtubeURL: '',
				imgURL: '',
				},
				{
				title: '不吃不喝 / 台灣奧美',
				award: '最佳社群影片創意獎',
        content: '',
        youtubeURL: 'fdWk7p13aZM',
				imgURL: '',
				},
				{
				title: '不意外騎士 情路三行詩 / 台灣奧美',
				award: '最佳活動網站行銷獎',
        content: '',
        youtubeURL: 'ChGW_UG1ZiE',
				imgURL: '',
				},
				{
				title: '佳議員事件簿 / 台灣電通',
				award: '最佳數位平台整合行銷獎',
        content: '',
        youtubeURL: 'O9i7slhd6GY',
				imgURL: '',
				},
			]
		};
	},
	computed: {

	},
	methods: {
		handleClose() {
			this.$store.state.news.visited
				? $nuxt._router.back()
				: $nuxt._router.push('/gold');
		},
	},
	created() {

	},

	mounted() {
		// let queryID = this.util_getParameterByName('id');
		//  console.log(this.$store.state.news.detail);
		// this.$store.commit('news/updateVisited');
	},
};
</script>


<style scoped>
@import '~/assets/css/gold.css';
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
	padding-bottom: 30px;
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


.news .popup-news h4{
	font-weight: 600;
	margin-bottom: 10px;
}

</style>

