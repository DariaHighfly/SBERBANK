import {
    changeFilters,
    deleteFilters,
} from './mutation-types';

export default {
  [changeFilters]: ({ commit }, payload) => {
    const {name, value} = payload;
    commit(changeFilters, {name, value});
  },
  [deleteFilters]: ({ commit }, payload) => {
    commit(deleteFilters, payload);
  },
};
