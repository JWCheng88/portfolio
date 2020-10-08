<template>
	<div class="userWrapper">
		<div class="wrap-form">
			<div class="wrap-data">
				<div class="input-container form-50">
					<input class="input" id="oldPassword" type="password" pattern=".+" required v-model="Form.oldpassword">
					<label class="label" for="oldPassword">{{$t('password.old')}}*</label>
				</div>
				<div class="password">
					<div class="input-container form-50">
						<input class="input" id="password" type="password" pattern=".+" required v-model="Form.password">
						<label class="label" for="password">{{$t('password.new')}}</label>
					</div>
					<div class="input-container form-50">
						<input class="input" id="passwordAgain" type="password" pattern=".+" required v-model="Form.repassword">
						<label class="label" for="passwordAgain">{{$t('password.renew')}}*</label>
					</div>
				</div>
			</div>
		</div>

		<div class="btn_wrap btn_wrap2">
			<a class="btn-confirm" href="#" @click.prevent="handleChangePasswod">
				<span class="txt">{{$t('password.confirm')}}</span>
				<span class="arrow"></span>
				<span class="arrow"></span>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	fetch({ store, params, query, app }) {
		store.commit('user/commitNavibarTitle', '修改密碼');
	},
	head() {
		return {
			title: '更改密碼',
		};
	},
	layout: 'layoutUser',
	data() {
		return {
			Form: {
				act_mode: 'changepassword',
				oldpassword: '',
				password: '',
				repassword: '',
			},
		};
	},
	methods: {
		handleChangePasswod() {
			let alertTitle, alertContent;
			if (this.$i18n.locale == 'cn'){
				alertTitle = '密码修改完成';
			}else{
				alertTitle = '密碼修改完成';
			}

			let payload = {
				FormData: this.Form,
				reqURL: '/user.ashx',
				resTitle: alertTitle,
			};
			this.util_request(payload)
				.then(data => {
					var region = document.cookie.replace(/(?:(?:^|.*;\s*)region\s*\=\s*([^;]*).*$)|^.*$/, "$1");
					if (region == 'cn'){
							$nuxt._router.push('/cn/u/list');
					}else{
							$nuxt._router.push('/tw/u/list');
					}
					// $nuxt._router.push('/u/list');
				})
				.catch(err => {
					
				});
		},
	},
	created() {
		
	},

	mounted() {},	
};
</script>

<style scoped>
@import '~/assets/css/regist.css';
</style>

