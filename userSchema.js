const mongooes=require("mongoose");
const userSchema=new mongooes.Schema({
   email:{
       type:String,
       maxlength:500
   },
   username:{
    type:String,
    maxlength:500
}
});
//
const User=mongooes.model("user",userSchema);
module.exports=User;