import filterButtons from './components/filterButtons'
import filters from './components/filters'
import tabs from './components/tabs'

import store from './store'

export default {
    store,
    name: 'app',
    components: {
        filterButtons,
        filters,
        tabs,
    }
}