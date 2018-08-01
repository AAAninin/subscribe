var Mypromise = function (fn) {
    var resolveevent = [];
    var rejectevent = [];
    var state = 0;
   
    var returnvalue = null;
    var rejectvalue = null;
    this.then = function (fn) {
        return new Mypromise(function(resolve,reject){
            dealresolve({
                fn:fn,
                resolve:resolve
            });
        })
    }
    function dealresolve(event){
        if(state == 0){
            resolveevent.push(event);
            return;
        }
        var ret = event.fn(returnvalue);
        event.resolve(ret);
    }
    this.catch = function (fn) {
        return new Mypromise(function(resolve,reject){
            dealreject({
                fn:fn,
                reject:reject
            });
        })
    }
    function dealreject(event){
        if(state == 0){
            rejectevent.push(event);
            return;
        }
        var ret = event.fn(returnvalue);
        event.reject(ret);
    }
    var resolve = function (value) {
        state = 1;
        returnvalue = value;
        setTimeout(()=>{
            for(var s = 0;s < resolveevent.length;s++){
                dealresolve(resolveevent[s]);
            }
        },1);
    };
    var reject = function (value) {
        state = 1;
        returnvalue = value;
        setTimeout(()=>{
            for(var s = 0;s < rejectevent.length;s++){
                dealreject(rejectevent[s]);
            }
        },1);
    }
    fn(resolve, reject);
}

var test = function (time) {
    var one = new Mypromise(function (resolve, reject) {
        setTimeout(resolve, time, "457");
        // reject("456");
        // resolve("456");
    });
    return one;
}
// test(10000)
//     .then(function (s) {
//         console.log(s);
//         return "123234";
//     })
//     .then(function (s) {
//         console.log(s)
//         return "1010101010";
//     })
//     .then(function (s) {
//         console.log(s);
//     })
//     .catch(function (s) {
//         console.log("出现错误！" + s);
//     })
var p = new test(1000);
p.then((b)=>{
    console.log(b);
    return "789";
})
.then((b)=>{
    console.log(b);
})
p.then((b)=>{
    console.log(b);
})