<template>
    <div class="userWrapper">
        <!--add works-->
        <div class="total">
            <p>{{$t('list.total1')}} {{computedListCount}} {{$t('list.total2')}} {{computedUnpaidCount}} {{$t('list.total3')}}</p>
            <!--add btn tw-->
            <a v-if="this.$i18n.locale=='tw'" class="btn-add" href="#" @click.prevent="util_LinkTo('/tw/u/worksAdd')">
                <span class="add por"></span>
                <span class="txt">添加作品</span>
            </a>
            <!--add btn cn-->
            <a v-if="this.$i18n.locale=='cn'" class="btn-add" href="#" @click.prevent="util_LinkTo('/cn/u/worksAdd')">
                <span class="add por"></span>
                <span class="txt">添加作品</span>
            </a>
        </div>

        <!--works content list-->

        <template v-for="(item, index) in data.list">
            <div class="list-form" :key="'list-form-'+index" v-show="item.status!=='9'">
                <table>
                    <tbody>
                        <tr>
                            <th>日期</th>
                            <th>{{$t('list.wid')}}</th>
                            <th>{{$t('list.wname')}}</th>
                            <th>{{$t('list.cname')}}</th>
                            <th>{{$t('list.type')}}</th>
                            <th>{{$t('list.subtype')}}</th>
                        </tr>
                        <tr>
                            <td>{{item.created_at}}</td>
                            <td>{{item.p_key}}</td>
                            <td>{{item.title}}</td>
                            <td>{{item.customer_name}}</td>
                            <td>{{convertMainType(item.main_type)}}</td>
                            <td>{{convertSubType(item.main_type,item.sub_type)}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="check-list" :key="'check-list-'+index" v-show="item.status!=='9'">
                <ul>
                    <!-- <li>參賽表
                        <span>
                            <img v-if="item.registration_file" src="~assets/svg/circle.svg">
                            <img v-else src="~assets/svg/cross.svg">
                        </span>

                    </li> -->
                    <li>{{$t('list.wcontent')}}
                        <span>
                            <img v-if="item.exposition_file" src="~assets/svg/circle.svg">
                            <img v-else src="~assets/svg/cross.svg">
                        </span>

                    </li>
                    <li>{{$t('list.link')}}
                        <span>
                            <img v-if="item.case_film_url" src="~assets/svg/circle.svg">
                            <img v-else src="~assets/svg/cross.svg">
                        </span>
                    </li>

                </ul>
                <a class="btn-check-list" href="#" @click.prevent="handleGoDetail(item.p_key)">
                    <span class="txt">{{$t('list.detail')}}</span>
                    <span class="arrow"></span>
                </a>
            </div>

        </template>
        <!-- <div class="list-form">
			<table>
				<tbody>
					<tr>
						<th>日期</th>
						<th>作品編號</th>
						<th>作品名稱</th>
						<th>客戶名稱</th>
						<th>參賽類別</th>
						<th>參賽項目</th>
					</tr>
					<tr>
						<td>2018/07/09</td>
						<td>2018/07/09</td>
						<td>豐富的人生</td>
						<td>白蘭氏</td>
						<td>數位創意類</td>
						<td>最佳互動影片創意獎</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="check-list">
			<ul>
				<li>參賽表
					<span><img src="~assets/svg/circle.svg"></span>
				</li>
				<li>參賽表
					<span><img src="~assets/svg/circle.svg"></span>
				</li>
				<li>參賽表
					<span><img src="~assets/svg/cross.svg"></span>
				</li>
				<li>參賽表
					<span><img src="~assets/svg/circle.svg"></span>
				</li>
			</ul>
			<a class="btn-check-list" href="#">
				<span class="txt">作品詳情</span>
				<span class="arrow"></span>
			</a>
		</div> -->

        <div class="sum">
            <span>{{$t('list.computedtotal')}}</span>
            <span class="num">{{computedTotal}}</span>
            <span>元</span>
        </div>
        <div class="works-info">
            <h5>{{$t('list.notice')}}</h5>
            <p>{{$t('list.noticec')}}<br>{{$t('list.noticec2')}}</p>
            <h5>{{$t('list.pay')}}</h5>
            <p>{{$t('list.pay1')}}<br><!-- {{$t('list.pay1_2')}} --></p>
            <ul>{{$t('list.pay2')}}
                <li>{{$t('list.pay3')}}</li>
                <li>{{$t('list.pay4')}}</li>
                <li>{{$t('list.pay5')}}</li>
                <li>{{$t('list.pay6')}}</li>
                <li>{{$t('list.pay7')}}</li>
            </ul>
            <p>{{$t('list.pay8')}}</p>
            <p>
                <span class="gt">{{$t('list.pay9')}}：</span>{{$t('list.pay10')}}<br>
                <span class="gt">{{$t('list.pay11')}}：</span>{{$t('list.pay12')}}<br>
                <span class="gt">{{$t('list.pay13')}}：</span>{{$t('list.pay14')}}<br>
                <span class="gt">{{$t('list.pay15')}}：</span>{{$t('list.pay16')}}<br>
								<span class="gt" v-if="this.$i18n.locale == 'cn'" >SWIFT CODE：</span><span v-if="this.$i18n.locale == 'cn'" >SINOTWTP</span></p>
						<!-- <img v-if="this.$i18n.locale == 'cn'" src="~assets/img/AliPayQRCode.png" alt="" style="width:auto"> -->
        </div>
    </div>
</template>

<script>
import qs from 'qs';
export default {
	asyncData({ redirect }) {},
	fetch({ store, params, query, app }) {		
		store.commit('user/commitNavibarTitle', '我的參賽作品');
	},
	head() {
		return {
			title: '線上報名',
		};
	},
	layout: 'layoutUser',
	data() {
		return {
			data: {
				result: '',
				member: '',
				list: [],
			},
		};
	},
	computed: {
		computedTotal() {
			// 報名費用：會員NTD$3,500元/件/項，非會員NTD$4,000元/件/項。報名10件（含）以上，享八折優惠。
			let count = this.data.list.length;
			let price;
			var region = document.cookie.replace(/(?:(?:^|.*;\s*)region\s*\=\s*([^;]*).*$)|^.*$/, "$1");
			if (region == 'cn'){
				price =
				count *
				(count >= 10 ? 0.8 : 1) * 800
			}else{
				price =
				count *
				(count >= 10 ? 0.8 : 1) *
				(this.data.member ? 0 : 3500);
			}
			// price =
			// 	count *
			// 	(count >= 10 ? 0.8 : 1) *
			// 	(this.data.member ? 3500 : 5000);

			return this.util_thousandComma(parseInt(price, 10));
		},

		computedListCount() {
			return this.data.list.length;
		},
		computedUnpaidCount() {
			return this.data.list.reduce(function(accumulator, currentValue) {
				if (currentValue.status === '1') accumulator++;
				return accumulator;
			}, 0);
		},
	},
	methods: {
		convertMainType(data) {
			let main_type = '';
			if (this.$i18n.locale == 'cn'){
				switch (data) {
					case 'A':
						main_type = '影片创意类';
						break;
					case 'B':
						main_type = '行动行销类';
						break;
					case 'C':
						main_type = '数位技术类';
						break;
					case 'D':
						main_type = '娱乐行销类';
						break;
					case 'E':
						main_type = '品牌体验与促动行销类';
						break;
					case 'F':
						main_type = '电子商务行销类';
						break;
					case 'G':
						main_type = '创新类';
						break;
					case 'H':
						main_type = '数据创新类';
						break;
					case 'J':
						main_type = '社群与影响者行销类';
						break;
				}
			}else{
				switch (data) {
					case 'A':
						main_type = '影片創意類';
						break;
					case 'B':
						main_type = '行動行銷類';
						break;
					case 'C':
						main_type = '數位技術類';
						break;
					case 'D':
						main_type = '娛樂行銷類';
						break;
					case 'E':
						main_type = '品牌體驗與促動行銷類';
						break;
					case 'F':
						main_type = '電子商務行銷類';
						break;
					case 'G':
						main_type = '創新類';
						break;
					case 'H':
						main_type = '數據創新類';
						break;
					case 'J':
						main_type = '社群與影響者行銷類';
						break;
				}
			}
			return main_type;
		},
		convertSubType(main_data, sub_data) {
			let sub_type = '';
			if (this.$i18n.locale == 'cn'){
				let objSubType = {
					A: [
						'最佳影片创意奖',
						'最佳短影片创意奖',
						'最佳互动影片创意奖',
						'最佳社群影片创意奖',
						'最佳科技运用影片创意奖',
					],
					B: [
						'最佳APP及行动网路行销奖',
						'最佳游戏及游戏置入行销奖',
						'最佳适地性促动行销奖',
						'最佳行动广告行销奖',
					],
					C: [
						'最佳使用者体验（UX）奖',
						'最佳loT 应用奖',
						'最佳AI 应用奖',
						'最佳体验技术运用奖',
						'最佳数位技术应用奖',
						'最佳互动体验装置与技术运用奖',
					],
					D: [
						'最佳内容娱乐奖',
						'最佳音乐娱乐奖',
						'最佳游戏/置入娱乐奖',
						'最佳运动娱乐奖',
					],
					E: [
						'最佳通路服务体验行销奖',
						'最佳数位平台整合行销奖',
						'最佳跨媒体整合行销奖',
						'最佳数位广告创意行销奖',
						'最佳活动网站行销奖',
						'最佳企业网站行销奖',
						'最佳策展行销奖',
					],
					F: [
						'最佳电子商务行销奖',
						'最佳O2O 行销奖',
						'最佳顾客旅程及介面设计奖',
						'最佳精准数据应用行销奖',
					],
					G: [
						'最佳产品创新奖',
						'最佳商业转型创新奖',
						'最佳科技创新奖',
					],
					H: [
						'最佳数据洞察创新奖',
						'最佳程序化行销创新奖',
						'最佳数据科技创新奖',
					],
					J: [
						'最佳影响者行销奖',
						'最佳社群经营行销奖',
						'最佳品牌合作伙伴行销奖',
						'最佳社群内容行销奖',
					],
				};
				return objSubType[main_data][parseInt(sub_data, 10) - 1];
			}else{
				let objSubType = {
					A: [
						'最佳影片創意獎',
						'最佳短影片創意獎',
						'最佳互動影片創意獎',
						'最佳社群影片創意獎',
						'最佳科技運用影片創意獎',
					],
					B: [
						'最佳APP及行動網路行銷獎',
						'最佳遊戲及遊戲置入行銷獎',
						'最佳適地性促動行銷獎',
						'最佳行動廣告行銷獎',
					],
					C: [
						'最佳使用者體驗（UX）獎',
						'最佳loT 應用獎',
						'最佳AI 應用獎',
						'最佳體驗技術運用獎',
						'最佳數位技術應用獎',
						'最佳互動體驗裝置與技術運用獎',
					],
					D: [
						'最佳內容娛樂獎',
						'最佳音樂娛樂獎',
						'最佳遊戲/置入娛樂獎',
						'最佳運動娛樂獎',
					],
					E: [
						'最佳通路服務體驗行銷獎',
						'最佳數位平台整合行銷獎',
						'最佳跨媒體整合行銷獎',
						'最佳數位廣告創意行銷獎',
						'最佳活動網站行銷獎',
						'最佳企業網站行銷獎',
						'最佳策展行銷獎',
					],
					F: [
						'最佳電子商務行銷獎',
						'最佳O2O 行銷獎',
						'最佳顧客旅程及介面設計獎',
						'最佳精準數據應用行銷獎',
					],
					G: [
						'最佳產品創新獎',
						'最佳商業轉型創新獎',
						'最佳科技創新獎',
					],
					H: [
						'最佳數據洞察創新獎',
						'最佳程序化行銷創新獎',
						'最佳數據科技創新獎',
					],
					J: [
						'最佳影響者行銷獎',
						'最佳社群經營行銷獎',
						'最佳品牌合作夥伴行銷獎',
						'最佳社群內容行銷獎',
					],
				};
				return objSubType[main_data][parseInt(sub_data, 10) - 1];				
			}
		},
		handleGoDetail(id) {
			$nuxt._router.push({ name: 'lang-u-worksDetail', query: { id: id } });
			// $nuxt._router.push({ name: 'news-id', params: { id: id } });
		},
		async getRegistrationFileName(p_key) {
			this.$axios({
				method: 'POST',
				data: $.param({ act_mode: 'getportfolio', p_key }),
				url: '/portfolios.ashx',
			})
				.then(res => {
					console.log(res.data.portfolio.registration_file);
					return res.data.portfolio.registration_file;
				})
				.catch(err => {});
			// return p_key;
		},
		getExpositionFileName(p_key) {
			this.$axios({
				method: 'POST',
				data: $.param({ act_mode: 'getportfolio', p_key }),
				url: '/portfolios.ashx',
			})
				.then(res => {
					return res.data.portfolio.exposition_file;
				})
				.catch(err => {});
			// return p_key;
		},
	},
	created() {},

	mounted() {
		// console.log(this.$store.state.user);

		this.$axios({
			method: 'POST',
			data: qs.stringify({ act_mode: 'getportfolio_list' }),
			url: '/portfolios.ashx',
		})
			.then(response => {
				// console.log('mounted', response.data);
				this.data = response.data;
			})
			.catch(err => {});
	},
};
</script>

<style scoped>
@import '~/assets/css/regist.css';
</style>

