const { error } = require('console')
const fs = require('fs')
fs.readFile('users.json','utf-8',(err,data)=>{
    if (err) throw err
    console.log(data)
    letusers = JSON . parse(data)
    console.log(typeof users)
    let maleusers = [];
        let femaleusers = [];
        for (user of users){
            if(user.gender == 'male'){
                maleusers.push(user)
            }
            else{
                femaleusers.push(user)
            }
        }

        fs.writeFile('male.json',JSON.stringify(maleusers),(err)=>{if (err) throw err})

        fs.writeFile('female.json',JSON.stringify(femaleusers),(err)=>{if (err) throw err})
    
})