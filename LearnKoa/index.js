const Koa = require('koa')
const app = new Koa()
const mongoose = require('mongoose')
const {connect , initSchemas} = require('./database/init.js')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')


let user = require('./appApi/User')
let router = new Router();

//立即执行函数
;(async () =>{
    await connect()
    initSchemas()
})()
app.use(bodyParser())
app.use(cors())
router.use('/user',user.routes());
app.use(router.routes())
app.use(router.allowedMethods())
app.use(async(ctx)=>{
    ctx.body = '<h1>hello Koa2</h1>'
})
app.listen(3000,()=>{
    console.log('[Server] starting at port 3000')
})