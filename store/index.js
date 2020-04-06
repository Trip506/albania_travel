export const state = () => ({
    blogPosts: [],
    locations: [],
});

export const mutations = {
    setBlogPosts(state, list) {
        state.blogPosts = list;
    },
    setLocations(state, list) {
        state.locations = list;
    },
};

export const actions = {
    async nuxtServerInit({ commit }) {
        let files = await require.context('~/assets/content/blog/', false, /\.json$/);
        let blogPosts = files.keys().map(key => {
            let res = files(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setBlogPosts', blogPosts);

        let files2 = await require.context('~/assets/content/locations/', false, /\.json$/);
        let locations = files2.keys().map(key => {
            let res = files2(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setLocations', locations);
    },
};