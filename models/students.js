const mongoose=require("mongoose")
const studentsSchema=mongoose.Schema({
    Name:String,
    RollNO:String,
    Class:String,
    Div:String
})
const studentsModel=mongoose.model("Studentdata",studentsSchema)
module.exports=studentsModel