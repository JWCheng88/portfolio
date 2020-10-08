import Vue from 'vue';

export const state = () => ({
	head: { title: '', eng_title: '' },
	data: {},
});

// commit
export const mutations = {
	commitHead(state, head) {
		state.head.title = head.title;
		state.head.eng_title = head.eng_title;
	},
};

// dispatch
export const actions = {};

export const getters = {};
