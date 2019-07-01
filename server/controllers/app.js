const reptile_dapenti = require('../service/dapenti');

let index = async (ctx, next) => {
    ctx.response.body = await '<h1>Hello World!</h1>';
};

let dapenti = async (ctx, next) => {
    let result = await reptile_dapenti('http://www.dapenti.com/blog/more.asp?name=xilei&id=141499');
    ctx.response.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*"
    });
    ctx.response.body=result;
}

let app_second = async (ctx, next) => {
    ctx.response.body = '<h1>Hello Second!</h1>';
};

module.exports = {
    'GET /': index,
    'GET /dapenti': dapenti,
    'POST /sigin': app_second
};