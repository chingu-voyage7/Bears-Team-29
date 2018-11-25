const Koa = require('koa');
const koaStatic = require('koa-static');

const config = require('./config');

const app = new Koa();

app.use(koaStatic('dist'));

app.listen(config.port);
console.log(`Server running on port ${config.port}`);
