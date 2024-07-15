import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import chalk from 'chalk'

let app = express();

app.use (morgan('tiny'))

app.get("/",(req,resp)=>{
    resp.json({"msg":"Root Request"})
})

app.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log(` Server is running`)
})