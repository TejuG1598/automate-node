const express = require('express');
const log_info= require("debug")("info");
const log_debug= require("debug")("debug");
const config = require('config');
const app = express();

// app.get('/orders', (res, req) =>{

// })

// app.get('/orders/id', (res, req) =>{

// })



let port = config.get("app.port");
app.listen(port,()=>{
    log_debug(`${config.get("app.name")} is running at ${port}`);
});