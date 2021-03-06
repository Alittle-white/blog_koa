// const bodyParser = require('koa-bodyparser')
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
  //设置允许跨域
  // ctx.set('Access-Control-Allow-Origin', '*')

  // // ctx.set('Access-Control-Allow-Origin', '*') //允许来自所有域名请求(不携带cookie请求可以用*，如果有携带cookie请求必须指定域名)
  // ctx.set("Access-Control-Allow-Origin", "http://172.21.40.112:8080"); // 只允许指定域名http://localhost:8080的请求
  // ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE') // 设置所允许的HTTP请求方法
  // ctx.set(
  //   'Access-Control-Allow-Headers',
  //   'x-requested-with, accept, origin, content-type'
  // ) //字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段.
  // // 服务器收到请求以后，检查了Origin、Access-Control-Request-Method和Access-Control-Request-Headers字段以后，确认允许跨源请求，就可以做出回应。
  // ctx.set('Access-Control-Allow-Credentials', true) // 该字段可选。它的值是一个布尔值，表示是否允许发送Cookie。默认情况下，Cookie不包括在CORS请求之中。
  // // ctx.set('Access-Control-Allow-Credentials', false) // 该字段可选。它的值是一个布尔值，表示是否允许发送Cookie。默认情况下，Cookie不包括在CORS请求之中。
  // // 当设置成允许请求携带cookie时，需要保证"Access-Control-Allow-Origin"是服务器有的域名，而不能是"*";

  ctx.body = {
    id,
    code: 1,
    msg: '操作成功'
  }
})

router.post('/post', ctx => {
  //设置允许跨域
  // ctx.set('Access-Control-Allow-Origin', '*')

  // // ctx.set('Access-Control-Allow-Origin', '*') //允许来自所有域名请求(不携带cookie请求可以用*，如果有携带cookie请求必须指定域名)
  // ctx.set("Access-Control-Allow-Origin", "http://172.21.40.112:8080/"); // 只允许指定域名http://localhost:8080的请求
  // ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE') // 设置所允许的HTTP请求方法
  // ctx.set(
  //   'Access-Control-Allow-Headers',
  //   'x-requested-with, accept, origin, content-type'
  // ) //字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段.
  // // 服务器收到请求以后，检查了Origin、Access-Control-Request-Method和Access-Control-Request-Headers字段以后，确认允许跨源请求，就可以做出回应。
  // ctx.set('Access-Control-Allow-Credentials', true) // 该字段可选。它的值是一个布尔值，表示是否允许发送Cookie。默认情况下，Cookie不包括在CORS请求之中。
  // // ctx.set('Access-Control-Allow-Credentials', false) // 该字段可选。它的值是一个布尔值，表示是否允许发送Cookie。默认情况下，Cookie不包括在CORS请求之中。
  // // 当设置成允许请求携带cookie时，需要保证"Access-Control-Allow-Origin"是服务器有的域名，而不能是"*";

  ctx.body = {
    code: 200,
    postParams: ctx.request.body,
    msg: '操作成功'
  }
})

module.exports = router
