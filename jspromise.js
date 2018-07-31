var Mypromise = function (fn) {

    this.resloveevent = [];
    this.rejectevent = [];
    var state = 0;
    var i = 1;
    var event = "";
    var events = "";
    var othervalue = "";
    this.then = function (fn) {
        if(state == 1){
        this.resloveevent.message.push(fn);
        this.send("message", event, i);
        i++;
        }
        return this;
    }
    this.catch = function (fn) {
        if(state == 2){
        this.rejectevent.reject.push(fn);
        i = 1;
        this.send("reject", events, i);
        }
    }
    var reslove = function (value) {
        state = 1;
        event = value;
    };
    var reject = function (value) {
        state = 2;
        events = value;
    }
    fn(reslove, reject);
    this.subscribe("message", reslove);
    this.subscribes("reject", reject);
}
Mypromise.prototype = {
    //订阅
    subscribe(type, fn) {
        //查阅是否已经有这个type
        if (!this.resloveevent[type]) {
            this.resloveevent[type] = [];
        }
        this.resloveevent[type].push(fn);
    },
    subscribes(type, fn) {
        //查阅是否已经有这个type
        if (!this.rejectevent[type]) {
            this.rejectevent[type] = [];
        }
        this.rejectevent[type].push(fn);
    },
    //发送订阅
    send(type, event, i) {
        if (type == "reject") {
            // console.log(this.rejectevent.reject);
            this.rejectevent.reject[i](event);
        } else {
            if (i == 1) {
                this.othervalue = this.resloveevent.message[i](event);
            } else {
                this.othervalue = this.resloveevent.message[i](this.othervalue);
            }
        }
    }
}

var test = function (time) {
    var one = new Mypromise(function (reslove, reject) {
        console.log(time);
        // console.log(reslove);
        // setTimeout(reslove, time, "456");
        reslove("456")
    });
    return one;
}
test(1000)
    .then(function (s) {
        console.log(s);
        return "123234";
    })
    .then(function (s) {
        console.log(s)
        return "1010101010";
    })
    .then(function (s) {
        console.log(s);
    })
    .catch(function (s) {
        console.log("出现错误！" + s);
    })