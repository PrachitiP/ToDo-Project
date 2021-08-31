// // const express = require("express");
// // const app=express();
// // const mongoose = require('mongoose');
// // var url = "mongodb+srv://Prachiti:PrachitiCP513@cluster0.lunhk.mongodb.net/User_data";

// // mongoose.connect(url,  {useCreateIndex:true,
// //     useNewUrlParser:true,
// //     useUnifiedTopology:true}, function(err, db) {
// //         var item ={
// //             taskid: req.body.taskid,
// //             task: req.body.task
// //         };
// //   if (err) throw err;
// //   //var dbo = db.db("User_data");
  
// //   //var myobj = { name: "Company Inc", address: "Highway 37" };
// //   dbo.collection("Task").insertOne(item, function(err, res) {
// //     if (err) throw err;
// //     console.log("1 document inserted");
// //     db.close();
// //   });
// // });
// const express = require("express");
// const app = express();
// const mongo = require("mongodb");
// const assert = require("assert");
// const Task = require("./taskSchema");
// var url="mongodb+srv://Prachiti:PrachitiCP513@cluster0.lunhk.mongodb.net/User_data";

// app.get('/', function(req,res,next){
//     res.render("index");

// })

// app.post("/insert", function(res, req, next){
//     var item ={
//         taskid:req.body.taskid,
//         task:req.body.task
//     };
//     mongo.connect(url, function(err, db){
//         assert.equal(null, err);
//         db.collection('Task').insertOne(item, function(err, result){
//             assert.equal(null, error);
//             console.log('item inserted');
//             db.close();
//         })
//     })
//     res.render("/");
// })
