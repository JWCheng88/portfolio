<template>
    <div class="userWrapper">
        <p>{{$t('addworks.disc')}}</p>
        <div class="wrap-form">
            <h5>{{$t('addworks.basic')}}</h5>
            <div class="wrap-data">
                <div class="input-container form-50">
                    <input class="input" id="worksName" type="text" pattern=".+" required v-model="Form.title">
                    <label class="label" for="worksName">{{$t('addworks.wname')}}*</label>
                </div>
                <div class="input-container form-50">
                    <input class="input" id="worksNameEN" type="text" pattern=".+" required v-model="Form.tile_eng">
                    <label class="label" for="worksNameEN">{{$t('addworks.wnameen')}}*</label>
                </div>
                <div class="input-container form-50">
                    <input class="input" id="agency" type="text" pattern=".+" required v-model="Form.company_name">
                    <label class="label" for="agency">{{$t('addworks.aname')}}*</label>
                </div>
                <div class="input-container form-50">
                    <input class="input" id="agencyEN" type="text" pattern=".+" required v-model="Form.company_engname">
                    <label class="label" for="agencyEN">{{$t('addworks.anameen')}}*</label>
                </div>
                <div class="input-container form-50">
                    <input class="input" id="client" type="text" pattern=".+" required v-model="Form.customer_name">
                    <label class="label" for="client">{{$t('addworks.cname')}}</label>
                </div>
                <div class="input-container form-50">
                    <input class="input" id="clientEN" type="text" pattern=".+" required v-model="Form.customer_engname">
                    <label class="label" for="clientEN">{{$t('addworks.cnameen')}}</label>
                </div>
                <div class="input-container form-50">
                    <input class="input" id="brand" type="text" pattern=".+" required v-model="Form.customer_brandname">
                    <label class="label" for="brand">{{$t('addworks.bname')}}</label>
                </div>
                <div class="input-container form-50">
                    <input class="input" id="brandEN" type="text" pattern=".+" required v-model="Form.customer_engbrandname">
                    <label class="label" for="brandEN">{{$t('addworks.bnameen')}}</label>
                </div>
            </div>
        </div>
        <div class="wrap-form">
            <h5>{{$t('addworks.contact')}}*</h5>
            <p>{{$t('addworks.contactdisc')}}</p>
            <div class="wrap-data">
                <div class="input-container form-50">
                    <input class="input" id="contactName" type="text" pattern=".+" required v-model="Form.contact_name">
                    <label class="label" for="contactName">{{$t('addworks.contactname')}}*</label>
                </div>
                <div class="input-container form-50">
                    <input class="input" id="contactPhone" type="text" pattern=".+" required v-model="Form.contact_phone">
                    <label class="label" for="contactPhone">{{$t('addworks.mobile')}}*</label>
                </div>
                <div class="input-container form-50">
                    <input class="input" id="contactEmail" type="text" pattern=".+" required v-model="Form.contact_email">
                    <label class="label" for="contactEmail">{{$t('addworks.email')}}*</label>
                </div>
            </div>
        </div>
        <div class="wrap-form">
            <h5>{{$t('addworks.type')}}*</h5>
            <p>{{$t('addworks.typedisc')}}</p>
            <div class="wrap-data">
                <div class="select select--white form-50" data-form-type="main_type">
                    <span class="placeholder">{{Form.main_type}}</span>
                    <ul>
                        <li v-for="(value, key, index) in vuexCategory.list" :key="index" @click="updateSelectedCategory(key)">
                            {{ key }}
                        </li>

                    </ul>
                </div>
                <div class="select select--white form-50" data-form-type="sub_type">
                    <span class="placeholder">{{Form.sub_type}}</span>
                    <ul>
                        <li v-for="(value, key, index) in vuexCategory.list[vuexCategory.data.selectedCategory]" :key="index">
                            {{ key }}
                        </li>

                    </ul>
                </div>
            </div>
        </div>
        <div class="wrap-form">
            <h5>{{$t('addworks.workinfo')}}*</h5>
            <ul>
                <li>{{$t('addworks.workdisc1')}}</li>
                <li>{{$t('addworks.workdisc2')}}</li>
            </ul>
            <textarea class="text-area" placeholder="請輸入作品概述" rows="8" v-model="Form.summary"></textarea>
        </div>
        <div class="wrap-form">
            <h5>{{$t('addworks.upload')}}*</h5>
            <ul>
                <li>{{$t('addworks.upload1')}}</li>
                <li>{{$t('addworks.upload2')}}
                    <a href="/2020/2020_DSA_Template.pptx"> {{$t('addworks.upload3')}}</a>
                </li>
                <li>{{$t('addworks.upload4')}}<br>{{$t('addworks.upload4_2')}}</li>
                <li>{{$t('addworks.upload5')}}</li>
            </ul>
            <div class="upload">
                <div class="upload-item">
                    <span>{{$t('addworks.file1')}}*</span>
                    <a class="btn-upload" @click.stop="onclickExpositionFile">
                        <input type="file" id="ExpositionFile" ref="ExpositionFile" accept=".pdf" @change="onchangeExpositionFile" style="display:none">
                        <span class="icon-folder">
                        </span>{{$t('addworks.file2')}}
                    </a>
                    <br>
                    <span style="top: 10px;position: relative;">{{ExpositionFile}}</span>
                </div>
								<div class="film-wrap">
									<div class="input-container form-upload" style="text-align: left;">
											<input class="input" id="uploadurl" type="text" pattern=".+" required v-model="Form.case_film_url">
											<label class="label" for="uploadurl">{{$t('addworks.link1')}}</label>
									</div>
									<div class="input-container form-upload" style="text-align: left;">
											<input class="input" id="uploadurl2" type="text" pattern=".+" required v-model="Form.case_film_url_2">
											<label class="label" for="uploadurl2">{{$t('addworks.link2')}}</label>
									</div>
								</div>
								<br>
								<span style="left: 15px;position: relative;font-size: 15px;opacity: 0.9;"> case film {{$t('addworks.case1')}}：
										<a href="https://www.youtube.com/watch?v=c2EmgozGPUE&feature=youtu.be" target="_blank" style="color: #b88b01; text-decoration: underline;">{{$t('addworks.case3')}}</a>
										　*{{$t('addworks.case2')}}*
								</span>
								<!-- <span style="top: 20px;position: relative;font-size: 15px;opacity: 0.9;">*感謝小魚廣告網提供範例影片，前往可看更多範例*</span> -->
            </div>
        </div>
        <div class="wrap-form">
            <h5>{{$t('addworks.statement')}}*</h5>
						<p>{{$t('addworks.statement2')}}</p>
            <div class="wrap-data">
                <div class="input-container form-rec">
                    <input placeholder="yyyy/mm/dd" class="input" id="date-begin" min="2019-09-01" max="2020-08-31" type="date" pattern=".+" required v-model="Form.s_date" @input='onchangeS_Date' @change='onchangeS_Date'>
                    <label class="label labelFocused" for="date-begin">{{$t('addworks.date1')}}*</label>
                </div>
            </div>
        </div>

        <div class="wrap-form">
            <h5>{{$t('addworks.correct')}}</h5>
            <ul>
                <li>{{$t('addworks.correct2')}}</li>
                <li>{{$t('addworks.correct3')}}</li>
            </ul>
        </div>
        <div class="wrap-form">
            <h5>{{$t('addworks.publish')}}*</h5>
            <ul>
                <li>{{$t('addworks.publish1')}}</li>
                <li>{{$t('addworks.publish2')}}</li>
                <li>{{$t('addworks.publish3')}}</li>
                <li>{{$t('addworks.publish4')}}</li>
            </ul>
        </div>
        <div class="btn_wrap btn_wrap2">
            <a class="btn-confirm" href="#" @click.prevent="handleSubmit">
                <span class="txt">{{$t('addworks.confirm')}}</span>
                <span class="arrow"></span>
            </a>
            <a class="btn-cancel" href="#" @click.prevent="canvelEdit">
                <span class="txt">{{$t('addworks.cancel')}}</span>
                <span class="arrow"></span>
            </a>
        </div>
    </div>
</template>

<script>
import templateWorksAddForm from '~/plugins/templateWorksAddForm';
import Vue from 'vue';
import qs from 'qs';
export default {
	asyncData({ redirect }) {},
	fetch({ store, params, query, app }) {
		store.commit('user/commitNavibarTitle', '添加作品');
	},
	head() {
		return {
			title: '新增作品',
		};
	},
	layout: 'layoutUser',
	data() {
		return {
			Form: templateWorksAddForm(),
			recaptchaForm: undefined,
			// RegistrationFile: '',
			ExpositionFile: '',
		};
	},
	computed: {
		vuexCategory() {
			if (this.$i18n.locale == 'tw'){
				return this.$store.state.worksCategory;
			}else{
				return this.$store.state.worksCategoryCN;
			}
		},
	},
	methods: {
		// 初始化 下拉選單
		initSelect() {
			$('.select')
				.on(
					'click',
					'.placeholder',
					function(e) {
						var target = e.target;
						var parent = $(target).closest('.select');
						if (!parent.hasClass('is-open')) {
							parent.addClass('is-open');
							$('.select.is-open')
								.not(parent)
								.removeClass('is-open');
						} else {
							parent.removeClass('is-open');
						}
					}.bind(this)
				)
				.on(
					'click',
					'ul>li',
					function(e) {
						var target = e.target;
						var parent = $(target).closest('.select');
						var text = $(target)
							.text()
							.trim();
						parent.removeClass('is-open');
						// 關閉填字, 與v-model綁定
						// .find('.placeholder')
						// .text(text);

						/**
						 * 填入 data
						 */
						// 取得 data('form-type')
						var FormType = parent.data('form-type');
						this.Form[FormType] = text;
					}.bind(this)
				);
		},

		insertCoreMember() {
			let index = this.Form.coremember.length;

			// this.Form.coremember.$set(index, {
			// 	company_name: '',
			// 	name: '',
			// 	job_title: '',
			// 	email: '',
			// });
			if (index >= 10) {
				return this.$swal({
					type: 'error',
					title: '對不起\n團隊核心成員最多十位',
				});
			}
			Vue.set(this.Form.coremember, index, {
				company_name: '',
				name: '',
				job_title: '',
				email: '',
				id: '',
			});
		},
		handleSubmit() {
			let $FormData = Object.assign({}, this.Form);

			if (
				!Date.parse($FormData.s_date) //||
				// !Date.parse($FormData.e_date)
			) {
				this.$swal({
					type: 'warn',
					title: '格式錯誤',
					text: '作品開始時間',
				});
				return;
			}
			let min_s_date = new Date('2019-09-01');
			let max_s_date = new Date('2020-08-31');
			if (
				min_s_date > new Date($FormData.s_date) ||
				max_s_date < new Date($FormData.s_date)
			) {
				this.$swal({
					type: 'warn',
					// html:true,
					title: '作品開始時間錯誤',
					text: '不在規定範圍內，2019-09-01~2020-08-31',
				});
				return;
			}

			// let min_e_date = new Date('2018-09-01');
			// if (min_s_date > new Date($FormData.e_date)) {
			// 	this.$swal({
			// 		type: 'warn',
			// 		// html:true,
			// 		title: '作品結束時間錯誤',
			// 		text: '不在規定範圍內，必須大於 2018-09-01',
			// 	});
			// 	return;
			// }
			$FormData.apply_country = JSON.stringify($FormData.apply_country);
			
			if(this.$i18n.locale == 'cn'){
				let objMainType = {
					影片创意类: 'A',
					行动行销类: 'B',
					数位技术类: 'C',
					娱乐行销类: 'D',
					品牌体验与促动行销类: 'E',
					电子商务行销类: 'F',
					创新类: 'G',
					数据创新类: 'H',
					社群与影响者行销类: 'J',
				};
				$FormData.main_type = objMainType[$FormData.main_type] || '';

				let objSubType = {
					A: {
						最佳影片创意奖: 1,
						最佳短影片创意奖: 2,
						最佳互动影片创意奖: 3,
						最佳社群影片创意奖: 4,
						最佳科技运用影片创意奖: 5,
					},
					B: {
						'最佳APP及行动网路行销奖': 1,
						最佳游戏及游戏置入行销奖: 2,
						最佳适地性促动行销奖: 3,
						最佳行动广告行销奖: 4,
					},
					C: {
						'最佳使用者体验（UX）奖': 1,
						'最佳loT 应用奖': 2,
						'最佳AI 应用奖': 3,
						最佳体验技术运用奖: 4,
						最佳数位技术应用奖: 5,
						最佳互动体验装置与技术运用奖: 6,
					},
					D: {
						最佳内容娱乐奖: 1,
						最佳音乐娱乐奖: 2,
						'最佳游戏/置入娱乐奖': 3,
						最佳运动娱乐奖: 4,
					},
					E: {
						最佳通路服务体验行销奖: 1,
						最佳数位平台整合行销奖: 2,
						最佳跨媒体整合行销奖: 3,
						最佳数位广告创意行销奖: 4,
						最佳活动网站行销奖: 5,
						最佳企业网站行销奖: 6,
						最佳策展行销奖: 7,
					},
					F: {
						最佳电子商务行销奖: 1,
						'最佳O2O 行销奖': 2,
						最佳顾客旅程及介面设计奖: 3,
						最佳精准数据应用行销奖: 4,
					},
					G: {
						最佳产品创新奖: 1,
						最佳商业转型创新奖: 2,
						最佳科技创新奖: 3,
					},
					H: {
						最佳数据洞察创新奖: 1,
						最佳程序化行销创新奖: 2,
						最佳数据科技创新奖: 3,
					},
					J: {
						最佳影响者行销奖: 1,
						最佳社群经营行销奖: 2,
						最佳品牌合作伙伴行销奖: 3,
						最佳社群内容行销奖: 4,
					},
					undefined: { 选择参加项目: '' },
				};
				if ($FormData.sub_type !== '选择参加项目')
					$FormData.sub_type =
						objSubType[$FormData.main_type][$FormData.sub_type] || '';
			}else{
					let objMainType = {
					影片創意類: 'A',
					行動行銷類: 'B',
					數位技術類: 'C',
					娛樂行銷類: 'D',
					品牌體驗與促動行銷類: 'E',
					電子商務行銷類: 'F',
					創新類: 'G',
					數據創新類: 'H',
					社群與影響者行銷類: 'J',
				};
				$FormData.main_type = objMainType[$FormData.main_type] || '';

				let objSubType = {
					A: {
						最佳影片創意獎: 1,
						最佳短影片創意獎: 2,
						最佳互動影片創意獎: 3,
						最佳社群影片創意獎: 4,
						最佳科技運用影片創意獎: 5,
					},
					B: {
						'最佳APP及行動網路行銷獎': 1,
						最佳遊戲及遊戲置入行銷獎: 2,
						最佳適地性促動行銷獎: 3,
						最佳行動廣告行銷獎: 4,
					},
					C: {
						'最佳使用者體驗（UX）獎': 1,
						'最佳loT 應用獎': 2,
						'最佳AI 應用獎': 3,
						最佳體驗技術運用獎: 4,
						最佳數位技術應用獎: 5,
						最佳互動體驗裝置與技術運用獎: 6,
					},
					D: {
						最佳內容娛樂獎: 1,
						最佳音樂娛樂獎: 2,
						'最佳遊戲/置入娛樂獎': 3,
						最佳運動娛樂獎: 4,
					},
					E: {
						最佳通路服務體驗行銷獎: 1,
						最佳數位平台整合行銷獎: 2,
						最佳跨媒體整合行銷獎: 3,
						最佳數位廣告創意行銷獎: 4,
						最佳活動網站行銷獎: 5,
						最佳企業網站行銷獎: 6,
						最佳策展行銷獎: 7,
					},
					F: {
						最佳電子商務行銷獎: 1,
						'最佳O2O 行銷獎': 2,
						最佳顧客旅程及介面設計獎: 3,
						最佳精準數據應用行銷獎: 4,
					},
					G: {
						最佳產品創新獎: 1,
						最佳商業轉型創新獎: 2,
						最佳科技創新獎: 3,
					},
					H: {
						最佳數據洞察創新獎: 1,
						最佳程序化行銷創新獎: 2,
						最佳數據科技創新獎: 3,
					},
					J: {
						最佳影響者行銷獎: 1,
						最佳社群經營行銷獎: 2,
						最佳品牌合作夥伴行銷獎: 3,
						最佳社群內容行銷獎: 4,
					},
					undefined: { 選擇參加項目: '' },
				};
				if ($FormData.sub_type !== '選擇參加項目')
					$FormData.sub_type =
						objSubType[$FormData.main_type][$FormData.sub_type] || '';
			}


			$FormData.online = $FormData.online ? 1 : 0;


			let payload = {
				FormData: $FormData,
				reqURL: '/portfolios.ashx',
				resTitle: '新增成功',
				resText: '',
			};
			// console.log($FormData);
			this.util_request(payload)
				.then(data => {
					var region = document.cookie.replace(/(?:(?:^|.*;\s*)region\s*\=\s*([^;]*).*$)|^.*$/, "$1");
					if (region == 'cn'){
							$nuxt._router.push('/cn/u/list');
					}else{
							$nuxt._router.push('/tw/u/list');
					}
				})
				.catch(err => {});
		},
		onclickRegistrationFile(e) {
			if ($(e.target).is('input')) {
				return;
			}
			$('#RegistrationFile').click();
		},
		onchangeRegistrationFile() {
			this.Form.registration_file = this.$refs.RegistrationFile.files[0];
			this.RegistrationFile =
				'已選取：' + this.$refs.RegistrationFile.files[0].name;
		},
		onclickExpositionFile(e) {
			if ($(e.target).is('input')) {
				return;
			}
			$('#ExpositionFile').click();
		},
		onchangeExpositionFile() {
			this.Form.exposition_file = this.$refs.ExpositionFile.files[0];
			this.ExpositionFile =
				'已選取：' + this.$refs.ExpositionFile.files[0].name;
		},
		deleteCoremember(index) {
			this.Form.coremember.splice(index, 1);
		},
		updateSelectedCategory(category) {
			this.Form.sub_type = '選擇參加項目';
			if (this.$i18n.locale == 'tw'){
				this.$store.commit(
					'worksCategory/updateSelectedCategory',
					category
				);
			}else{
				this.$store.commit(
					'worksCategoryCN/updateSelectedCategory',
					category
				);
			}
		},
		canvelEdit() {
			$nuxt._router.push('list');
		},
		onchangeS_Date(e) {
			// if (new Date(e.target.value) < new Date(e.target.min)) {
			// 	this.Form.s_date = e.target.min;
			// } else if (new Date(e.target.value) > new Date(e.target.max)) {
			// 	this.Form.s_date = e.target.max;
			// } else {
			// 	this.Form.s_date = e.target.value;
			// }
			this.Form.s_date = e.target.value;
		},
		// onchangeE_Date(e) {
			// if (new Date(e.target.value) < new Date(e.target.min)) {
			// 	this.Form.e_date = e.target.min;
			// }  else {
			// 	this.Form.e_date = e.target.value;
			// }
			// this.Form.e_date = e.target.value;
		// },
	},
	beforeCreate() {},
	created() {},

	mounted() {
		this.$nextTick(() => {
			// 初始化下拉選單
			this.initSelect();
		});
	},
	// middleware: 'dateValidate',
};
</script>

<style scoped>
@import '~/assets/css/regist.css';
.labelFocused {
	color: #b88b01;
	font-size: 13px;
	top: -30px;
	pointer-events: none;
}
.form-upload {
	width: 48%;
	margin-right: 10px;
	vertical-align: top;
}
.upload {
	height: auto;
	padding-bottom: 20px;
}
.upload .upload-item {
	vertical-align: baseline;
	width: 22%;
}
.film-wrap{
	display: inline-block;
	vertical-align: text-bottom;
	width: 72%;
}

</style>

