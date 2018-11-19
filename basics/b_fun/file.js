const p=require('fs');
//console.log(p.readdirSync('./'));//synchronous
//p.readdir('./',function(err,files){
//if(err) console.log("Error:"+err);else console.log("files:"+files);
//});
p.readFile('file1.txt','utf8',function(errr,files){
    if(errr) console.log("Error:"+errr);else console.log("files:"+files);
    });
console.log(p.readFileSync('file1.txt','utf8'));