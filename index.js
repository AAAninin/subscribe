var obj = function(){
    this.initobject = {};
}
obj.prototype = {
    //订阅
    subscribe(type,fn){
        //查阅是否已经有这个type
        if(!this.initobject[type]){
            this.initobject[type] = [];
        }
        this.initobject[type].push(fn);
    },
    //取消订阅
    unsubscribe(type,fn){
        if(!this.initobject[type]){
            return;
        }
        var listen = this.initobject[type];
        var len = listen.length;
        for(var i = 0;i < len;i++){
            if(listen[i] === fn){
                listen.splice(i,1);
                return;
            }
        }
    },
    //发送订阅
    send(type,event){
        if(!this.initobject[type]){
            return;
        }
        if(!event[type]){
            event[type] = type;
        }
        var  listen = this.initobject[type];
        var  len = listen.length;
        for (var i = 0; i < len; i++) {
         listen[i](event);
        }
    }
}
var onepeople = new obj();
var eventArgs = {message: ""};
var subscriber = function(eventArgs) {
     alert(eventArgs.message);
};

// console.log(eventArgs["message"]);
function test(message){
    eventArgs.message = message
    //注册
    onepeople.subscribe("message",subscriber);
    //

    //发布
    onepeople.send("message",eventArgs);
    //删除
    onepeople.unsubscribe("message",subscriber)
}
test("你好订阅者")