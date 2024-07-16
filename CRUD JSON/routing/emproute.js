import express, { Router } from 'express'
import fs from 'fs'
let router = express.Router();


router.post("/create",(req,resp)=>{
    let emp=req.body;
    console.log(emp_data)
    let employees= awaitgetEmployees();
    let flag=employees.find((emp)=>{
        return emp.id === emp_data.eid

})
})
if (flag){
    return resp.json({"error":"employee already exist!"})
    
}
employees.push(emp_data)
await saveEmployees(employees);
return resp.status(200).JSON({"msg":"New employee object created successfully"})


router.get("/read",(req,resp)=>{
    let employees = getEmployees()
    resp.status(200).json (employees);
    

})

router.put("/update/:id",(req,resp)=>{})

router.delete("/delete/:id",(req,resp)=>{})

let saveEmployees = (employees)=>{}
let getEmployees = ()=>{
    console.log("Inside getEmployees method")
    let employees=fs.readFileSync('data.json','utf-8');
    return JSON.parse(employees);
}




export default router;