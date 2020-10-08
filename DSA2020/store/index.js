export const strict = false
export const state = () => ({
	counter: 0,
	news:'',

	locales: ['tw', 'cn'],
  locale: 'tw'
});

export const mutations = {
	increment(state) {
		//state.counter++;
	},

	SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
};

