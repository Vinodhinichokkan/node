import bcrypt from 'bcrypt'
let user={
    name:'vino',
    email:'vino@gmail.com',
    cc:'1234123412341122',
    password:'ILoveapple'
}
console.log(user)
let salt = bcrypt.genSaltSync(10)
let new_cc = bcrypt.hashSync(user.cc,salt)
let new_password=bcrypt.hashSync(user.password,salt)
user={...user,cc:new_cc,password:new_password}
console.log(user)