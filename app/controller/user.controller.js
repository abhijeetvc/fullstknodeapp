const db=require('../models')

const User=db.users

exports.create=(req,res)=>{
    console.log(req.body);
    
    let {firstName,lastName,email,city}=req.body
    const user=new User({
        firstName:firstName,
        lastName:lastName,
        email:email,
        city:city
    })
        // saving data to database
    user.save(user)
        .then(data=>{
            res.send(data)
        })
}