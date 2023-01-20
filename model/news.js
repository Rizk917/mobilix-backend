const mongoose = require("mongoose");
const news=mongoose.Schema({
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
    comment:{
        type:Number,
        require:true
    },
    date:{
        type:String,
        require:true
    },
},
    {
    timestamps: true,
    }
    
)
module.exports = mongoose.model("news", news);