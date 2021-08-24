const db=require('../models')

const User=db.users

// Saving data to database
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

// fetch all user data from db
exports.findAll=(req,res)=>{
   // All records/documents
    User.find()
        .then(data=>{
            res.send(data)
        })
}

exports.findOne=(req,res)=>{
    const id=req.params.id

    User.findById(id)
        .then(data=>{
            res.send(data)
        })
}

// updating record

 exports.update=(req,res)=>{
     const id=req.params.id; 

     User.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
            .then(data=>{
                res.send({message:"User updated successfully!!!"})
            })
 }

 // Date : 24th-Aug-2021
// findBy Name, City
// updating of data based on condition
// deleting of data based on condition
// schema validation