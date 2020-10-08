<template>
    <div class="wrapper">
        <div class="trans_bg">
            <div class="trans_iphone">
                <div class="trans_center"><img src="~assets/img/iphone_ok.png">
                    <p>請將裝置轉至直式<br>體驗最佳瀏覽方式</p>
                </div>
            </div>
        </div>
        <indexHeader />

        <!-- content-->
        <div class="head head_regist">
            <div class="tittle">
                <span>{{$t('header.title')}}</span>
                <span class="sub">REGISTRATION</span>
            </div>
        </div>
        <main class="wrap_content">
            <!--welcome-->
            <div class="welcomeBox">
                <ul>
                    <li class="avatar">
                        <span class="icon-avatar"></span>
                    </li>
                    <li class="welcome">{{$t('header.welcome')}}，
                        <span class="name">{{vuexUser.data.user.name}}</span>
                    </li>
                    <li>
                        <a class="btn-logout" href="#" @click.prevent="handleLogout">
                            <span class="txt">登出</span>
                            <span class="arrow"></span>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- my works-->
            <div class="navibar">
                <h3>{{vuexUser.navibar.title}}</h3>
                <!-- tw nav -->
                <div class="btnBox" v-if="this.$i18n.locale=='tw'">
                    <!--active: navibar_focus -->
                    <nuxt-link class="btn_navibar" to="/tw/u/list" @click.prevent="util_LinkTo('/tw/u/list')">
                        <span class="txt">我的參賽作品</span>
                        <span class="arrow"></span>
                    </nuxt-link>
                    <nuxt-link class="btn_navibar" to="/tw/u/worksAdd" @click.prevent="util_LinkTo('/tw/u/worksAdd')" v-if="['lang-u-worksAdd'].indexOf($route.name) > -1">
                        <span class="txt">添加作品</span>
                        <span class="arrow"></span>
                    </nuxt-link>
                    <nuxt-link class="btn_navibar" to="/tw/u/worksDetail" @click.prevent="util_LinkTo('/tw/u/worksDetail')" v-if="['lang-u-worksDetail'].indexOf($route.name) > -1">
                        <span class="txt">作品詳情</span>
                        <span class="arrow"></span>
                    </nuxt-link>
                    <nuxt-link class="btn_navibar" to="/tw/u/account" @click.prevent="util_LinkTo('/tw/u/account')">
                        <span class="txt">編輯個人資料</span>
                        <span class="arrow"></span>
                    </nuxt-link>
                    <nuxt-link class="btn_navibar" to="/tw/u/changePassword" @click.prevent="util_LinkTo('/tw/u/changePassword')">
                        <span class="txt">修改密碼</span>
                        <span class="arrow"></span>
                    </nuxt-link>
                </div>
                <!-- cn nav -->
                <div class="btnBox" v-if="this.$i18n.locale=='cn'">
                    <!--active: navibar_focus -->
                    <nuxt-link class="btn_navibar" to="/cn/u/list" @click.prevent="util_LinkTo('/cn/u/list')">
                        <span class="txt">我的参赛作品</span>
                        <span class="arrow"></span>
                    </nuxt-link>
                    <nuxt-link class="btn_navibar" to="/cn/u/worksAdd" @click.prevent="util_LinkTo('/cn/u/worksAdd')" v-if="['lang-u-worksAdd'].indexOf($route.name) > -1">
                        <span class="txt">添加作品</span>
                        <span class="arrow"></span>
                    </nuxt-link>
                    <nuxt-link class="btn_navibar" to="/cn/u/worksDetail" @click.prevent="util_LinkTo('/cn/u/worksDetail')" v-if="['lang-u-worksDetail'].indexOf($route.name) > -1">
                        <span class="txt">作品详情</span>
                        <span class="arrow"></span>
                    </nuxt-link>
                    <nuxt-link class="btn_navibar" to="/cn/u/account" @click.prevent="util_LinkTo('/cn/u/account')">
                        <span class="txt">编辑个人资料</span>
                        <span class="arrow"></span>
                    </nuxt-link>
                    <nuxt-link class="btn_navibar" to="/cn/u/changePassword" @click.prevent="util_LinkTo('/cn/u/changePassword')">
                        <span class="txt">修改密码</span>
                        <span class="arrow"></span>
                    </nuxt-link>
                </div>
            </div>

            <transition name='layoutuser' mode=''>
                <nuxt/>
            </transition>

        </main>
        <indexFooter />
    </div>
</template>
<script>
import indexHeader from '~/components/indexHeader.vue';
import indexFooter from '~/components/indexFooter.vue';
import qs from 'qs';
export default {
	data() {
		return {};
	},
	async fetch({ store, params, app }) {
		// layout not fire fetch
	},
	head() {
		return {
			title: '會員專區',
		};
	},
	computed: {
		vuexUser() {
			return this.$store.state.user;
		},
	},
	components: {
		indexHeader,
		indexFooter,
	},
	methods: {
		handleLogout() {
			let payload = {
				FormData: { act_mode: 'logout' },
				reqURL: '/user.ashx',
				resTitle: '登出',
				resText: '',
			};
			this.util_request(payload)
				.then(data => {
                    console.log(data);
                    // document.cookie = "region=; expires=Thu, 01 Jan 1970 00:00:00 GMT"; //刪除cookie
					$nuxt._router.push('/registration');
					//$nuxt._router.push('list');
				})
				.catch(err => {
					console.log(err);
				});
		},
	},
	mounted() {},
	middleware: 'auth',
};
</script>
<style scoped>
@import '~/assets/css/regist.css';
/* transition */
.layoutuser-enter-active
/* ,.layoutuser-leave-active  */
 {
	transition: opacity 0.4s;
}

.layoutuser-enter,
.layoutuser-leave-to {
	opacity: 0;
}
</style>

