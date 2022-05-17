require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser')
// const config = require('./src/config/config');
// const router = require('./src/routes/router');
// port 
const port = process.env.port || 3000;
// dtabase config
require('./db/database');

const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'))
app.use(cors());


app.use((err,req,res,next)=>{
    
    res.status(422).send({error:err.message})
});



app.use('/api/v1',require('./src/routes/Product.route'));
app.use('/api/v1',require('./src/routes/Order.route'));
app.use('/api/v1',require('./src/routes/User.route'));



app.listen(port ,function(){
    console.log(`now listening for requests ${port}`);
})