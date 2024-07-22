const express = require('express');
const mongoose =  require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyparser = require('body-parser');
const fs = require('fs');
const path = require('path');
dotenv.config()

const Dish = require('./models/dish')
const Dishroutes = require('./routes/dish') 

const app = express()

app.use(express.json());
app.use(cors())

const PORT = 7000

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('connected to mongodb')
    return Dish.countDocuments({})
}).then(async(count)=>{
    if(count === 0){
        console.log('Dishes collection empty, populating data');
        const filePath = path.join(__dirname, 'dishes.json');
        const dishData = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        await Dish.insertMany(dishData);
        console.log('Dishes data Inserted Successfully');
    }else{
        console.log('Dishes collection already has data, no need to populate.');
    }
})


app.use('/dishes', Dishroutes)


app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
})