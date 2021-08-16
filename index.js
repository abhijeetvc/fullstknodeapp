//console.log(module);

// var http = require('http')  // import http module

// var server=http.createServer(function(req,res){
//        if(req.url=="/test"){
//            res.end("This is the Test Server!!!")
//        }      
// })

// server.listen(8989)
// console.log("Node Server Started!!!");

// express -> Framework 

var express=require('express')
// var bodyParser=require('body-parser')

const cors=require('cors')

var app=express()
var PORT=8787

var corsOptions={
    origin:"http://localhost:3000"
}

app.use(express.json())
app.use(cors(corsOptions))

const db=require('./app/models')

db.mongoose
    .connect(db.url,{useNewUrlParser:true})
    .then(()=>{
        console.log("Connected to mongo database!!!");
    })

require('./app/routes/user.routes')(app)    
// http methods : GET, POST, PUT, DELETE
// http status codes : 400, 404, 200, 201, 500

// app.use(bodyParser.json())

// app.get("/check",(req,res)=>{
//     res.send("Hiii, from Server!!!")
// })

// app.post("/addData",(req,res)=>{
//     console.log(req.body);
//     res.send("Data saved!!!")
// })

app.listen(PORT,()=>{
    console.log(`Server started on PORT: ${PORT}`);
})


// Node - create server
// Express - create Server 
// Mongoose(ODM) - Object Data Modelling --> Driver/Library for data mapping