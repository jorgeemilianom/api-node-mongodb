const mongoose = require('mongoose');
const mongodbConnect = require('../connection');

mongodbConnect.run();
const Schema = mongoose.Schema;

//  Schema
const expensesSchema = new Schema({
    expense: {
        type: String,
        required: true,
    },
    import: {
        type: String,
        required: true,
    }

});
const expensesModel = mongoose.model('Expenses', expensesSchema);



// Methods
const Insert = (expenseObj) => {
    const myExpense = new expensesModel(expenseObj?.expense, expenseObj?.import);
    myExpense.save();
}

const getAll = async () => {
    const data = await expensesModel.find(); 
    console.log(data);
    return data;
}

module.exports = {
    Insert,
    getAll,
}