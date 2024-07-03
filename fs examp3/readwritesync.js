
const fs= require('fs')
fs.readFile('emp.txt','utf-8')
fs.writwfilesync('data.txt',(err)=>{
    if(err) throw error
    console.log('written successfully')
})  