const Router = require('koa-router');
let cities = new Router();
const request = require('request');


cities.post('/cities', async (ctx) => {
    //添加城市时显示信息
    // console.log(ctx.request.body.cities);
    var data = ctx.request.body.cities;
    var back;
    var promisel = new Promise((resolve, reject) => {
        // var url = 'https://api.seniverse.com/v3/weather/now.json?key=SH6wv94CQfttVMe5W&location=' + data;
        var url = 'https://free-api.heweather.net/s6/weather/now?key=db561a21b54842328c9d944420c22408&location=' + data;
        url = encodeURI(url);
        request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var s = JSON.parse(body);
                back = s.HeWeather6[0].now;
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
cities.get('/cities', async (ctx) => {
    //添加城市时显示信息
    // console.log(ctx.request.body);
    ctx.body = 'hello我'

})

module.exports = cities;