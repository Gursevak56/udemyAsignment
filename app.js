const http=require('http');
const routeHandler=require('./routes')

const server=http.createServer();
server.on('request',(req,res)=>{
    routeHandler(req,res);
})

server.listen(3000,()=>{
    console.log("this is very beautiful technique for listen the normal server");
})