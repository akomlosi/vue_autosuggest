export const state = {
	result : {}
};

export const mutations = {
	search (state, { searchText, response, hasResults }) {
		state.result = {
			searchText,
			response,
			hasResults
		};
	}
}