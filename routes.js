const routeHandler=(req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url === '/'){
        res.end('<html><head><title>Web app</title></head><body><h1>this is very good infrastructure</h1><form action="/create-user" method="POST"><input type="text" name="text"><button type="submit">submit</button></form></body></html>');
    }
     if(url === '/users'){

res.end('<html><head><title>Web app</title></head><body><ul><li>Gursevak Singh</li><li>Vikram gill</li><li>test 2</li><li>test 3</li></ul></body></html>');
}
if(url === '/create-user' && method === "POST"){
    const text=[];
    req.on('data',(chunks)=>{
        text.push(chunks);
    })
    req.on('end',()=>{
            const bodyParser=Buffer.concat(text).toString();
            console.log(bodyParser);
            const message=bodyParser.split('=');

            console.log(message[1]);
        });
    }
}
module.exports=routeHandler;