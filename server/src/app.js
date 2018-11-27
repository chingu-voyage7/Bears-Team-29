import Koa from 'koa';
import koaStatic from 'koa-static';

import {port} from './config';
import indexRoute from './routes';
import './database';

const app = new Koa();

app.use(indexRoute.routes()).use(indexRoute.allowedMethods());

app.use(koaStatic('dist'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
