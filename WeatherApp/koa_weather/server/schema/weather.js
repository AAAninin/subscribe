const mongoose = require('mongoose')    //引入Mongoose
const Schema = mongoose.Schema          //声明Schema
let ObjectId = Schema.Types.ObjectId    //声明Object类型

//创建我们的用户Schema
const weatherSchema = new Schema({
    WeatherId:ObjectId,
    Weatherwhere:String,
    Tmp:String,
    WindDir:String,
    WindSc:String,
    Txt:String,
    Text:String,
    Date:{type:Date,default:Date.now()},
    // lastLoginAt:{type:Date,default:Date.now()}

})


//发布模型
mongoose.model('Weather',weatherSchema)