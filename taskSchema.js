const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
   
      task: {
        type: String,
       
      },
         
      taskId: {
        type: String,
       
      },
   
      userId: {
        type: String,
       
      },
   
    

})

const Task = mongoose.model("Task", taskSchema);

module.exports= Task;



























// const mongoose = require("mongoose");

// const taskSchema = new mongoose.Schema({
//     // taskID: {
//     //     type: String,
      
//     //   },
//       task: {
//         type: String,
       
//       },
//       // taskStatus: {
//       //   type: String,
//       //   default: "Not Started",
//       //   enum: ["Not Started", "In Progress", "Completed"],
//       // },
    
//       // createdAt: {
//       //   type: Date,
//       //   default: Date.now(),
//       // },
    
//       // startedAt: {
//       //   type: Date,
//       // },
    
//       // completedAt: {
//       //   type: Date,
//       // }
    

// })

// const Task = mongoose.model("Task", taskSchema);

// module.exports= Task;