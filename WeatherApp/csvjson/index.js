var xlsx2json = require("node-xlsx");
var fs = require("fs");
var list = xlsx2json.parse("./data.csv");
var data = list[0].data;
var dataarr = '{"cities": [';
for (var i = 0; i < data.length; i++) {
    // dataarr.push(data[i][2]);
    if (i == data.length - 1) {
        dataarr = dataarr + '{"city":"' + data[i][2] + '"}'
    } else {
        dataarr = dataarr + '{"city":"' + data[i][2] + '"},'

    }
}
dataarr = dataarr + ']}';
// var dataJson = JSON.stringify(dataarr);
fs.writeFileSync('./dataJson.json',dataarr);
console.log(dataarr);