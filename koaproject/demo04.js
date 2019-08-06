const Koa = require('koa');
const bodrParser = require('koa-bodyparser');
const app = new Koa();
app.use(bodrParser());

app.use(async (ctx)=>{
    if(ctx.url === '/'&& ctx.method === 'GET'){
        let html = `
            <h1>koa2 request POST</h1>
            <form method="POST" action="/"> 
                <p>usernmae</p>
                <input name="username" type="text"></input>
                <p>age</p>
                <input name="age" type="text"></input>
                <p>website</p>
                <input name="website" type="text"></input>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body = html;
    }else if(ctx.url === '/'&& ctx.method === 'POST'){
        console.log(ctx.request);
        let postDate = ctx.request.body;
        ctx.body = postDate;
    }else{
        ctx.body = '<h1>404</h1>'
    }
});


app.listen(3000,()=>{
    console.log("[koa2 demo] app server is starting");
})