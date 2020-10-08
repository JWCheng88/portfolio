import Vue from 'vue';

export const state = () => ({
	visited: false,
	list: undefined,
	detail: {
		content: '',
		created_at: '2017/10/19',
		img_name: '13_17.jpg',
		n_key: '0xktUAAMp0',
		title: '《冰雪奇緣2》再等2年　雪寶聖誕節先暖場',
	},
});

export const mutations = {
	updateVisited(state) {
		state.visited = true;
		// console.log(state.visited)
	},
	test(state) {
		console.log("test")
	},
	updateList(state, list) {
		Vue.set(state, 'list', list);
	},
	updateDetail(state, detail) {
		// // vue 資料監控規則
		// //https://stackoverflow.com/questions/40860592/vuex-getter-not-updating
		// //https://vuejs.org/v2/guide/list.html#Caveats
		// Vue.set(state, 'detail', Object.assign(detail, {
		// 	imgURL,
		// 	dateMonth,
		// 	dateDay,
		// 	shortenTitle
		// }));
		//state.detail = detail
		Vue.set(state, 'detail', detail);
	},
};
export const getters = {
	getterList: state => {
		return state.list.map(function(item, index, array) {
			item.imgURL =
				(process.env.NODE_ENV !== 'production'
					? 'https://dsaaward.iprefer.com.tw/upload/News/'
					: 'https://www.dsaawards.com/upload/News/') + item.img_name;

			var months = [
				'JAN',
				'FEB',
				'MAR',
				'APR',
				'MAY',
				'JUN',
				'JUL',
				'AUG',
				'SEP',
				'OCT',
				'NOV',
				'DEC',
			];
			item.dateMonth =
				months[parseInt(item.created_at.split('/')[1], 10)];
			item.dateDay = item.created_at.split('/')[2];
			item.shortenTitle =
				item.title.substring(0, 25) +
				(item.title.length > 24 ? '…' : '');
			return item;
		});
	},
	getterDetail: state => {
		let detail = Object.assign({}, state.detail);
		let imgURL =
			(process.env.NODE_ENV !== 'production'
				? 'https://dsaaward.iprefer.com.tw/upload/News/'
				: 'https://www.dsaawards.com/upload/News/') + detail.img_name;
		var months = [
			'JAN',
			'FEB',
			'MAR',
			'APR',
			'MAY',
			'JUN',
			'JUL',
			'AUG',
			'SEP',
			'OCT',
			'NOV',
			'DEC',
		];

		let dateMonth = months[parseInt(detail.created_at.split('/')[1]-1, 10)];
		let dateDay = detail.created_at.split('/')[2];
		let shortenTitle =
			detail.title.substring(0, 25) +
			(detail.title.length > 24 ? '…' : '');

		// console.log(state.detail);
		return Object.assign(detail, {
			imgURL,
			dateMonth,
			dateDay,
			shortenTitle,
		});
	},
};

// dispatch
export const actions = {
	fetchList(context) {
		context.commit('updateList', [
			{
				n_key: 'SYkWWfNItx',
				img_name: 'aaa.jpg',
				title: '我是標題',
				summary: '我是摘要',
				created_at: '2017/10/02',
			},
			{
				n_key: 'SYkWWfNItx',
				img_name: 'aaa.jpg',
				title: '我是標題',
				summary: '我是摘要',
				created_at: '2017/10/02',
			},
			{
				n_key: 'SYkWWfNItx',
				img_name: 'aaa.jpg',
				title: '我是標題',
				summary: '我是摘要',
				created_at: '2017/10/02',
			},
		]);
	},
};
