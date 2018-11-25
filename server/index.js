const Koa = require('koa');
const app = new Koa();

app.use(async ctx => (ctx.body = 'Hello world'));

console.log('Server running on port 2205');

app.listen(2205);
