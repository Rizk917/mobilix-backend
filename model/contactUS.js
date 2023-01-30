const mongoose = require("mongoose");
const contactusSchema=mongoose.Schema({


    fullName:{
        type:String,
        require:true
    },

    text:{
        type:String,
        require:true
    },
    mail:{
        type:String,
        require:true
    },

},
    {
    timestamps: true,
    }
    
)
module.exports = mongoose.model("contactus", contactusSchema);