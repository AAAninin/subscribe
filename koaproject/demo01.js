// function getSoming(){
//     return 'something';
// }


// async function testAsync(){
//     return 'Hello async'; 
// }

// async function test() {
//     const v1 = await getSoming();
//     const v2 = await testAsync();
//     console.log(v1,v2);
// }


// test();

function takeLongTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>resolve("long time"),1000);
    })
}
async function test(){
    const v = await takeLongTime();
    console.log(v);
}
test();