const config = require('config');
const log_info = require('debug')('info');
const mongoose = require('mongoose')

async function dbConnectMiddleware(req ,res, next){
    
    log_info(`Node Environment: ${process.env.NODE_ENV}`);
    let url = config.get('database.url');
    try{
        let res = await mongoose.connect(url,{serverSelectionTimeoutMS: 3000});
        log_info(`connecting to the datbase ${config.get('database.username')} ${url}`);
    }catch(err){
        log_info(`${error}`);
    }

    next();
}

module.exports = dbConnectMiddleware;