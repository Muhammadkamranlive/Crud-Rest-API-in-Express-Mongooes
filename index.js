const express=require("express");
const app=express();
const mongoose=require("mongoose");
const User=require("./userSchema");
app.use(express.json());
mongoose.connect("mongodb://localhost/user").then(()=>{
    console.log("connected");

}).catch(err=>{
    console.log(err);
})
app.get("/",(req,res)=>{
  const user=User.find().then((respose)=>{
      console.log(respose);
  }).catch((err)=>{
      console.log(err);
  })
 res.send(user);
});
app.get("/me",(req,res)=>{
    res.send(" iam karman");
});
app.post("/signup",(req,res)=>{
 const user=new User({
       email:req.body.email,
       username:req.body.username
   });
  user.save().then(()=>{
      console.log(user);
      
  }).catch(err=>{
      console.log(err);
  })
  
  res.send(req.body);
})

app.put("/api/:id",(req,res)=>{
   User.findByIdAndUpdate({_id:req.params.id},{
       $set:{
           email:req.body.email,
           username:req.body.username
       }
   }).then((result)=>{
       res.send(result)
   }).catch((err)=>{
       console.log(err);
   });
   
});
app.delete("/api/:id",(req,res)=>{
    User.findByIdAndDelete({_id:req.params.id}).then((user)=>{
        res.send(user);
    }).catch((err)=>{
        res.send(err);
    })
})
const port=process.env.PORT ||3000;
app.listen(port,()=>{
    console.log("listening on port");
})