const express = require("express");
const cors = require("cors")
require("dotenv").config();
const passport = require("passport");


const app = express();

app.use(cors())

app.use(express.json()) 

const dbconnect=require("./config/dbconnect");
dbconnect();




app.use("/commande", require("./routes/commande"))
app.use("/food", require("./routes/Food"))
app.use("/client", require("./routes/client"))




app.use(passport.initialize());

app.listen(process.env.PORT, {useNewUrlParser: true, useUnifiedTopology: true},(err)=>err?console.log(err):console.log('server is running'))