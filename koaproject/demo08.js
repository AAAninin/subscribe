const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');

//子路由
let home = new Router();
    home
        .get('/jspang',async(ctx)=>{
            ctx.body = "home Jspang page";
        })
        .get('/todo',async(ctx)=>{
            ctx.body = "Home todo page";
        })

let page = new Router();
    page
        .get('/jspang',async(ctx)=>{
            ctx.body = "page Jspang page";
        })
        .get('/todo',async(ctx)=>{
            ctx.body = "page todo page";
        })
//父路由
let router = new Router();
router.use('/home',home.routes(),home.allowedMethods());
router.use('/page',page.routes(),page.allowedMethods());


app
    .use(router.routes())
    .use(router.allowedMethods());



app.listen(3000,()=>{
    console.log('[koa2 demo]server is starting');
})