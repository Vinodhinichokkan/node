const http = require('http')
const dotenv = require('dotenv')

dotenv.config({path:'./config/.env'})
let port = process.env.PORT
let host_name=process.env.host_name

let server=http.createServer((req,resp)=>{
    resp.end("Http Server")
})

server.listen(port.host_name,(err)=>{
    if(err) throw err
    console.log(`server Running on http://${host_Name}:${port}/`)
})