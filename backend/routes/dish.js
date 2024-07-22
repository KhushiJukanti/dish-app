const express = require('express')
const router = express.Router()
const Dish = require('../models/dish')


router.get('/all', async(req, res)=>{
    try{
        const dish = await Dish.find();
        res.send(dish)
    }catch(error){
        console.log('There is an Eroor:', error)
        res.status(500).json({message: 'sever error'})
    }
})

router.put('/:dishId/toggle', async(req, res) =>{
    try{
        const dishId = req.params.dishId;
        const dish = await Dish.findOne({dishId});

        if(!dish){
            return res.json(404).json({message: 'Dish not found'});
        }

        dish.isPublished = !dish.isPublished;
        await dish.save();
        res.json(dish);
    }catch(error){
        console.log('Error toggling publish status:', err);
        res.status(500).json({message: 'server Error'})
    }
});

module.exports = router