const reptile_dapenti = require('../service/dapenti');
let dapenti = async (ctx, next) => {
    let result = await reptile_dapenti('http://www.dapenti.com/blog/more.asp?name=xilei&id=141266');
    ctx.response.body = await '<h1>Hello World!</h1>';
};

let app_second = async (ctx, next) => {
    ctx.response.body = '<h1>Hello Second!</h1>';
};

module.exports = {
    'GET /': dapenti,
    'POST /sigin': app_second
};