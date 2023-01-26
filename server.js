const express = require('express');
const CONSOLE = require('./src/helpers/console');
const ExpensesCollection = require('./src/mongodb/Collections/Expenses');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
   
    res.json({
        status: true,
        data: '',
        message: 'Server On'
    });
});

// Routes
app.get('/expenses', async (req, res) => {
   
    const data = await ExpensesCollection.getAll();

    res.json({
        status: true,
        data: data,
        message: 'get successfully'
    });
});

app.post('/expenses/add', (req, res) => {
    const { Expense, Import } = req.body;
    ExpensesCollection.Insert({expense: {expense: Expense, import: Import}});
    res.json({
        status: true,
        message: 'Expense added successfully',
        data: [],
    });
});


// Server UP
app.listen(3210, () => {
    // console.clear()
    CONSOLE.header('Server ON | http://localhost:3210');
});