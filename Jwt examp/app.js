import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

let payload={
    uname:"vino",
    cid:'vino1999',
    password:"Abiaravindh"
}

dotenv.config({path:'./config/dev.env'})

let s_Key=process.env.SECRET_KEY
let token=jwt.sign(payload,s_Key)
console.log(token)

let user = jwt.verify(token,s_Key)
console.log(user)