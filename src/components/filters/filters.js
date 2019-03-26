import store from '../../store'
import Vue from "vue"
import MultiSelect from 'vue-multi-select'
import 'vue-multi-select/dist/lib/vue-multi-select.min.css'
import { mapGetters } from "vuex";

export default Vue.component('filters', {
    name: 'app',
    store,
    components: {
        MultiSelect,
    },
    data() {
        return {
            search: 'Search things',
            btnLabel: 'Выбрано параметров: ',
            name: 'first group',
            namesFilterList: {
                Segment: 'Сегмент',
                Year: 'Год',
                Month: 'Месяц',
                Vertical: 'Вертикаль',
                Affiliate: 'Филиал',
                Status: 'Cтатус',
            },
            checkFilter: {
                Segment: [
                        { name: "Корпоративный" },
                        { name: 'Масс' },
                        { name: 'Вне сегмента' },
                    ],
                Year: [
                    { name: '2010' }, { name: '2011' },
                    { name: '2012' }, { name: '2013' },
                    { name: '2014' }, { name: '2015' },
                    { name: '2016' }, { name: '2017' },
                    { name: '2018' }, { name: '2019' },
                ],
                Month: [
                    { name: 'Январь' },
                    { name: 'Февраль' },
                    { name: 'Март' },
                    { name: 'Апрель' },
                    { name: 'Май' },
                    { name: 'Июнь' },
                    { name: 'Июль' },
                    { name: 'Август' },
                    { name: 'Сентябрь' },
                    { name: 'Октябрь' },
                    { name: 'Ноябрь' },
                    { name: 'Декабрь' }
                ],
                Vertical: [
                    { name: 'ВСП' },
                    { name: 'УПС' },
                    { name: 'Эквайринг' },
                ],
                Affiliate: [
                    { name: '564' },
                    { name: '678' },
                    { name: '679' },
                    { name: '683' },
                    { name: '685' },
                    { name: '690' },
                ],
                Status: [
                    { name: 'Активный' },
                    { name: 'Пассивный' },
                    { name: 'Заморожен' },
                ],
            },
            filters: [{
                nameAll: 'Выбрать все',
                nameNotAll: 'Сбросить все',
                func(elem) {
                    return elem.name;
                },
            }
            ],
            options: {
                multi: true,
                groups: false,
                labelName: "name",
            },
        };
    },
    computed: {
        ...mapGetters({
            selected: 'filters/getFilters'
        })
    },

    methods: {
        filterOnChange(name, value) {
            let path = 'filters/changeFilters';
            this.$store.dispatch(path, {name, value}, { root: true });
        }
    },
    watch: {

    }
}
);
