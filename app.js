const express =require("express")
const cors =require("cors")
const mongoose=require("mongoose")
const studentsModel=require("./models/students")



const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
mongoose.connect("mongodb+srv://aswagosh73:Aswa123@cluster0.xinjjtv.mongodb.net/studentdatabase?retryWrites=true&w=majority&appName=Cluster0")



app.get("/",(req,res)=>{
    res.send("Welcome to Students Details")
})

app.post("/submit",async(req,res)=>{
    let data=req.body
    console.log(data)
    let student=new studentsModel(data)
    let result=await student.save()
    res.json({"Status":"Success"})
})
app.post("/viewall",async (req,res)=>{
    let result =await studentsModel.find()
    res.json(result)
})



app.listen(8080,()=>{
    console.log("Server Started")
})