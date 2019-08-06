const Router = require('koa-router');
const fs = require('fs');
// const http = require('http');
const request = require('request');

let home = new Router();

home.post('/home', async (ctx) => {

    // console.log(ctx.request.body);
    var data = ctx.request.body.cities;
    data = data.substring(1, data.length - 1);
    var dataArray = data.split(',');
    var cities = [];
    var as = 0;
    if(dataArray[0].trim() =="XXXX"){
        as = 1
    }
    for (let i = as; i < dataArray.length; i++) {
        dataArray[i] = dataArray[i].trim();
    }
    var jsobj = {};
    console.log(dataArray);
    var ss = async function () {
        for (let i = as; i < dataArray.length; i++) {
            var promisel = await new Promise((resolve, reject) => {
                var url = 'https://free-api.heweather.net/s6/weather/now?key=db561a21b54842328c9d944420c22408&location=' + dataArray[i];
                // var url = 'https://api.seniverse.com/v3/weather/now.json?key=SH6wv94CQfttVMe5W&location=' + dataArray[i];
                url = encodeURI(url);
                // console.log(url);
                request(url, function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        var s = JSON.parse(body);
                        console.log(s);
                        s.HeWeather6[0].now.city = dataArray[i];
                        cities.push(s.HeWeather6[0].now);
                        // console.log(s.results[0].now);
                        resolve();

                    } else {
                        console.log('失败');
                        console.log(error);
                    }
                })
            });
            if (i == dataArray.length - 1) {
                return promisel;
            }
        }
    }
    await ss().then(() => {
        jsobj.cities = cities;
        console.log(jsobj);
    });
    ctx.body = jsobj;
})
home.get('/home', async (ctx) => {
    ctx.body = 'hello World'
    //List显示天气
})
module.exports = home;