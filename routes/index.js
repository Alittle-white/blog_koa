const bodyParser = require('koa-bodyparser')
const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/get', (ctx, next) => {
  let id = ctx.request.query.id
  ctx.body = {
    id,
    code: 1
  }
})

router.post('/post', ctx => {
  //设置允许跨域
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.body = {
    code: 1,
    postParams: ctx.request.body
  }
})

module.exports = router
