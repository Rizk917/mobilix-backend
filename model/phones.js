const mongoose = require("mongoose");
const phonesSchema=mongoose.Schema({
    phoneModel:{
        type:String,
        require:true
    },
    display:{
        type:String,
        require:true
    },
    memory:{
        type:String,
        require:true
    },
   image:{
       type:String,
   },
    body:{
        type:String,
        require:true
    },
    camera:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    vendor:{
        type:String,
        require:true
    },
    
    isDeleted:{
        type:Boolean,
        require:false
    },
    prodDate:{
        type:String,
        require:true
    },
},
    {
    timestamps: true,
    }
    
)
module.exports = mongoose.model("phones", phonesSchema);