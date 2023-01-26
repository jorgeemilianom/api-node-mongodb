
const CONSOLE = require('../helpers/console');
const Model = require('./model');

const run = () => {
    // MongoDB connection
    const mongoose  = require('mongoose');
    mongoose.Promise = global.Promise;
    const uri_mongo_connect = 'mongodb+srv://<username>:<password>@<cluster or DB name>.doclfty.mongodb.net/?retryWrites=true&w=majority';
    mongoose.connect(uri_mongo_connect, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    
    
    db.on('connected', () => {
        CONSOLE.header('MongoDB Connection OK.');
    });
    
    db.on('error', (err) => {
        console.log(`Mongoose default connection has occured ${err} error`);
    });
    
    db.on('disconnected', () => {
        console.log('Mongoose default connection is disconnected');
    });
}

module.exports = {run};

//  Functions
const addMessage = (expenseObj) => {
    const myMessage = new Model.expenses(expenseObj?.expense, expenseObj?.import);
    myMessage.save();
}
