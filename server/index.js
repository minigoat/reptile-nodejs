const Koa = require('koa');

const app = new Koa();

// app.use(async (ctx, next) => {
//     await next();
//     ctx.response.type = 'text/html';
//     ctx.response.body = '<h1>Hello World!</h1>'
// });
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

const controller = require('./controller');
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');