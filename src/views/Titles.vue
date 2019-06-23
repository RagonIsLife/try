<template>
    <div id = "vuex">
        <b-loading :active.sync="getLoadingTitleData"></b-loading>
        <ul>
            <li v-for="(user, index) in getTitleData" :key="index">
                {{user.title}}
            </li>
        </ul>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex' 
export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters('taskModule', ['getTitleData', 'getLoadingTitleData'])
    },
    methods: {
        ...mapActions('taskModule', ['requestTitleData'])
    },
    mounted() {
        console.log("lifecycle hook fires up!");
        this.requestTitleData();
    }
}
</script>

<style lang="scss" scoped>
ul {
    list-style-type: disc;
}
</style>