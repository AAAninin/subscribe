const Koa = require('koa');
const app = new Koa();
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
        console.log(ctx);
        let postDate = await parsePostData(ctx);
        ctx.body = postDate;
    }else{
        ctx.body = '<h1>404</h1>'
    }
});

function parsePostData(ctx){
    return new Promise((resolve,reject)=>{
        try{
            let postDate = "";
            ctx.req.addListener('data',(data)=>{
                postDate += data;
            });
            ctx.req.on('end',()=>{
                let parseDate = parseQueryStr(postDate);
                resolve(parseDate);
            })
        }catch(error){
            reject(error);
        }
    })
}

function parseQueryStr(queryStr){
    let queryData = {};
    let queryStrList = queryStr.split('&');
    //queryStrList.entries()
    for(let [index,value] of queryStrList.entries()){
        let itemList = value.split('=');
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    }
    return queryData;
}

app.listen(3000,()=>{
    console.log("[koa2 demo] app server is starting");
})