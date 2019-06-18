const superagent = require('superagent');
const charset = require('superagent-charset');
const request = charset(superagent);
const cheerio = require('cheerio');
const _ = require('lodash');

const reptile_dapenti = async function(url) {
    console.log('reptile_dapenti-1');
    try {
        let res = await get(url);
        let text = await analyze_dapenti(res);
        // let n=0;
        // for (let item of text) {
        //     console.log("n:" + n);
        //     console.log(item);
        //     n++;
        // }
        return text[0];
    } catch(error) {
        return error;
    }    
}

const get = (url) => {
    return request.get(url).charset('gbk').then(res => {
        console.log('Crawling depenti Success');
        return Promise.resolve(res);
     })
     .catch(err => {
        return Promise.reject(`Crawling depenti Fail, err:${err}`);
     });
};

const titleRegExp = new RegExp('^【\\d+】');
const analyze_dapenti = function(res) {
    let newsList = [];
    let pList = [];
    let news = {};
    let $ = cheerio.load(res.text);
    $('div.oblog_text p').each((idx, ele) => {
        let text = _.trim($(ele).text());
        if (text!= null && text != '') {
            if (titleRegExp.test(text)) {
                news['title'] = text;
                news['content'] = [];
            }

            pList.push($(ele).text());
            console.log(`idx:${idx}`);
            console.log(text);
            
        }
        if ($(ele).find('img').length > 0) {            
            console.log(`idx:${idx}`);
            $(ele).find('img').each((imgIdx, imgEle) => {
                console.log(`图片src=${$(imgEle).attr('src')}`);
            });            
        }
    });
    return Promise.resolve(pList);
}


module.exports = reptile_dapenti