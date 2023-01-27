const mongoose = require("mongoose");
const UserSchema=mongoose.Schema({
    name:{
        type:String,
        require:[true,'Please add name']
    },

    email:{
        type:String,
        require:[true,'Please add email'],
        unique:true
    },

    password:{
        type:String,
        require:[true,'Please add password']
    },
},

{timestamp:true,}

  
)
module.exports = mongoose.model("User", UserSchema);