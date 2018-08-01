var Mypromise = function (fn) {
    this.resloveevent = [];
    this.rejectevent = [];
    var state = 0;
    var than = this;
    var returnvalue = null;
    var rejectvalue = null;
    this.then = function (fn) {
        if(state == 0){
            this.resloveevent.push(fn);
        }else if(state == 1){   
            returnvalue = fn(returnvalue);
        }
        return this;
    }
    this.catch = function (fn) {
        if(state == 0){
            this.rejectevent.push(fn);
        }else if(state == 2){
            fn(rejectvalue)
        }
        return this;

    }
    var reslove = function (value) {
        state = 1;
        // console.log(than.resloveevent);
        if(than.resloveevent.length == 0){
            returnvalue = value;
        }
        for(var s = 0;s < than.resloveevent.length;s++){
            if(s == 0){
                returnvalue = than.resloveevent[s](value);
            }else{
                returnvalue = than.resloveevent[s](returnvalue);
            }
        }
    };
    var reject = function (value) {
        state = 2;
        if(than.rejectevent.length == 0){
            rejectvalue = value;
        }else{
            than.rejectevent[0](value);
        }
    }
    fn(reslove, reject);
}

var test = function (time) {
    var one = new Mypromise(function (reslove, reject) {
        setTimeout(reslove, time, "457");
        // reject("456");
        // reslove("456");
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