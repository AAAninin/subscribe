var obj = function () {
    this.initobject = {};
}
obj.prototype = {
    //订阅
    subscribe(type, fn) {
        //查阅是否已经有这个type
        if (!this.initobject[type]) {
            this.initobject[type] = [];
        }
        this.initobject[type].push(fn);
        return true;
    },
    //取消订阅
    unsubscribe(type, fn) {
        if (!this.initobject[type]) {
            return;
        }
        var listen = this.initobject[type];
        var len = listen.length;
        for (var i = 0; i < len; i++) {
            if (listen[i] === fn) {
                listen.splice(i, 1);
                return;
            }
        }
    },
    //发送订阅
    send(type, event) {
        if (!this.initobject[type]) {
            return;
        }
        if (!event[type]) {
            event[type] = type;
        }
        var listen = this.initobject[type];
        var len = listen.length;
        for (var i = 0; i < len; i++) {
            listen[i](event);
        }
    }
}

var one = new obj();
var sendmessage = "";
var fn = function (sendmessage) {
    // console.log(sengmessage);
    alert(sendmessage)
}
function onepeople(message) {
    var promise = new Promise(function (resolve, reject) {
        sendmessage = message;
        var data = "data";
        var bol = one.subscribe(data, fn);
        console.log(bol);
        if (bol) {
            resolve(data);
        } else {
            reject();
        }
    })
    console.log(promise);
    return promise;
}
function test(msg) {
    onepeople(msg)
        .then(function (data) {
            one.send(data, sendmessage);
        }).catch(function () {
            console.log("出错误了");
        })
}