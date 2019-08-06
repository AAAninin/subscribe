const Router = require('koa-router');
let message = new Router();
const request = require('request');


message.post('/message',async(ctx)=>{
    //显示详细信息
    // console.log(ctx.request.body.cities);
    var data = ctx.request.body.cities;
    var back;
    console.log(data);
    var promisel = new Promise((resolve, reject) => {
        var url = 'https://free-api.heweather.net/s6/weather/forecast?key=db561a21b54842328c9d944420c22408&location=' + data;
        url = encodeURI(url);
        request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var s = JSON.parse(body);
                back = s.HeWeather6[0].daily_forecast;
                resolve();

            } else {
                console.log('失败');
                console.log(error);
            }
        })
    })
    await promisel.then(() => {
        ctx.body = back;

    })
});

module.exports = message;