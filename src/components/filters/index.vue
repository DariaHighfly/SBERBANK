<style src="./filters.css" scoped lang="css"></style>
<template>
    <div class="filters">
        <div class="filterList">
            <div class="currentFilter"
                 v-for="(currentFilter, key) in selected"
                 v-bind:key="key">
                <p class="title">{{namesFilterList[key]}}</p>
                <multi-select
                        @input="filterOnChange(key, $event)"
                        :value="selected[key]"
                        :options="options"
                        :filters="filters"
                        :btnLabel="btnLabel"
                        search
                        historyButton
                        :selectOptions="checkFilter[key]"
                >
                </multi-select>
            </div>
        </div>
    </div>
</template>

<script src="./filters.js">
</script>

