import store from '../../store'
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.component('tabs', {
        name: 'app',
        store,
        components: {
        },
        data() {
            return {
                namesFilterList: {
                    Segment: 'Сегмент',
                    Year: 'Год',
                    Month: 'Месяц',
                    Vertical: 'Вертикаль',
                    Affiliate: 'Филиал',
                    Status: 'Cтатус',
                },
            };
        },
        computed: {
            ...mapGetters({
                selected: 'filters/getFilters',
                order: 'filters/getOrder',
            })
        },
        methods: {
            getArray(currentFilter) {
                let arr = [];
                for (let i = 0; i !== currentFilter.length; ++i) {
                    arr.push(currentFilter[i].name);
                }
                return arr.join(', ');
            },
            removeFilter(type) {
                let path = 'filters/deleteFilters';
                this.$store.dispatch(path, type, { root: true });
            }
        }
    }
);
