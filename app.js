require('dotenv').config()
import express from 'express';
import data from './data'
import cors from 'cors'
import config from 'config'
import mongoose from  'mongoose'
import UserRoute from './User/Routes';
import ProductRoute from './product/Route'
const bodyParser = require("body-parser");
const app = express()
const db = config.get('mongoURI');
// mongoose
//   .connect(db, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false ,useUnifiedTopology: true})
//   .then(() => console.log('MongoDB Connected...'))
//   .catch(err => console.log(err));

app.use(cors())
app.use(bodyParser.json());
app.use('/api/v1/users',UserRoute)
app.use('/api/v1/products',ProductRoute)


app.listen(5000, () => console.log(`server startd on port 5000`))