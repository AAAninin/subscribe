var koa = require('koa');
var app = new koa();
var router = require('koa-router')();
// CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。
// 下面以koa2-cors为例，
const cors = require('koa2-cors');
const koaBody = require('koa-body');


const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ll873669191@',
    port: '3306',
    database: 'test',
});


// 具体参数我们在后面进行解释
app.use(cors({
    origin: function (ctx) {
        if (ctx.url === '/') {
            return "*"; // 允许来自所有域名请求
        }else if(ctx.url === '/registered.html'){
            return "*";
        }
        return 'http://120.79.14.188:8008'; // 这样就能只允许 http://localhost:8080 这个域名的请求了
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,// maxAge：也是在预请求的时候才会返回，标明了这个预请求的响应所返回信息的最长有效期，对应`Access-Control-Max-Age`
    credentials: true,
    allowMethods: ['POST'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

router.post('/', koaBody(), async function (ctx) {
    // console.log(ctx.request.body);
    let password = await SqlSelect(ctx.request.body);
    if (password == ctx.request.body.password) {
        ctx.body = {
            state: 1,
            data: {}
        }
    } else {
        ctx.body = {
            state: 0,
            data: {}
        }
    }
});

router.post('/registered', koaBody(), async function (ctx) {
    // console.log(ctx.request.body);
    let result = await insertSql(ctx.request.body);
    if(result){
        ctx.body={
            state:1,
            data:{}
        }
    }else{
        ctx.body={
            state:0,
            data:{}
        }
    }
});


function SqlSelect(user) {
    let sql = 'SELECT password FROM  useres  WHERE username  = ?';
    let value = [user.username];
    return new Promise((resolve, reject) => {
        connection.connect();
        connection.query(sql, value, function (err, result) {
            if (err) {
                console.log('[SELECT ERROR] - ', err.message);
                reject();
                return;
            }
            if (result.length == 0) {
                resolve();
            } else {
                resolve(result[0].password.toString());
            }
        });
        connection.end();
    })
}
function insertSql(user){
    let userAddSql = 'INSERT INTO useres(Id,username,password,user) VALUES(0,?,?,?)';
    let userAddSql_Params = [user.username, user.password, user.user];
    return new Promise((resolve,reject)=>{
        connection.query(userAddSql, userAddSql_Params, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                reject();
                return;
            }
            if(result){
                resolve(true);
            }
        });
    })

}


app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, () => {
    console.log('[koa2 demo]server is starting 3000')
});