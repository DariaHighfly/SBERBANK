import {
  changeFilters,
  deleteFilters,
} from './mutation-types';

export default {
  [changeFilters]: (state, payload) => {
    const {name, value} = payload;
    let oldVal = state.filters[name].length;
    state.filters[name] = value;
    let newVal = state.filters[name].length;
    if (oldVal === 0 && newVal !== 0) {
      state.order.push(name);
    } else if (oldVal !== 0 && newVal === 0) {
      state.order = state.order.filter(elem => {
          return elem !== name;
      });
    }
  },
  [deleteFilters]: (state, payload) => {
    state.filters[payload] = [];
    state.order = state.order.filter(elem => {
      return elem !== payload;
    });
  },
};
