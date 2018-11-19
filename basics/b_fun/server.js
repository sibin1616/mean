const s=require('http');
const a=s.createServer(function(req,ress){
if(req.url=='/'){
    ress.write("home");
    ress.end();
}
if(ress.url=='/user'){
    ress.write(JSON.stringify([1,2,3]));
    ress.end();
}

});
a.listen(3000);
console.log("done");