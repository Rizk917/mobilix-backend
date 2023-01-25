const mongoose = require("mongoose");
const newsSchema=mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User',

    },

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
    
    date:{
        type:String,
        require:true
    },
},
    {
    timestamps: true,
    }
    
)
module.exports = mongoose.model("news", newsSchema);