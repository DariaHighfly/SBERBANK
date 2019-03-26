<style src="./tabs.css" scoped lang="css"></style>
<template>
    <div>
        <div class="tabs">
                <span class="tabsList"
                     v-for="currentFilter in order"
                     v-bind:key="currentFilter">
                    <span v-if="order.includes(currentFilter)">
                        <button class="tab" v-on:click="removeFilter(currentFilter)"
                                :title="'Выбранные фильтры - ' + namesFilterList[currentFilter] + ': ' +  getArray(selected[currentFilter])">
                            {{ getArray(selected[currentFilter]) }}
                        </button>
                    </span>
            </span>
        </div>
            <img class="pic" src="../../images/nice_pic.png">
    </div>
</template>

<script src="./tabs.js">
</script>
