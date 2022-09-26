const mongoose=require("mongoose");

const  schema =mongoose.Schema;

const clientSchema = new schema ({
       image: {type:String , 
                default:"https://png.pngtree.com/png-vector/20191101/ourlarge/pngtree-male-avatar-simple-cartoon-design-png-image_1934458.jpg"},
       name: {type:String, 
        required:true
    },
    Lastname: {type:String, 
     
  },
 

       email:{type:String, 
        required:true
    },

       password:{type:String,
         required:true
    },
    category: {
        type: String,
        default:"user",
      }
});

const Client = mongoose.model("Client",clientSchema);

module.exports = Client;