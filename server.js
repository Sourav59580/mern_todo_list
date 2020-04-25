const express = require('express');
const mongoose = require('mongoose');


const app = express();


//db config
const db = require('./config/key').mongoURI;

//database connection established
mongoose.connect(db,{useNewUrlParser : true, useUnifiedTopology : true})
.then(()=>console.log('MongoDB connected successfully.....'))
.catch((err)=> console.log(err))

//Routes
app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.use("/todolist",require('./routes/index'))


//server connection
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`server is running at port ${PORT}`));
