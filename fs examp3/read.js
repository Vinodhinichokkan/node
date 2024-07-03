const fs =require('fs')
let empdata = fs.readFileSync('emp.txt','utf-8')
fs.writeFileSync('data.txt',empdata)
console.log("employee data write into new file id data.txt")