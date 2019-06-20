<template>
    <div>
        <div class="news" v-for="(news, newIndex) of depentiList" :key="`new-${newIndex}`">
            <div class="news_title">{{ news.title }}</div>
            <div class="news_body">
                <template v-for="({type, content}, contIndex) of news.body">
                    <div class="news_body_text" v-if="type == 'text'" :key="`new-${newIndex}-${contIndex}-text`">
                        {{ content }}
                    </div>
                    <div class="news_body_img" v-if="type == 'img'" :key="`new-${newIndex}-${contIndex}-img`">
                        <img :src="content" />
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
const axios = require('axios');

export default {
    name: 'Depenti',
    data() {
        return {
            depentiList: [],
        };
    },
    mounted() {
        this.queryDepenti();
    },
    methods: {
        async queryDepenti() {
            const res = await axios({
                method: 'get',
                url: 'http://localhost:3000/dapenti',
            });
            this.depentiList = res.data;
        }
    }
};
</script>
<style lang="less" scoped>
</style>