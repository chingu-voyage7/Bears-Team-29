import Router from 'koa-router';

const router = new Router({
  prefix: '/products',
});

router.get('/', (ctx, next) => {
  ctx.body = 'Product list';
});

router.post('/', (ctx, next) => {
  ctx.body = 'Create product';
});

router.get('/:id', (ctx, next) => {
  ctx.body = `Get product with id ${ctx.params.id}`;
});

router.put('/:id', (ctx, next) => {
  ctx.body = `Update product with id ${ctx.params.id}`;
});

export default router;
