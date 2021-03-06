
module.exports=app=>{
    const users=require('../controller/user.controller')

    var router=require('express').Router()

    // saving data to database
    router.post("/saveUser",users.create)

    // fetch data from database and return to client
    router.get("/getAllUsers",users.findAll)

    // fetch single user based on id
    router.get("/getSingleUser/:id",users.findOne)

    //update user
    router.put("/updateUser/:id",users.update)

    app.use("/api",router)
}