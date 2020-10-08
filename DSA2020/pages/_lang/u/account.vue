<template>
	<div class="userWrapper">
		<div class="wrap-form">
			<h5>{{$t('register.loginfo')}}</h5>
			<div class="wrap-data">
				<div class="input-container form-50"  v-if="this.$i18n.locale == 'tw'">
					<input class="input" id="taxid" type="text" pattern=".+" maxlength="8" required v-model="Form.uniformno">
					<label class="label" for="taxid">公司統編*</label>
				</div>
				<div class="input-container form-50"  v-if="this.$i18n.locale == 'cn'">
					<input class="input" id="taxid" type="text" pattern=".+" maxlength="18" required v-model="Form.uniformno">
					<label class="label" for="taxid">社会信用编号*</label>
				</div>
				<div class="password" style="display:none">
					<div class="input-container form-50">
						<input class="input" id="password" type="password" pattern=".+" maxlength="12" required v-model="Form.password">
						<label class="label" for="password">輸入密碼* (6~12個英數混合字元)</label>
					</div>
					<div class="input-container form-50">
						<input class="input" id="passwordAgain" type="password" pattern=".+" maxlength="12" required v-model="Form.repassword">
						<label class="label" for="passwordAgain">再次輸入密碼*</label>
					</div>
				</div>
			</div>
		</div>
		<div class="wrap-form">
			<h5>{{$t('register.personalinfo')}}</h5>
			<div class="wrap-data">
				<div class="select select--white form-50" data-form-type="gender">
					<span class="placeholder">{{Form.gender}}</span>
					<ul>
						<li>先生</li>
						<li>女士</li>
					</ul>
				</div>
				<div class="input-container form-50">
					<input class="input" id="acc-name" type="text" pattern=".+" required maxlength="50" v-model="Form.name">
					<label class="label" for="acc-name">{{$t('register.name')}}*</label>
				</div>
				<div class="input-container form-50">
					<input class="input" id="acc-tittle" type="text" pattern=".+" required maxlength="50" v-model="Form.job_title">
					<label class="label" for="acc-tittle">{{$t('register.job')}}*</label>
				</div>
				<div class="input-container form-50">
					<input class="input" id="acc-phone" type="text" pattern=".+" required maxlength="30" v-model="Form.phone">
					<label class="label" for="acc-phone">{{$t('register.phone')}}*</label>
				</div>
				<div class="input-container form-50">
					<input class="input" id="acc-mobile" type="text" pattern=".+" required maxlength="10" v-model="Form.mobile">
					<label class="label" for="acc-mobile">{{$t('register.mobile')}}*</label>
				</div>
				<div class="input-container form-50">
					<input class="input" id="acc-email" type="text" pattern=".+" required maxlength="100" v-model="Form.email">
					<label class="label" for="acc-email">{{$t('register.email')}}*</label>
				</div>
				<div class="input-container form-50">
					<input class="input" id="acc-backupMail" type="text" pattern=".+" required maxlength="100" v-model="Form.secondemail">
					<label class="label" for="acc-backupMail">{{$t('register.backupmail')}}</label>
				</div>
			</div>
		</div>
		<div class="wrap-form">
			<h5>{{$t('register.companyinfo')}}</h5>
			<div class="wrap-data">
				<div class="input-container form-50">
					<input class="input" id="acc-company" type="text" pattern=".+" required maxlength="100" v-model="Form.company_name">
					<label class="label" for="acc-company">{{$t('register.cname')}}*</label>
				</div>
				<div class="input-container form-50">
					<input class="input" id="acc-companyEng" type="text" pattern=".+" required maxlength="100" v-model="Form.company_engname">
					<label class="label" for="acc-companyEng">{{$t('register.encname')}}*</label>
				</div>
				<div class="input-container form-50">
					<input class="input" id="acc-companyPhone" type="text" pattern=".+" required maxlength="30" v-model="Form.company_phone">
					<label class="label" for="acc-companyPhone">{{$t('register.cphone')}}*</label>
				</div>
				<div class="add-wrap">
					<div class="wrap-data"></div>
					<div v-if="this.$i18n.locale == 'tw'" class="select select--white form-add" data-form-type="county">
						<span class="placeholder">{{Form.county}}</span>
						<ul>
							<li v-for="(value, key, index) in vuexArea.list" :key="index" @click="updateAreaData(key)">
								{{ key }}
							</li>
						</ul>
					</div>
					<div v-if="this.$i18n.locale == 'tw'" class="select select--white form-add" data-form-type="district">
						<span class="placeholder">{{Form.district}}</span>
						<ul>
							<li v-for="(value, key, index) in vuexArea.list[vuexArea.data.selectedCountry]" :key="index" @click="updateZip(value)">
								{{ key }}
							</li>
						</ul>
					</div>
					<div class="input-container form-50">
						<input class="input" id="acc-completeAdd" type="text" pattern=".+" required maxlength="100" v-model="Form.addr">
						<label class="label" for="acc-completeAdd">{{$t('register.address')}}*</label>
					</div>
				</div>
			</div>
		</div>
		<div class="wrap-form">
			<h5>{{$t('register.where')}}</h5>
			<div class="wrap-data">
				<input class="radio-custom" id="from-dsa" name="from-wrap-data" type="radio" value="官網" v-model="Form.offical_channel" @click="onclickFrom('官網')">
				<label class="radio-custom-label radio-country" for="from-dsa">{{$t('register.dsa')}}</label>
				<input class="radio-custom" id="from-dsaFB" name="from-wrap-data" type="radio" value="臉書" v-model="Form.offical_channel" @click="onclickFrom('臉書')">
				<label class="radio-custom-label radio-country" for="from-dsaFB">{{$t('register.fb')}}</label>
				<input class="radio-custom" id="from-dsaEDM" name="from-wrap-data" type="radio" value="EDM" v-model="Form.offical_channel" @click="onclickFrom('EDM')">
				<label class="radio-custom-label radio-country" for="from-dsaEDM">{{$t('register.edm')}}</label>
			</div>
			<div class="from">
				<div class="wrap-from">
					<input class="radio-custom" id="from-r-partner" name="from-r-partner" type="checkbox" v-model="checkboxPartner_name">
					<label class="radio-custom-label radio-from" for="from-r-partner"></label>
					<div class="input-container form-from">
						<input class="input" id="from-partner" type="text" pattern=".+" required v-model="Form.partner_name">
						<label class="label" for="from-partner">{{$t('register.member')}}</label>
					</div>
				</div>
				<div class="wrap-from">
					<input class="radio-custom" id="from-r-third" name="from-r-third" type="checkbox" v-model="checkboxMedia_name">
					<label class="radio-custom-label radio-from" for="from-r-third"></label>
					<div class="input-container form-from">
						<input class="input" id="from-third" type="text" pattern=".+" required v-model="Form.media_name">
						<label class="label" for="from-third">{{$t('register.third')}}</label>
					</div>
				</div>
				<div class="wrap-from">
					<input class="radio-custom" id="from-r-expert" name="from-r-expert" type="checkbox" v-model="checkboxExpert_name">
					<label class="radio-custom-label radio-from" for="from-r-expert"></label>
					<div class="input-container form-from">
						<input class="input" id="from-expert" type="text" pattern=".+" required v-model="Form.expert_name">
						<label class="label" for="from-expert">{{$t('register.expert')}}</label>
					</div>
				</div>
				<div class="wrap-from">
					<input class="radio-custom" id="from-r-dma" name="from-r-dma" type="checkbox" v-model="checkboxDma_member_name">
					<label class="radio-custom-label radio-from" for="from-r-dma"></label>
					<div class="input-container form-from">
						<input class="input" id="from-dma" type="text" pattern=".+" required v-model="Form.dma_member_name">
						<label class="label" for="from-dma">{{$t('register.member')}}</label>
					</div>
				</div>
				<div class="wrap-from">
					<input class="radio-custom" id="from-r-PA" name="from-r-PA" type="checkbox" v-model="checkboxAssociation">
					<label class="radio-custom-label radio-from" for="from-r-PA"></label>
					<div class="select select--white form-from2" data-form-type="association">
						<span class="placeholder">{{Form.association}}</span>
						<ul>
							<li>MMA</li>
							<li>4A</li>
							<li>TAAA</li>
							<li>TIPRA</li>
							<li>TIEA</li>
							<li>TAVRA</li>
						</ul>
					</div>
				</div>
				<div class="wrap-from">
					<input class="radio-custom" id="from-r-other" name="from-r-other" type="checkbox" v-model="checkboxOther">
					<label class="radio-custom-label radio-from" for="from-r-other"></label>
					<div class="input-container form-from">
						<input class="input" id="from-other" type="text" pattern=".+" required v-model="Form.other">
						<label class="label" for="from-other">其他</label>
					</div>
				</div>
			</div>
		</div>

		<div class="google-robot">
			<!-- <img src="img/google.gif"> -->
			<div class="g-recaptcha" id="recaptcha-main"></div>
		</div>
		<div class="btn_wrap btn_wrap2">
			<a class="btn-confirm" href="#" @click.prevent="handleSubmit">
				<span class="txt">{{$t('register.confirm')}}</span>
				<span class="arrow"></span>
			</a>
			<a class="btn-cancel" href="#" @click.prevent="resetForm">
				<span class="txt">{{$t('register.reset')}}</span>
				<span class="arrow"></span>
			</a>
		</div>
	</div>
</template>

<script>
import templateAccountForm from '~/plugins/templateAccountForm';
import qs from 'qs';
export default {
	asyncData({ redirect }) {},
	fetch({ store, params, query, app }) {
		store.commit('user/commitNavibarTitle', '編輯個人資料');
	},
	head() {
		return {
			title: '編輯個人資料',
		};
	},
	layout: 'layoutUser',
	data() {
		return {
			Form: templateAccountForm(),
			recaptchaForm: undefined,
		};
	},
	computed: {
		vuexArea() {
			return this.$store.state.registerArea;
		},

		checkboxPartner_name: {
			get() {
				return this.Form.partner_name === '' ? false : true;
			},
			set(value) {},
		},
		checkboxMedia_name: {
			get() {
				return this.Form.media_name === '' ? false : true;
			},
			set(value) {},
		},
		checkboxExpert_name: {
			get() {
				return this.Form.expert_name === '' ? false : true;
			},
			set(value) {},
		},
		checkboxDma_member_name: {
			get() {
				return this.Form.dma_member_name === '' ? false : true;
			},
			set(value) {},
		},
		checkboxOther: {
			get() {
				return this.Form.other === '' ? false : true;
			},
			set(value) {},
		},
		checkboxAssociation: {
			get() {
				return this.Form.association === '公協會*' ? false : true;
			},
			set(value) {},
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

		// 綁定地址資料
		updateAreaData(country) {
			// this.Form.district = '行政區域*'
			this.$store.commit('registerArea/updateData', country);
		},
		// 綁定郵遞區號
		updateZip(zip) {
			this.Form.zip = zip;
		},
		getAccountData() {
			this.$axios({
				method: 'POST',
				data: qs.stringify({ act_mode: 'myinfo' }),
				url: '/user.ashx',
			})
				.then(response => {
					this.Form = Object.assign(response.data.user, {
						act_mode: 'register_edit',
						gender: response.data.user.gender === 'True' ? '先生' : '小姐',
					});
					// console.log(response.data.user.gender)
				})
				.catch(err => {});
		},
		handleSubmit() {
			this.Form.vcode = grecaptcha.getResponse(this.recaptchaForm);

			let $FormData = Object.assign({}, this.Form);
			// console.log($FormData);
			// 女士 = 0, 先生 = 1
			$FormData.gender = $FormData.gender === '先生' ? 1 : 0;

			let payload = {
				FormData: $FormData,
				reqURL: '/user.ashx',
				resTitle: '修改成功',
				resText: '',
			};
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
		resetForm() {
			// $('input:radio').prop('checked', false);
			// this.getAccountData();
			// $('html, body').animate({ scrollTop: 0 }, '400');
			// grecaptcha.reset(this.recaptchaForm);
			$nuxt._router.push('list');
		},
		onclickFrom(from) {
			if (this.Form.offical_channel === from) this.Form.offical_channel = '';
		},
	},
	created() {
		this.getAccountData();
	},

	mounted() {
		this.$nextTick(() => {
			// 初始化下拉選單
			this.initSelect();

			let detectLibrary = window.setInterval(() => {
				if (typeof grecaptcha !== undefined) {
					// 搭配：https://www.google.com/recaptcha/api.js?render=explicit
					this.recaptchaForm = grecaptcha.render('recaptcha-main', {
						sitekey:
							process.env.NODE_ENV !== 'production'
								? '6LdcigETAAAAAEou1LlaY6NWZF3wIDnfLnMURdvy'
								: '6Lf27y8UAAAAAIu-CAB7R-dGq19c6rHKBZKIR8nT',
					});
					window.clearInterval(detectLibrary);
				}
			}, 20);
		});
	},
};
</script>

<style scoped>
@import '~/assets/css/regist.css';
</style>

