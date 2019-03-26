import {
    getFilters,
    getOrder
} from './mutation-types'

export default {
    [getFilters]: (state) => {
        return state.filters;
    },
    [getOrder]: (state) => {
        return state.order;
    },
};