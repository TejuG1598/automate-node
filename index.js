const express = require('express');
const log_info= require("debug")("info");
const log_debug= require("debug")("debug");
const config = require('config');
const app = express();

const  ordersRouter = require("./routes/orders");//loading orderRouter
const staticRouter = require('./routes/static');
const dbConnectMiddleware = require("./middleware/databaseConnect")//loading the middleware databaseConnect.js

app.use(express.json()); 
app.use(dbConnectMiddleware);

app.use("/orders",ordersRouter);
app.use('/',staticRouter);


let port = process.env.PORT || config.get("app.port");
app.listen(port,()=>{
    log_debug(`${config.get("app.name")} is running at ${port}`);
});