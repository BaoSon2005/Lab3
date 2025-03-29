
const express = require('express');

const app = express();

const port = 3000;


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

const uri = "mongodb+srv://nao:<HGrT2GBjuh4JsQgK>@cluster0.8rxks.mongodb.net/MD19302";

    const mongoose = require('mongoose');

    const carModel = require ('./carModel');

app.get('/', async (req , res)=>{
    await mongoose.connect(uri);
    let cars = await carModel.find();
    console.log(cars);
    res.send(cars);
})