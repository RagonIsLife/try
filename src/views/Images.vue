<template>
    <div id = "vuex">
        <b-loading :active.sync="getLoadingTitleData"></b-loading>
        <ul>
            <img v-for="(user, index) in getImageData" :key="index" :src="user.url">
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
        ...mapGetters('taskModule', ['getImageData', 'getLoadingImageData'])
    },
    methods: {
        ...mapActions('taskModule', ['requestImageData'])
    },
    mounted() {
        console.log("lifecycle hook fires up!");
        this.requestImageData();
    }
}
</script>

<style lang="scss" scoped>
ul {
    list-style-type: disc;
}
</style>