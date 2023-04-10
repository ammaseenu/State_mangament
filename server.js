const express=require("express")
const mongodb=require("mongodb")
const cors=require("cors");

//to make the restful services
const app=express();

// by  that restful servied we can ebale the ports communication
app.use(cors());


//backend receiving the data from the frontedn in the form of a json
//MIME type is the technology we can called communication language like json
app.use(express.json());
const ashokit=mongodb.MongodbClient;


//y are using app connectio  to very cors and express and mongodb 
//because we making the restful services with the help of the get ,post request ets.,

app.get("/products",(req,res)=>{
    ashokit.connect("url of mongodb",(err,connection)=>{
        if(err)throw err;
        else{
            //here connecting the mongodb database with the backed nodejs
            //for getting the data 
            const db=connection("my_db");        
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.json(array);
                }
            })
        }
    })
})









app.listen(8080,()=>{
    console.log("server listening the port no:8080")
})