const superagent = require('superagent');
const charset = require('superagent-charset');
const request = charset(superagent);
const cheerio = require('cheerio');

const reptile_dapenti = async function(url) {
    console.log('reptile_dapenti-1');
    try {
        let res = await get(url);
        let text = await analyze_dapenti(res);
        return text[0];
    } catch(error) {
        return error;
    }    
}

const get = (url) => {
    return request.get(url).charset('gbk').then(res => {
        console.log('抓取depenti图说成功');
        return Promise.resolve(res);
     })
     .catch(err => {
        return Promise.reject(`抓取depenti图说失败, err:${err}`);
     });
};

const analyze_dapenti = function(res) {
    let pList = [];
    let $ = cheerio.load(res.text);
    $('div.oblog_text p').each((idx, ele) => {
        pList.push($(ele).text());
    });
    return Promise.resolve(pList);
}


module.exports = reptile_dapenti