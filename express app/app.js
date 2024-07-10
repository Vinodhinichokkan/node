import express from 'express'
let app = express()


app.get("/",(req,resp)=>{
    resp.send("Root Request")
})

app.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log(` Express Server is running`)
})