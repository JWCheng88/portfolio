<template>
	<div class="wrapper">
		
		<div class="head head_regist">
			<div class="tittle">
				<span>線上報名</span>
				<span class="sub">REGISTRATION</span>
			</div>
		</div>
		<div class="device-show">
			<div class="content">
				<div class="tittle">線上報名請使用桌機作業</div>
				<p>請輸入email以便獲取資訊</p>
				<input id="email" type="email" v-model="inputEmail">
				<a class="btn_device" :href="`mailto:${this.inputEmail}?subject=2019 DSA 數位奇點獎，活動報名&body=${encodeURIComponent('報名網址: ')}${encodeURIComponent('https://www.dsaawards.com/2020/login')}`">
					<span class="txt">送出</span>
					<span class="arrow"></span>
				</a>
			</div>
		</div>
		
		<div class="login">
			<div class="left"></div>
			<div class="right">
				<div class="wrap_right">
					<h3>線上報名<br> <span>REGISTRATION</span></h3>
					
					<div class="btn_wrap">
						<a href="#" class="btn_login" @click.prevent="twRegister">
							<span class="txt">台灣報名</span>
							<span class="arrow"></span>
						</a>
						<a href="#" class="btn_login" @click.prevent="cnRegister">
							<span class="txt">大陆报名</span>
							<span class="arrow"></span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
export default {
	head() {
		return {
			title: '報名',
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
					uniformno: '',
					password: '',
					// uniformno: '42656367',
					// password: 'wg0123',
				},

				pw: {
					act_mode: 'forget',
					uniformno: '',
					email: '',
					// uniformno: '42656367',
					// email: 'jun_huang@webgene.com.tw',
					recaptcha: '',
					vcode: '',
				},
				em: {
					act_mode: 'resendverify',
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
		twRegister() {
			this.util_LinkTo('/tw/login');
			// return this.$swal({
			// 		type: 'warning',
			// 		title: '報名開放時間為7/26<br>請稍作等待唷(๑•̀ㅂ•́)و✧',
			// })
		},
		cnRegister() {
			this.util_LinkTo('/cn/login');
			// return this.$swal({
			// 		type: 'warning',
			// 		title: '報名開放時間為7/26<br>請稍作等待唷(๑•̀ㅂ•́)و✧',
			// })
		},
		handleLogin() {
			// console.log(this.Form);
			let payload = {
				FormData: this.Form.login,
				reqURL: '/user.ashx',
				resTitle: '登入成功',
			};
			this.util_request(payload)
				.then(data => {
					// $nuxt._router.push('/');
					$nuxt._router.push('/u/list');
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

h3{
	text-align: center;
}

h3 span{
	font-weight: 400;
	font-size: 22px;
}

.btn_wrap a, .btn_wrap a:first-child {
	margin: 30px auto 0px;
	display: block;
}
@media only screen and (max-device-width: 1024px) {
	.device-show {
		height: 100vh;
	}
}
</style>

