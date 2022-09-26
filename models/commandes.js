const mongoose = require('mongoose')
const schema = mongoose.Schema;

const commandeSchema = new schema({
   image:String,
   nameClient:  {type: String, required:true},
   produit:  {type: String, required:true},
   qte: {type: String, required:true},
   prix: {type: String, required:true},
  });

const commande = mongoose.model('commande', commandeSchema);

module.exports = commande;