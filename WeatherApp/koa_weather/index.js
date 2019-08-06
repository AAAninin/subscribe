const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
require('./server/schema/weather');
const Weather = mongoose.model('Weather');
const app = new Koa();
//引入connect
const { connect, initSchemas } = require('./server/init.js');
var fs = require('fs');
var file = "./cities.json";
var result = JSON.parse(fs.readFileSync(file));
console.log(result.cities[2]);
const request = require('request');

//立即执行函数
; (async () => {
    await connect()
    initSchemas()
    var ss = function () {
        for (let i = 2; i < result.cities.length; i++) {
            (function (i) {
                setTimeout(() => {
                    var url = 'https://free-api.heweather.net/s6/weather/now?key=db561a21b54842328c9d944420c22408&location=' + result.cities[i].city;
                    url = encodeURI(url);
                    request(url, function (error, response, body) {
                        if (!error && response.statusCode == 200) {
                            var s = JSON.parse(body);
                            const Weather = mongoose.model('Weather');
                            var url2 = 'https://free-api.heweather.net/s6/weather/lifestyle?key=db561a21b54842328c9d944420c22408&location=' + result.cities[i].city;
                            url2 = encodeURI(url2);
                            request(url2, function (errors, responses, bodys) {
                                if (!errors && responses.statusCode == 200) {
                                    var as = JSON.parse(bodys);
                                    let oneWeather = new Weather({ Weatherwhere: result.cities[i].city, Tmp: s.HeWeather6[0].now.tmp, Text: s.HeWeather6[0].now.cond_txt, WindDir: s.HeWeather6[0].now.wind_dir, WindSc: s.HeWeather6[0].now.wind_sc, Txt: as.HeWeather6[0].lifestyle[1].txt })
                                    oneWeather.save().then(() => {
                                        console.log('插入成功')
                                    })
                                }
                            })
                        } else {
                            console.log('失败');
                            console.log(error);
                        }
                    })
                }, 1000 * i)
            })(i)
        }
    }
    setInterval(()=>{
        ss();
    },24*60*60*1000);
    function check() {
        for (let i = 2; i < result.cities.length; i++) {
            Weather.findOne({ Weatherwhere: result.cities[i].city }, function (err, result) {
                if (result) {
                    var d1 = new Date();
                    var day = 1000 * 60 * 60 * 24;
                    var diff = Math.ceil((d1.getTime() - result.Date.getTime()) / (day));
                    if (diff > 7) {
                        result.remove();
                    }
                }
            })
        }
    }
    check()
})()
let home = require('./home');
let cities = require('./cities');
let message = require('./message');
let livemessage = require('./livemessage');

let router = new Router();
router.use('/Weather', home.routes(), cities.routes(), message.routes(), livemessage.routes());

app.use(bodyParser())
    .use(router.allowedMethods())
    .use(cors())
    .use(router.routes());


app.listen(3000, () => {
    console.log('starting at port 3000');
});