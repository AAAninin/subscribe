const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router({
    prefix:'/jspang'
});

router  
    .get('/',(ctx,next)=>{
        ctx.body = 'Hello Jspang';
    })
    .get('/todo',(ctx,next)=>{
        ctx.body = 'Todo page';
    })

app
    .use(router.routes())
    .use(router.allowedMethods());



app.listen(3000,()=>{
    console.log('[koa2 demo]server is starting');
})