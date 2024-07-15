import express, { Router } from 'express'
import fs from 'fs'
let router = express.Router();

router.get("/read",(req,resp)=>{
    let employees=getEmployees()
    resp.status(200).json (employees);
    

})

router.post("/create",(req,resp)=>{})

router.put("/update",(req,resp)=>{})

router.delete("/delete",(req,resp)=>{})

let saveEmployees=(employees)=>{}
let getEmployees = ()=>{
    let employees;
    fs.readFile('data.json','utf-8')
}




export default Router;