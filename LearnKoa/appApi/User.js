const Router = require ('koa-router')
const mongoose = require('mongoose');
const User = require('../database/schema/User');
let router = new Router()
router.get('/',async(ctx)=>{
    //
    ctx.body="这是用户操作首页"
})
// router.get('/register',async(ctx)=>{
//     ctx.body="用户注册接口"
// })
router.post('/register',async(ctx)=>{
    //取得Model
    const User = mongoose.model('User');
    //把从前端接收的POST数据封装成一个新的user对象
    let newUser = new User(ctx.request.body);
    // 用mongoose的save方法直接存储，然后判断是否成功，返回相应的结果
    await newUser.save().then(()=>{
        ctx.body={
            code:200,
            message:'注册成功'
        }
    }).catch(error=>{
        console.log(2);
        ctx.body={
            code:500,
            message:error
        }
    })
    console.log(ctx.body);
})
//登陆接口
router.post('/login',async(ctx)=>{
    let loginUser = ctx.request.body;
    console.log(loginUser)
    let userName = loginUser.userName
    let password = loginUser.password
    //引入User的model
    const User = mongoose.model('User')
    //查找用户名是否存在，如果存在开始比对密码
    await User.findOne({userName:userName}).exec().then(async(result)=>{
        console.log(result);
        if(result){
            let newUser = new User();
            await newUser.comparePassword(password,result.password)
            .then((isMatch)=>{
                ctx.body={
                    code:200,
                    message:isMatch
                }
            })
            .catch((error)=>{
                console.log(error);
                ctx.body={
                    code:500,
                    message:error
                }
            })
            console.log('3');
        }else{
            ctx.body={
                code:200,
                message:'用户不存在'
            }
        }
    }).catch((error)=>{
        console.log(error);
        ctx.body={
            code:500,
            message:error
        }
    })
})
module.exports=router;