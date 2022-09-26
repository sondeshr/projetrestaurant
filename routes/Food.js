const express =require('express');
const Food = require('../models/Food');
const food =express.Router()

// ADD A NEW USER TO THE DATABASE 
food.post('/add',async(req,res)=>{
    try {
        const newfood = new Food(req.body)
        let result = await newfood.save()
        res.send({food:result, msg:'Food added successfully'})
    } catch (error) {
        console.log(error)
    }
})
// RETURN ALL USERS
food.get("/",async(req,res)=>{
    try{
        let result = await Food.find();
        res.send({food:result,msg:'all Foods'});
    }catch(error){
    console.log(error);
    }
    })
    // RETURN USER BY ID
    food.get("/:id",async(req,res)=>{
        try{
            let result = await Food.findById({_id:req.params.id});
            res.send({food:result,msg:'Food'});
        }catch(error){
        console.log(error);
        }
    })
    // REMOVE A USER BY ID 
    food.delete("/:id",async(req,res)=>{
        try{
            let result = await Food.findByIdAndDelete({_id:req.params.id});
            res.send({msg:'Food deleted'});
        }catch(error){
        console.log(error);
        }
    })
    //EDIT A USER BY ID  
    food.put("/:id",async(req,res)=>{
        try{
            let result = await Food.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}});
            res.send({msg:'Food updated'});
        }catch(error){
        console.log(error);
        }
    })
module.exports=food;