import bcrypt from 'bcrypt'
let user={
    name:'vino',
    email:'vino@gmail.com',
    cc:'1234123412341122',
    cvv:'134'
}
console.log(user)
let salt = bcrypt.genSaltSync(10)
let new_cc = bcrypt.hashSync(user.cc,salt)
console.log(user.cc)
console.log(new_cc)

user={...user,cc:new_cc}
console.log(user)