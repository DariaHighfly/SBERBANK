import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import filters from './modules/filters';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        filters,
    },
    strict: debug,
    plugins: debug ? [createLogger()] : [],
});