
const bodyParser = require("body-parser");
const express=require("express");
const app=express();
const cors=require("cors")
app.use(cors());
const bodyparser=require("body-parser");
const mysql=require("mysql2");
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'arunsql03',
    database:'crud',
});
app.get("/",(req,res)=>{
    res.send({success:"true"});
})
app.post("/movie",(req,res)=>{
    const movieid=req.body.id;
    const moviename=req.body.name;
    const insert="INSERT INTO moviereview (id,name) VALUES (?,?);"
    db.query(insert,[movieid,moviename],(err,res)=>{
    if(err){
        console.log("error");
    }
    else{
        console.log("no error");
    }
    });
})
app.get("/get",(req,res)=>{
    const selectq="SELECT * FROM moviereview;";
    db.query(selectq,(err,result)=>{
        if(err){
            console.log("err");
        }
        else{
            res.send(result);
        }
    })
})
app.listen(3001,(req,res)=>{
    console.log("running");
})