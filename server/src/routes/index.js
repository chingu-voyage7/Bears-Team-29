import Router from 'koa-router';
import productRoute from './products';

const router = new Router({prefix: '/api'});

router.get('/health', ctx => (ctx.body = 'OK'));
router.use('', productRoute.routes());

export default router;
