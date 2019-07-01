<template>
    <div class="rich_media_content">
        <div>
            <p style="margin-bottom: 15px;max-width: 100%;min-height: 1em;letter-spacing: 0.544px;white-space: normal;background-color: rgb(255, 255, 255);box-sizing: border-box !important;overflow-wrap: break-word !important;"><strong style="max-width: 100%;letter-spacing: 0.544px;line-height: 25.6px;font-size: 20px;box-sizing: border-box !important;overflow-wrap: break-word !important;">每天一图说</strong><br style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;"></p>
            <p style="margin-bottom: 15px;max-width: 100%;min-height: 1em;letter-spacing: 0.544px;white-space: normal;background-color: rgb(255, 255, 255);box-sizing: border-box !important;overflow-wrap: break-word !important;"><strong style="max-width: 100%;font-size: 20px;box-sizing: border-box !important;overflow-wrap: break-word !important;">让我们更清楚地了解这个世界</strong></p>
            <blockquote style="color: rgba(0, 0, 0, 0.5);max-width: 100%;letter-spacing: 0.544px;white-space: normal;background-color: rgb(255, 255, 255);box-sizing: border-box !important;overflow-wrap: break-word !important;"><p style="margin-bottom: 15px;max-width: 100%;min-height: 1em;box-sizing: border-box !important;overflow-wrap: break-word !important;"><span style="max-width: 100%;color: rgb(178, 178, 178);font-size: 10px;line-height: 25.6px;box-sizing: border-box !important;overflow-wrap: break-word !important;">以下内容，有可能引起内心冲突或愤怒等不适症状。若有此症状自觉被误导者，请绕行。若按捺不住看后症状特别明显，可自行前往CCAV等欢乐 频道进行综合调理。其余，概不负责 。</span></p><p style="margin-bottom: 15px;max-width: 100%;min-height: 1em;box-sizing: border-box !important;overflow-wrap: break-word !important;"><span style="max-width: 100%;letter-spacing: 0.544px;color: rgb(178, 178, 178);font-size: 10px;box-sizing: border-box !important;overflow-wrap: break-word !important;">本文转摘的各类事件，均来自于公开发表的国内媒体报道。引用的个人或媒体评论旨在传播各种声音，并不代表我们认同或反对其观点。</span><span style="max-width: 100%;letter-spacing: 0.544px;color: rgb(178, 178, 178);font-size: 10px;line-height: 25.6px;box-sizing: border-box !important;overflow-wrap: break-word !important;">欢迎转载，请和谐评论！</span></p></blockquote>
            <p style="margin-bottom: 15px;"><br></p>
        </div>
        <div class="content_body">
            <div class="news" v-for="(news, newIndex) of depentiList" :key="`new-${newIndex}`">
                <p style="margin-bottom: 15px;"><strong><span style="font-size: 16px;">{{ news.title }}</span></strong><span style="font-size: 16px;"></span></p>                
                <div class="news_body">
                    <template v-for="({type, content}, contIndex) of news.body">
                        <div class="news_body_text" v-if="type == 'text'" :key="`new-${newIndex}-${contIndex}-text`">
                            <p style="margin-bottom: 15px;"><span style="font-size: 16px;">{{ content }}</span></p>
                        </div>
                        <div class="news_body_img" v-if="type == 'img'" :key="`new-${newIndex}-${contIndex}-img`">
                            <p style="margin-bottom: 15px;"><img :src="content" /></p>                            
                        </div>
                    </template>
                </div>
                <p style="margin-bottom: 15px;"><br></p>
            </div>
        </div>
        <div class="footer_body" style="margin-top: 30px;">
            <p><span style="font-size: 12px;color: rgb(136, 136, 136);">感谢来源：</span><span style="font-size: 12px;color: rgb(136, 136, 136);">喷嚏网</span><br></p>
            <p style="text-align: center;"><img class="rich_pages  __bg_gif" data-copyright="0" data-ratio="0.5859375" data-src="https://mmbiz.qpic.cn/mmbiz/V3df1Cq1lMnHW7AB7HmYT1wjLqCc8jelJCicCa5BPgpjJU9A215d2XhwEKZWOtFs2gAzUGvlzB8ibtMibAfcLdyZQ/640?wx_fmt=gif" data-type="gif" data-w="640" style="width: 640px !important; height: auto !important; visibility: visible !important;" _width="640px" src="https://mmbiz.qpic.cn/mmbiz/V3df1Cq1lMnHW7AB7HmYT1wjLqCc8jelJCicCa5BPgpjJU9A215d2XhwEKZWOtFs2gAzUGvlzB8ibtMibAfcLdyZQ/640?wx_fmt=gif&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1" data-order="0" data-fail="0"></p>
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
<style scoped>
.rich_media_content {
    overflow: hidden;
    color: #333;
    font-size: 17px;
    word-wrap: break-word;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    text-align: justify;
    position: relative;
    z-index: 0;
}
</style>