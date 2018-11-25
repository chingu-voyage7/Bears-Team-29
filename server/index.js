const Koa = require('koa');
const app = new Koa();
const koaStatic = require('koa-static');

app.use(koaStatic('dist'));

console.log('Server running on port 2205');

app.listen(2205);
