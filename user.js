const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); 
const userSchema = new mongoose.Schema({
     userId:{
        type:String
     },
     firstname:{
         type:String,
         required:true,
         
     },
     lastname:{
        type:String,
        required:true,
      
     },
     email:{
        type:String,
        required:true,
        unique:true
     },
     phone:{
        type:String,
        required:true,
        unique:true
     },
     pass:{
        type:String,
       
     }

     
})

userSchema.methods.generateAuthToken = async function(){
   try{
     // console.log(this._id)
      const token = jwt.sign({_id:this._id.toString()}, "qwertyuiopasdfghjklzxcvbnmqwerty");
      this.tokens = this.tokens.concat({token:token})
      await this.save();
     // console.log(token);
      return token;
   }catch(error){
      res.send("error"+error);
      console.log("error"+ error);
   }
}

userSchema.pre("save", async function(next){
   if(this.isModified("pass")){
     // console.log(`current password is ${this.pass}`);
      this.pass =await bcrypt.hash(this.pass, 10);
    //  console.log(`ths current password id ${this.password}`);
   }
   next();
})

//collection
const Register = mongoose.model("Register", userSchema);

module.exports= Register;
