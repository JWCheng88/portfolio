import Vue from 'vue';
import swal from 'sweetalert2';
const swalPlugin = {};

swalPlugin.install = function(Vue) {
	Vue.prototype.$swal = swal.mixin({
		// buttonsStyling: false,
		showCloseButton: false,
		confirmButtonText: 'Ok',
		// 外面點擊取消 防連續點擊
		allowOutsideClick: false,
		// 防止 ESC
		allowEscapeKey: false,
	});
};

Vue.use(swalPlugin);
