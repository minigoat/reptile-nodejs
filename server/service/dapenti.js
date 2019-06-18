const superagent = require('superagent');
const charset = require('superagent-charset');
const request = charset(superagent);
const cheerio = require('cheerio');
const _ = require('lodash');

const reptile_dapenti = async function(url) {
    console.log('reptile_dapenti-1');
    try {
        let res = await get(url);
        let newsList = await analyze_dapenti(res);
        // console.log('newsList', newsList);
        console.log('JSON.stringify(newsList)', JSON.stringify(newsList));
        newsList = suppl_unFindIndex(newsList);
        return newsList;
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
    let news = {};
    let $ = cheerio.load(res.text);
    let isEnd = false;
    $('div.oblog_text p').each((idx, ele) => {
        let text = _.trim($(ele).text());
        if (text!= null && text != '') {
            if (_.startsWith(text, '来源：喷嚏网')) {
                isEnd = true;
            }
            if (!isEnd) {
                if (titleRegExp.test(text)) {
                    let index = text.substr(text.indexOf("【") + 1, text.indexOf("】") - text.indexOf("【") - 1);
                    if (news['index'] != null) {
                        newsList.push(news);
                        news = {};
                    }
                    news['title'] = text;
                    news['index'] = index;
                    news['body'] = [];
                } else {
                    if (news['index'] != null) {
                        news['body'].push({
                            type: 'text',
                            content: text
                        });
                    }
                }
            }          
        }
        if ($(ele).find('img').length > 0) {
            if (news['index'] != null) {
                $(ele).find('img').each((imgIdx, imgEle) => {
                    news['body'].push({
                        type: 'img',
                        content: $(imgEle).attr('src')
                    });
                });
            }                      
        }
    });
    newsList.push(news);
    return Promise.resolve(newsList);
}

const suppl_unFindIndex = function(newsList) {
    let unFindIndexList = [];
    let n=1;
    let indexList = [];
    let maxIndex = newsList[newsList.length-1].index;
    _.forEach(newsList, (news, index) => {
        indexList.push(news.index);
    });
    for (let index=maxIndex;index > 0;index--) {
        if (_.indexOf(indexList, `${index}`) == -1) {
            unFindIndexList.push(index);
        }
    }
    console.log(`unFindIndexList:${unFindIndexList}`);
    return newsList;
}


module.exports = reptile_dapenti