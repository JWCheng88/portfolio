<template>
	<div class="wrapper">
		<!-- 忘記密碼popup -->
		<transition>
			<div class="popup-forget" v-show="showPassword">
				<div class="login forget-login">
					<div class="left"></div>
					<div class="right">
						<a class="btn-close" href="#" @click.prevent="closePopupConent">
							<span class="close por"></span>
						</a>
						<div class="wrap_right">
							<h3>{{$t('login.pop.foget')}}</h3>
							<p>{{$t('login.pop.discription')}}</p>
							<div class="input-container">
								<input id="account-forget" class="input" type="text" pattern=".+" required v-model="Form.pw.uniformno" />
								<label class="label" for="account-forget">{{$t('login.pop.account')}}</label>
							</div>
							<div class="input-container">
								<input id="password-forget" class="input" type="email" pattern=".+" required v-model="Form.pw.email" />
								<label class="label" for="password-forget">{{$t('login.pop.email')}}</label>
							</div>
							<div class="google-robot2">
								<!-- <img src="img/google.gif" alt=""> -->
								<div class="g-recaptcha" id="recaptcha-pw"></div>
							</div>
							<a href="#" class="btn_login btn-center" @click.prevent="handlePassword">
								<span class="txt">{{$t('login.pop.confirm')}}</span>
								<span class="arrow"></span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</transition>
		<!-- 重發註冊驗證信popup -->
		<transition>
			<div class="popup-forget" v-show="showEmail">
				<div class="login forget-login">
					<div class="left"></div>
					<div class="right">
						<a class="btn-close" href="#" @click.prevent="closePopupConent">
							<span class="close por"></span>
						</a>
						<div class="wrap_right">
							<h3>{{$t('login.pop.resend')}}</h3>
							<p>{{$t('login.pop.discription')}}</p>
							<div class="input-container">
								<input id="account-resend" class="input" type="text" pattern=".+" required v-model="Form.em.uniformno" />
								<label class="label" for="account-resend">{{$t('login.pop.account')}}</label>
							</div>
							<div class="input-container">
								<input id="password-resend" class="input" type="email" pattern=".+" required v-model="Form.em.email" />
								<label class="label" for="password-resend">{{$t('login.pop.email')}}</label>
							</div>
							<div class="google-robot2">
								<!-- <img src="img/google.gif" alt=""> -->
								<div class="g-recaptcha" id="recaptcha-em"></div>
							</div>
							<a href="#" class="btn_login btn-center" @click.prevent="handleEmail">
								<span class="txt">{{$t('login.pop.confirm')}}</span>
								<span class="arrow"></span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</transition>
		<div class="head head_regist">
			<div class="tittle">
				<span>{{$t('login.header')}}</span>
				<span class="sub">REGISTRATION</span>
			</div>
		</div>
		<div class="device-show">
			<div class="content">
				<div class="tittle">{{$t('login.desktop')}}</div>
				<p>{{$t('login.desktop2')}}</p>
				<input id="email" type="email" v-model="inputEmail">
				<a class="btn_device" :href="`mailto:${this.inputEmail}?subject=2020 DSA 數位奇點獎，活動報名&body=${encodeURIComponent('報名網址: ')}${encodeURIComponent('https://www.dsaawards.com/2020/login')}`">
					<span class="txt">送出</span>
					<span class="arrow"></span>
				</a>
			</div>
		</div>

		<div class="login">
			<div class="left"></div>
			<div class="right">
				<div class="wrap_right">
					<h3>{{$t('login.title')}}</h3>
					<p>{{$t('login.discription')}}</p>					
					<div class="input-container">
						<input id="account" class="input" type="text" pattern=".+" required v-model="Form.login.uniformno" />
						<label class="label" for="account">{{$t('login.account')}}</label>
					</div>
					<div class="input-container">
						<input id="password" class="input" type="password" pattern=".+" required v-model="Form.login.password" v-on:keyup.13="handleLogin" />
						<label class="label" for="password">{{$t('login.password')}}</label>
					</div>
					<div class="btn_wrap">
						<a href="register" class="btn_login" @click.prevent="handleRegister">
							<span class="txt">{{$t('login.register')}}</span>
							<span class="arrow"></span>
						</a>
						<a href="#" class="btn_login" @click.prevent="handleLogin">
							<span class="txt">{{$t('login.login')}}</span>
							<span class="arrow"></span>
						</a>
					</div>
					<div class="bottom">
						<a href="#" @click.prevent="openPassword">{{$t('login.foget')}}</a>
						<a href="#" @click.prevent="openEmail">{{$t('login.resend')}}</a>
					</div>
          <div class="extra"><p>{{$t('login.question')}} <a href="mailto:office@dma.org.tw">{{$t('login.contact')}}</a></p></div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
export default {
	head() {
		return {
			title: '登入',
		};
	},
	layout: 'layoutIndex',
	data() {
		return {
			showPassword: false,
			showEmail: false,
			inputEmail: '',
			Form: {
				login: {
					act_mode: 'login',
					user_type: this.$i18n.locale, //抓取語言
					uniformno: '',
					password: '',
					// uniformno: '42656367',
					// password: 'wg0123',
				},

				pw: {
					act_mode: 'forget',
					user_type: this.$i18n.locale, //抓取語言
					uniformno: '',
					email: '',
					// uniformno: '42656367',
					// email: 'jun_huang@webgene.com.tw',
					recaptcha: '',
					vcode: '',
				},
				em: {
					act_mode: 'resendverify',
					user_type: this.$i18n.locale, //抓取語言
					// uniformno: '42656367',
					// email: 'jun_huang@webgene.com.tw',
					uniformno: '',
					email: '',
					recaptcha: '',
					vcode: '',
				},
			},
		};
	},
	computed: {
		loginURL() {
			return process.env.NODE_ENV !== 'production'
				? 'https://www.dsaawards.com/2020/login'
				: 'https://www.dsaawards.com/2020/login';
		},
	},
	methods: {
		handleRegister() {
			var nowDate = new Date();
			var deadline = new Date('2020-09-20')
			if(nowDate > deadline){
				this.$swal({
					type: 'warning',
					title: '活動已截止報名'
				})
			}else{
				// this.util_LinkTo('register');
				if(this.$i18n.locale == 'cn'){
					this.util_LinkTo('/cn/register');
				}else{
					this.util_LinkTo('/tw/register');
				}
			}
			
		},
		handleLogin() {
			// console.log(this.Form);
			// this.Form.login.user_type = this.$i18n.locale;
			let payload = {
				FormData: this.Form.login,
				reqURL: '/user.ashx',
				resTitle: '登入成功',
			};
			// console.log(this.Form.login)
			this.util_request(payload)
				.then(data => {
					// $nuxt._router.push('/');
					// $nuxt._router.push('u/list');
					if(this.$i18n.locale == 'cn'){
						document.cookie = "region=cn; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
						$nuxt._router.push('/cn/u/list');
					}else{
						document.cookie = "region=tw; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
						$nuxt._router.push('/tw/u/list');
					}
					
				})
				.catch(err => {
					
				});
		},
		handlePassword() {
			this.Form.pw.vcode = grecaptcha.getResponse(this.Form.pw.recaptcha);
			let payload = {
				FormData: this.Form.pw,
				reqURL: '/user.ashx',
				resTitle: '完成',
				resText: '請至信箱收取密碼信件',
			};
			this.util_request(payload)
				.then(data => {})
				.catch(err => {
					console.log(err);
				});
		},
		handleEmail() {
			this.Form.em.vcode = grecaptcha.getResponse(this.Form.em.recaptcha);
			let payload = {
				FormData: this.Form.em,
				reqURL: '/user.ashx',
				resTitle: '完成',
				resText: '請至信箱收取驗證信',
			};
			this.util_request(payload)
				.then(data => {})
				.catch(err => {
					console.log(err);
				});
		},
		renderRecaptcha(type) {
			// console.log(!this.Form[type].recaptcha);
			this.Form[type].recaptcha === ''
				? (this.Form[type].recaptcha = grecaptcha.render('recaptcha-' + type, {
						sitekey:
							process.env.NODE_ENV !== 'production'
								? '6LdcigETAAAAAEou1LlaY6NWZF3wIDnfLnMURdvy'
								: '6Lf27y8UAAAAAIu-CAB7R-dGq19c6rHKBZKIR8nT',
								// ? '6LdcigETAAAAAEou1LlaY6NWZF3wIDnfLnMURdvy' :'6LcbCLIZAAAAADpAR8lFWUgnlU28M9eE3YosRmDV',
								// : '6Lf27y8UAAAAAIu-CAB7R-dGq19c6rHKBZKIR8nT', 正式改回這個
								// : '6LcbCLIZAAAAADpAR8lFWUgnlU28M9eE3YosRmDV', 測試站
				  }))
				: grecaptcha.reset(this.Form[type].recaptcha);
		},
		openPassword() {
			this.showPassword = true;
			this.renderRecaptcha('pw');
		},
		openEmail() {
			this.showEmail = true;
			this.renderRecaptcha('em');
		},
		closePopupConent() {
			this.showPassword = false;
			this.showEmail = false;
		},
	},
	created() {},
	mounted() {
	},
};
</script>

<style scoped>
@import '~/assets/css/regist.css';
.popup-forget {
	position: fixed;
	z-index: 1000;
}

.v-leave-to,
.v-enter {
	opacity: 0;
}

.v-enter-active,
.v-leave-active {
	transition: opacity 0.3s;
}




@media only screen and (max-device-width: 1024px) {
	.device-show {
		height: 100vh;
	}
}
</style>

