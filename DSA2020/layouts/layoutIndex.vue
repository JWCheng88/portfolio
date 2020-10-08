<template>
    <div>
        <div class="trans_bg">
            <div class="trans_iphone">
                <div class="trans_center"><img src="~assets/img/iphone_ok.png">
                    <p>請將裝置轉至直式<br>體驗最佳瀏覽方式</p>
                </div>
            </div>
        </div>
        <indexHeader />
        

        <transition name='layout' mode=''>
            <!-- <keep-alive> -->
                <nuxt/>
            <!-- </keep-alive> -->
        </transition>

        <indexFooter />
    </div>
</template>
<script>
import indexHeader from '~/components/indexHeader.vue';
import indexFooter from '~/components/indexFooter.vue';
export default {
	components: {
		indexHeader,
		indexFooter,
	},
};
</script>
<style>
/* transition */
.layout-enter-active {
	transition: opacity 0.4s;
}

.layout-enter,
.layout-leave-to {
	opacity: 0;
}
</style>

