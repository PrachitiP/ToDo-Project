const express =  require("express");
const path = require("path");
const app = express();
const db = require("./connection");
const hbs = require("hbs");
const { rawListeners } = require("process");
const bodyParser = require("body-parser")
const port = process.env.PORT || 3000
const Register =  require("./user");
const Task = require("./taskSchema");
const crypto =require("crypto");
const bcryptjs = require("bcryptjs");
const bcrypt = require("bcrypt");



const static_path = path.join(__dirname, "views");
const template_path = path.join(__dirname, "./templates/views")
const partial_path = path.join(__dirname, "./templates/partials")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(static_path));
app.set("views", template_path);
hbs.registerPartials(partial_path);
app.set("view engine", "hbs");
app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.get("/", (req,res) =>{
    res.render("index");
})

app.get("/register", (req,res)=>{
    res.render("register");
})

app.get("/login", (req,res) =>{
    res.render("login");
})

app.get("/insert", (req,res) =>{
    res.render("insert");
})


app.post("/user-register",  async(req,res)=>{
    try{
            
           const userRegister = new Register({
                userId : crypto.randomBytes(16).toString('hex'),
                firstname: req.body.fname,
                lastname:req.body.lname,
                email:req.body.email,
                phone:req.body.phone,
                pass:req.body.pass
              });
            console.log(userRegister);

            const registered = await userRegister.save();
            delete registered.pass;
            res.send(registered);

    }catch(error){
        res.status(400).send({"message": "Duplicate Entry"});
        console.log("error part", error);
    }
})


app.post("/user-login", async(req,res) => {
    try{
        const email = req.body.email;
        const pass = req.body.pass; 
        
        const userEmail = await Register.findOne({email:email});
        const isMatch = await bcrypt.compare(pass, userEmail.pass);
        
        
        if(isMatch)
        {
            return res.send({userId: userEmail.userId});
                
        }else{
            return res.status(400).send("invalid login deatils");
        }
    }catch(error){
        res.status(400).send("invalid login deatils");
    }
    
})
app.put("/update-task/:taskId", async(req,res) =>{
    const taskname = req.body.taskname;
    const taskid = req.params.taskId;
    var query = {taskId:taskid}
    var data = {task:taskname}
    Task.updateOne(query, data, function(err, doc) {
        if (err) return res.send(500, {error: err});
        return res.send(doc);
    });
})

app.post("/delete-task", async(req, res) => {
    const taskId = req.body.taskId;
    const task = await Task.findOneAndDelete({taskId:taskId});
    res.send( taskId+"Deleted")
  })

app.post("/insert", async(req, res) => {
    const task = req.body.task;
    const taskId = req.body.taskId;
    const userId = req.body.userId;
    const addTask= new Task({ task,taskId,userId });

    addTask
      .save()
      .then(() => {
        console.log("Successfully added task!");
        console.log(addTask);
        res.send(addTask);
      })
      .catch((err) => console.log(err));
  })

  app.get("/tasks/:userId", async(req, res) => {
    const userId = req.params.userId;
    const tasks= await Task.find({ userId });
    res.send(tasks)
  })


app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});











