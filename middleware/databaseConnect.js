const config = require('config');
const log_info = require('debug')('info');
const mongoose = require('mongoose');
const log_error = require('debug')('error');

async function dbConnectMiddleware(req ,res, next){

    let env = process.env.NODE_ENV;
    let username = config.get('database.username');
    let password = config.get('database.password');
    let host = config.get('database.url');
    let database = config.get('database.name');
    let connection_timeout = config.get('database.connection_timeout');
    let url = `mongodb+srv://${username}:${password}@${host}/${database}`;
    try{
        log_info(`connecting to the ${env} database : ${host}`);
        let res = await mongoose.connect(url,{serverSelectionTimeoutMS: 1000});
        log_info('Connected to database')
        next();
    }catch(error){
        log_error(`Error connecting to database: ${error}`);
    }

  
}

module.exports = dbConnectMiddleware;