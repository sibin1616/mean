var o=require('os');
console.log("Total Memory:"+o.totalmem());
console.log("Free Memory :"+o.freemem());
var a=o.totalmem();
var b=o.freemem();
console.log(`total:${a}`);
console.log(`free:${b}`);
