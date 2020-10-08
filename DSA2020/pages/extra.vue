<template>
    <div class="wrapper">
        <div class="head head_regist">
            <div class="tittle">
                <span>線上報名</span>
                <span class="sub">REGISTRATION</span>
            </div>
        </div>
        <main class="rule">
            <div class="big">大陆参赛办法说明</div>
            <div class="rule-content">
                <h5>参赛作品规格要求</h5>
                <ul>
                    <li>请将报名资料寄到指定信箱：
                        <a href="mailto:office@dma.org.tw">office@dma.org.tw</a>
                    </li>
                    <li>作品均可同时报名一至多个奖项，不受类别与项目别限制。</li>
                    <li>若作品为其他语言，请提供中文（简、繁体均可）说明。</li>
                    <li>所有作品都必须以PDF方式呈现与说明，内容需包含：目标、策略、创意、执行、结果或成效等说明，详情请见报名文件。</li>
                    <li>报名文件下载处：
                        <a href="https://www.dsaawards.com/2018/RegistrationDocument.zip">https://www.dsaawards.com/2018/RegistrationDocument.zip</a>
                    </li>
                </ul>
                <h5>作品辅助之规格需求</h5>
                <ul>
                    <li>影片类—请上传腾讯视频后，提供连结即可。</li>
                    <li>若有平面类—请提供JPG档案，大小不超过30MB。</li>
                    <li>不接受TIF档案。</li>
                    <li>其余规定请参照官网活动办法说明：
                        <a href="rule.html">https://www.dsaawards.com/2018/rule</a>。</li>
                    <li>奖项赛事内容若有更动，请以官网公告为准。</li>
                </ul>
                <h5>报名费用</h5>
                <p>NTD 3,500 元 / 件 / 项。单一报名单位报名超过十件 (含十件)，再予以八折优惠。</p>
                <h5>缴件方式</h5>
                <p>大陆参赛作品请将报名资料寄到：
                    <a href="mailto:office@dma.org.tw">office@dma.org.tw</a>，报名完成后将以邮件确认。<br> 报名资料须包含以下内容：</p>
                <div class="extra-area">
                    <table>
                        <tr>
                            <td class="extra-left">作品名称（需中英文）</td>
                            <td class="extra-right" colspan="2"></td>
                        </tr>
                        <tr>
                            <td class="extra-left">参赛的
                                <a href="https://www.dsaawards.com/2018/award" target="_blank">类别项目</a>
                            </td>
                            <td class="extra-right2">类别： </td>
                            <td class="extra-right2">项目： </td>
                        </tr>
                        <tr>
                            <td class="extra-left">报名表</td>
                            <td class="extra-right" colspan="2">报名文件请下载后填写</td>
                        </tr>
                        <tr>
                            <td class="extra-left">作品说明 ppt</td>
                            <td class="extra-right" colspan="2">报名文件请下载后填写</td>
                        </tr>
                        <tr>
                            <td class="extra-left">Casefilm </td>
                            <td class="extra-right" colspan="2">请上传腾讯视频后，提供连结</td>
                        </tr>
                        <tr>
                            <td class="extra-left">联络人讯息</td>
                            <td class="extra-right" colspan="2">姓名、职称、电话、手机、电子信箱</td>
                        </tr>
                        <tr>
                            <td class="extra-left">公司讯息</td>
                            <td class="extra-right" colspan="2">公司中 / 英文名称、公司电话、公司地址</td>
                        </tr>
                    </table>
                </div>
                <h5>付款方式</h5>
                <p>收到报名确认信后，将提供支付宝扫码付款。</p>
            </div>
            <a class="btn_extra" href="https://www.dsaawards.com/2018/RegistrationDocument.zip">
                <span class="txt">下載報名文件</span>
                <span class="arrow"></span>
            </a>
        </main>
    </div>
</template>

<script>
import templateRegisterForm from '~/plugins/templateRegisterForm';
export default {
	head() {
		return {
			title: '註冊',
		};
	},
	layout: 'layoutIndex',
	data() {
		return {
			Form: templateRegisterForm(),
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
		// 送出表單
		handleSubmit() {
			this.Form.vcode = grecaptcha.getResponse(this.recaptchaForm);

			/**
			 * Deep Copy
			 * https://ithelp.ithome.com.tw/articles/10193783
			 * Object.assign()
			 * https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
			 */
			let $FormData = Object.assign({}, this.Form);

			// 女士 = 0, 先生 = 1
			$FormData.gender = $FormData.gender === '先生' ? 1 : 0;

			let payload = {
				FormData: $FormData,
				reqURL: '/user.ashx',
				resTitle: '註冊成功',
				resText: '請依驗證信完成註冊程序',
			};
			this.util_request(payload)
				.then(data => {
					$nuxt._router.push('/login');
				})
				.catch(err => {});
		},
		// 綁定地址資料
		updateAreaData(country) {
			this.Form.district = '行政區域*';
			this.$store.commit('registerArea/updateData', country);
		},
		// 綁定郵遞區號
		updateZip(zip) {
			this.Form.zip = zip;
		},
		resetForm() {
			// $('input:radio').prop('checked', false);
			// // 將template建成 function
			// Object.assign(this.Form, templateRegisterForm());

			grecaptcha.reset(this.recaptchaForm);
		},
		onclickFrom(from) {
			if (this.Form.offical_channel === from)
				this.Form.offical_channel = '';
		},
	},
	created() {},

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

			// this.$swal({
			// 	type: 'info',
			// 	title: '努力為您處理中...',
			// 	// text: 'Something went wrong!',
			// 	onOpen: () => {
			// 		this.$swal.enableLoading();

			// 	},
			// }).then(
			// 	function() {
			// 		// 確定要做的事
			// 	},
			// 	function() {
			// 		// 取消要做的事
			// 	}
			// );
		});
	},
};
</script>

<style scoped>
@import '~/assets/css/regist.css';

/* @import '~sweetalert2/src/sweetalert2.scss'; */
</style>

