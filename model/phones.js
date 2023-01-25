const mongoose = require("mongoose");
const phonesSchema=mongoose.Schema({
    title:{
        type:String,
        require:true
    },
   // image:{
    //    type:String,
     //   require:true
  //  },
    description:{
        type:String,
        require:true
    },
    article:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
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