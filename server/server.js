var http=require('http');
http.createServer(function(req,res)
{
    res.wtiteHeader(200,{'Content-Type':'text/plain'});
    res.end("Hello World! I Am Hetu!!!!....");

}).listen(8500);
console.log("Server is running https://localhost:8500");