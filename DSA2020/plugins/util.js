import Vue from 'vue';
import qs from 'qs';

Vue.mixin({
	methods: {
		// $nuxt_router.push
		util_LinkTo(path) {
			$nuxt._router.push(path);
		},
		util_request(payload) {
			return new Promise((resolve, reject) => {
				let $FormData = Object.assign({}, payload.FormData);
				let form_data = new FormData();

				for (var key in payload.FormData) {
					form_data.append(key, payload.FormData[key]);
				}
				// console.log(form_data)
				if (payload.FormData.email && payload.FormData.email.search(/^(?:[a-zA-Z0-9]+[_\-\+\.]?)*[a-zA-Z0-9]+@(?:([a-zA-Z0-9]+[_\-]?)*[a-zA-Z0-9]+\.)+([a-zA-Z]{2,})+$/)==-1){
					this.$swal({
						type: 'error',
						title: '請輸入正確信箱格式'
					})
				}else{
					this.$swal({
						type: 'info',
						title: '拼命為您處理中...',
						onOpen: () => {
							this.$swal.enableLoading();
							setTimeout(() => {
								this.$axios({
									method: 'POST',
									data: form_data,
									url: payload.reqURL,
								})
									.then(response => {
										this.$swal({
											type: 'success',
											title: payload.resTitle,
											text:
												payload.resText === undefined
													? '(๑•̀ㅂ•́)و✧'
													: payload.resText,
										}).then(() => {
											resolve(response);
											// $nuxt._router.push('/login');
										});
									})
									.catch(response => {
										console.log(response);
										let text = response.data.message.replace(
											/\\n/g,
											'\n\n'
										);
										this.$swal({
											type: 'error',
											title: text,
										}).then(() => {
											reject(response);
										});
									});
							}, 500);
						},
					});
				}
			});
		},
		util_getParameterByName(name, url) {
			if (!url) url = window.location.href;
			name = name.replace(/[\[\]]/g, '\\$&');
			var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
				results = regex.exec(url);
			if (!results) return null;
			if (!results[2]) return '';
			return decodeURIComponent(results[2].replace(/\+/g, ' '));
		},

		// 數字補上千分位
		util_thousandComma(number) {
			{
				let num = number.toString();
				let pattern = /(-?\d+)(\d{3})/;

				while (pattern.test(num)) {
					num = num.replace(pattern, '$1,$2');
				}
				return num;
			}
		},

		// 字符轉換
		util_convertEscapeChar(obj) {
			var ele = document.createElement('div');
			ele.innerHTML = JSON.stringify(obj);
			return JSON.parse(ele.childNodes[0].nodeValue);
		},
	},
});
