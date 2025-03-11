const express = require("express");
const mongoose = require("mongoose");
const log_debug  = require("debug")("debug");
const Order = require("../schemas/orderSchema");
const orderValidator = require("../validators/orderValidator")


const ordersRouter = express.Router();//externalizing the router

//get order by id
ordersRouter.get('/:id',async(req,res)=>{
    try{
        let order = await Order.findById(req.params.id).select({__v:0});
        res.status(200).send(order);
    }
    catch(err){
        res.status(404).send(err);
    }
});

//get all orders from db
ordersRouter.get('/',async(req,res)=>{
    try{
        let orders = await Order.find().select({__v:0});
        res.status(200).send(orders);
    }
    catch(err){
        res.status(404).send(err);
    }
});


//save order to db
ordersRouter.post('/',async(req,res) =>{
    try{
        const {error} = orderValidator.validate(req.body);
        if (error){
            return res.status(400).send(error.details[0].message);
            
        }
        const addOrder = new Order(req.body);
        await addOrder.save();
        log_debug("order posted!!!");
        res.status(201).send("Order is saved to db!!")
    }
    catch(err)
    {
        log_debug(err);
        res.status(500).send("Error Saving the Order..")
    }
});

module.exports = ordersRouter;