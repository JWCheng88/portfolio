<template>
    <header>
        <nav>
            <div class="logo">
                <a href="" @click.prevent="util_LinkTo('/')">
                    <img src="~assets/svg/logo_white.svg" width="100%" alt="">
                </a>
            </div>
            <div class="menu2">
                <ul>
                    <li>
                        <!-- <a href="#" @click.prevent="$swal({type: 'info',title: '敬請期待',text:'(๑•̀ω•́)ノ'})">報名文件</a> -->
                        <a href="/2020/2020_DSA_Template.pptx">報名文件</a>
                    </li>
                    <li>
                        <!-- <a href="login" @click.prevent="util_LinkTo('/tw/u/list')">線上報名</a> -->
                        <a href="login" @click.prevent="handleLogin">線上報名</a>
                    </li>
                    <li>
                        <a href="https://www.dsaawards.com/juryLogin/" target="_blank">線上評選</a>
                    </li>
                </ul>
            </div>
            <div class="menu">
                <ul>
                    <li>
                        <a href="news" @click.prevent="util_LinkTo('/news')">最新消息</a>
                    </li>
                    <li>
                        <a href="award" @click.prevent="util_LinkTo('/award')">獎項介紹</a>
                    </li>
                    <li>
                        <a href="rule" @click.prevent="util_LinkTo('/rule')">活動辦法</a>
                    </li>
                    <li>
                        <a href="grading" @click.prevent="util_LinkTo('/grading')">評審辦法</a>
                    </li>
                    <li>
                        <a href="seminar" @click.prevent="util_LinkTo('/seminar')">論壇活動</a>
                    </li>
                    <li>
                        <a href="seminar" @click.prevent="util_LinkTo('/gold')">歷年得獎作品</a>
                    </li>
                    <li>
                        <a href="sponsors" @click.prevent="util_LinkTo('/sponsors')">贊助單位</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="clear"></div>
        <!-- 手機 -->
        <div class="menu-toggle" @click.prevent="handleBur">
            <a href="javascript:;">
                <div class="one"></div>
                <div class="two"></div>
                <div class="three"></div>
            </a>
        </div>
        <div class="menu-section">
            <div class="menu-m">
                <div class="tittle" @click="handleLi">
                    <img src="~assets/svg/logo_white.svg" width="100%" alt="" @click.prevent="util_LinkTo('/')">
                </div>
                <div class="line"></div>
                <ul class="hidden" @click="handleLi">
                    <li>
                        <a href="news" @click.prevent="util_LinkTo('/news')">最新消息</a>
                    </li>
                    <li>
                        <a href="award" @click.prevent="util_LinkTo('/award')">獎項介紹</a>
                    </li>
                    <li>
                        <a href="rule" @click.prevent="util_LinkTo('/rule')">活動辦法</a>
                    </li>
                    <li>
                        <a href="grading" @click.prevent="util_LinkTo('/grading')">評審辦法</a>
                    </li>
                    <li>
                        <a href="seminar" @click.prevent="util_LinkTo('/seminar')">論壇活動</a>
                    </li>
                    <li>
                        <a href="seminar" @click.prevent="util_LinkTo('/gold')">歷年得獎作品</a>
                    </li>
                    <li>
                        <a href="sponsors" @click.prevent="util_LinkTo('/sponsors')">贊助單位</a>
                    </li>
                    <li class="m2">
                        <a href="/2020/2020_DSA_Template.pptx">報名文件</a>
                    </li>
                    <li class="m2">
                        <a href="login" @click.prevent="handleLogin">線上報名</a>
                    </li>
                    <li class="m2">
                        <!-- <a href="https://www.dsaawards.com/juryLogin/">線上評選</a> -->
                        <a href="#" @click.prevent="$swal({type: 'info',title: '敬請期待',text:'(๑•̀ω•́)ノ'})">線上評選</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
export default {
	head() {
		return {
			script: [
				// { src: './js/nav.js' },
				// { src: './js/particles.js', defer: true },
			],
		};
	},
	methods: {
		// 控制手機漢堡
		handleBur(e) {
			$(e.currentTarget).toggleClass('on');
			$('.menu-section').toggleClass('on');
		},
		handleLi() {
			$('.menu-toggle').click();
        },
        handleLogin(){
            var region = document.cookie.replace(/(?:(?:^|.*;\s*)region\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            if (region == 'cn'){
                $nuxt._router.push('/cn/u/list');
            }else{
                $nuxt._router.push('/tw/u/list');
            }
            // return this.$swal({
            //     type: 'warning',
            //     title: '報名開放時間為8/3<br>請稍作等待唷(๑•̀ㅂ•́)و✧',
            // })
        }
	},
	created() {},

	mounted() {},
};
</script>

<style>
</style>

