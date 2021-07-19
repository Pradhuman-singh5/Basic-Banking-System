const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mainRouter = require('./server/routes/router');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const connectDB = require('./server/database/connection')
dotenv.config({path:'config.env'})
const Port = process.env.PORT || 8080;

// log request
app.use(morgan('tiny'));

//mongodb connection
connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//load assets
app.use(express.static(__dirname+'/public/assets/img'))
app.use('/js',express.static(path.resolve(__dirname,'/public/assets/js')))
app.use(express.static(__dirname+'/public/assets/css'));

app.set('view engine','ejs');
app.use(mainRouter);


app.listen(Port,()=>console.log(`Server is running on http://localhost:${Port}`))