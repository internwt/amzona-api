import express from 'express';
import data from './data'
import cors from 'cors'
import config from 'config'
import mongoose from  'mongoose'
import UserRoute from './User/Routes';
const bodyParser = require("body-parser");
const app = express()
const db = config.get('mongoURI');
// mongoose
//   .connect(db, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false ,useUnifiedTopology: true})
//   .then(() => console.log('MongoDB Connected...'))
//   .catch(err => console.log(err));

app.use(cors())
app.use(bodyParser.json());
app.get('/products/items', (req, res) => {
    res.send(data)
})
app.get('/products/details/:id', (req, res) => {
    const product = data.products.find((i) => i.id === req.params.id)
    console.log(product)
    if (product) {
        res.send(product)
    } else {
        res.status(404).send({ message: "product doest not exist" })
    }
})

app.use('/api/v1/users',UserRoute)


app.listen(5000, () => console.log(`server startd on port 5000`))