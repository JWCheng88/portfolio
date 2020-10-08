import Vue from 'vue';

export const state = () => ({
	navibar: { title: '' },
	data: {},
});

// commit
export const mutations = {
	commitNavibarTitle(state, title) {
		state.navibar.title = title;
	},
	commitDataUser(state, user) {
		Vue.set(state.data, 'user', user);
	},
};

// dispatch
export const actions = {};

export const getters = {};
