var Mypromise = function (fn) {
    this.resloveevent = [];
    this.rejectevent = [];
    var s = this.resloveevent;
    var t = this.rejectevent;
    var reslove = function (value) {
        console.log(s);
        for (var i = 0; i < s.length; i++) {
            s[i](value);
        }
    };
    var reject = function (value) {
        for (var i = 0; i < t.length; i++) {
            t[i](value);
        }
    }
    fn(reslove, reject);
}
Mypromise.prototype = {
    then(fn) {
        this.resloveevent.push(fn);
        return this;
    },
    catch(fn) {
        this.rejectevent.push(fn);
    }
}

var test = function (time) {
    var one = new Mypromise(function (reslove, reject) {
        console.log(time);
        // console.log(reslove);
        setTimeout(reslove, time, "456");
    });
    return one;
}
test(1000)
    .then(function (s) {
        console.log(s);
    })
    .catch(function (s) {
        console.log("出现错误！" + s);
    })