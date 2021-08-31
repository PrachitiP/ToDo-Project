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
