const http = require('http')

let server = http.createServer((req,resp)=>{
    resp.end("<h1>Hello,GM....</h1>")

})

server.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log("server is running")
})