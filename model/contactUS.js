const mongoose = require("mongoose");
const contactusSchema=mongoose.Schema({


    fullName:{
        type:String,
        require:false
    },

    Message:{
        type:String,
        require:false
    },
    mail:{
        type:String,
        require:false
    },

},
    {
    timestamps: true,
    }
    
)
module.exports = mongoose.model("contactus", contactusSchema);