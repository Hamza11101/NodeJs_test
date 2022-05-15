require('dotenv').config();
const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
// const config = require('./src/config/config');
// const router = require('./src/routes/router');

const app = express();
app.use(express.json());

require('./db/database');
app.use(cors());
// app.use(router);
app.use((err,req,res,next)=>{
    
    res.status(422).send({error:err.message})
});


app.listen(process.env.port || 2000,function(){
    console.log('now listening for requests');
})