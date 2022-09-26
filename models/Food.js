const mongoose=require("mongoose");

const  schema =mongoose.Schema;

const foodSchema = new schema({
    title: {type: String, required:true},
    category: {type: String, required:true},
    price: {type: Number, required:true},
    img: {type: String, required:true},
    
    desc:{type: String, required:true},
 
});

const Food = mongoose.model("Food",foodSchema);

module.exports = Food;

