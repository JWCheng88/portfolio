<template>
    <div class="wrapper">
        <div class="head head_sponsors">
            <div class="tittle">
                <span>贊助單位</span>
                <span class="sub">SPONSORS</span>
            </div>
        </div>
        <main class="sponsors">
            <div class="sponsors-content">
                <h5>主辦單位</h5>
                <div class="logo-content">
                    <ul>
                        <li><img src="~assets/img/logo/logo-01-01.jpg"></li>
                    </ul>
                </div>
                <h5>奇點夥伴</h5>
                <div class="logo-content">
                    <ul>
                        <!-- <li><img src="~assets/img/sponsors_logo/2/FB.png"></li> -->
                        <li><img src="~assets/img/sponsors_logo/2/google.png"></li>
                        <li><img src="~assets/img/sponsors_logo/2/line.png"></li>
                    </ul>
                </div>
                <h5>創新夥伴</h5>
                <div class="logo-content">
                    <ul> 
                        <!-- <li><img src="~assets/img/sponsors_logo/3/LOREAL.png"></li>  -->
                        <li><img src="~assets/img/sponsors_logo/3/cacafly.png"></li>
                        <!-- <li><img src="~assets/img/sponsors_logo/3/deloitte.png"></li>  -->
                        <!-- <li><img src="~assets/img/sponsors_logo/3/tianyen.png"></li>  -->
                    </ul>
                </div> 
                <!-- <h5>推動夥伴</h5>
                <div class="logo-content">
                    <ul>
                        <li><img src="~assets/img/sponsors_logo/4/TAmedia.png"></li> 
                        <li><img src="~assets/img/sponsors_logo/4/epfl.png"></li> 
                    </ul>
                </div>  -->
                <h5>媒體夥伴</h5>
                <div class="logo-content">
                    <ul>
                        <!-- <li><img src="~assets/img/sponsors_logo/5/adm.png"></li> -->
                        <!-- <li><img src="~assets/img/sponsors_logo/5/ideas.png"></li> -->
                        <!-- <li><img src="~assets/img/sponsors_logo/5/Logo3.png"></li> -->
                        <li><img src="~assets/img/sponsors_logo/2/yahoo.png"></li>
                        <li><img src="~assets/img/sponsors_logo/5/bnext.png"></li>
                        <li><img src="~assets/img/sponsors_logo/5/the_media_group.png"></li>
                    </ul>
                </div>
                <h5>創意夥伴</h5>
                <div class="logo-content">
                    <ul>
                        <li><img src="~assets/img/sponsors_logo/6/webgene.png"></li>
                    </ul>
                </div>
                <h5>技術夥伴</h5>
                <div class="logo-content">
                    <ul>
                        <li><img src="~assets/img/sponsors_logo/8/Digital_service.png"></li>
                        <li><img src="~assets/img/sponsors_logo/8/accuHit.png"></li>
                        <li><img src="~assets/img/sponsors_logo/8/SalesFrontier.png"></li>
                    </ul>
                </div>
                <!-- <h5>協辦單位</h5>
                <div class="logo-content">
                    <ul>
                        <li><img src="~assets/img/sponsors_logo/7/AAAA.png"></li>
                        <li><img src="~assets/img/sponsors_logo/7/TAAA_Logo.png"></li>
                        <li><img src="~assets/img/sponsors_logo/7/TiEA_LOGO.png"></li>
                        <li><img src="~assets/img/sponsors_logo/7/MBAT LOGO.png"></li>
                    </ul>
                </div> -->
            </div>
        </main>
    </div>
</template>

<script>
export default {
	asyncData({ redirect }) {},
	head() {
		return {
			title: '贊助單位',
		};
	},
	layout: 'layoutIndex',
	data() {
		return {};
	},
	methods: {},
	created() {},

	mounted() {},
};
</script>

<style scoped>
@import '~/assets/css/sponsors.css';
</style>

