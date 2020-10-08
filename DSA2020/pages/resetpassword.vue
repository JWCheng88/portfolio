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
				<input id="email" type="email">
				<a class="btn_device" href="#">
					<span class="txt">送出</span>
					<span class="arrow"></span>
				</a>
			</div>
		</div>

		<div class="login">
			<div class="left"></div>
			<div class="right">
				<div class="wrap_right">
					<h3>重設密碼</h3>
					<p></p>
					<div class="input-container">
						<input class="input" id="password" type="password" pattern=".+" required v-model="Form.password">
						<label class="label" for="password">請輸入新密碼* (6~12個英數混合字元)</label>
					</div>
					<div class="input-container">
						<input class="input" id="passwordAgain" type="password" pattern=".+" required v-model="Form.repassword">
						<label class="label" for="passwordAgain">請再輸入一次新密碼*</label>
					</div>
					<div class="btn_wrap">
						<a href="register" class="btn_login" @click.prevent="handleResetPassword">
							<span class="txt">送出</span>
							<span class="arrow"></span>
						</a>
						<!-- <a href="#" class="btn_login" @click.prevent="handleLogin">
                            <span class="txt">登入</span>
                            <span class="arrow"></span>
                        </a> -->
					</div>
					<!-- <div class="bottom">
                        <a href="#" @click.prevent="openPassword">忘記密碼?</a>
                        <a href="#" @click.prevent="openEmail">重發驗證信</a>
                    </div> -->
				</div>
			</div>
		</div>
	</div>

</template>

<script>
import qs from 'qs';
export default {
	head() {
		return {
			title: '重設密碼',
		};
	},
	layout: 'layoutIndex',

	async fetch({ store, redirect, query, app }) {
		await app
			.$axios({
				method: 'POST',
				data: qs.stringify({
					act_mode: 'v',
					temporary_token: query.ticket || 'nan',
				}),
				url: '/verify.ashx',
			})
			.then(response => {})
			.catch(err => {
				redirect('/');
			});
	},
	data() {
		return {};
	},
	asyncData({ redirect, query, app }) {
		return {
			Form: {
				act_mode: 'resetpassword',
				password: '',
				repassword: '',
				token: query.ticket,
			},
		};
	},

	methods: {
		handleResetPassword() {
			let payload = {
				FormData: this.Form,
				reqURL: '/user.ashx',
				resTitle: '修改成功',
			};
			this.util_request(payload)
				.then(data => {
					$nuxt._router.push('/login');
				})
				.catch(err => {
					console.log(err);
				});
		},
	},
	created() {},
	mounted() {},
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

