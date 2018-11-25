import Koa from 'koa';
import koaStatic from 'koa-static';

import {port} from './config';
import './database';

const app = new Koa();

app.use(koaStatic('dist'));

app.listen(port);
console.log(`Server running on port ${port}`);
