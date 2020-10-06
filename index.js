const express = require('express');
const dataBase = require('./config/connectdb');
const app = express();
const DataBase = require('./config/connectdb')

const port = 5000;
app.use('/',require('./routes/contact'))

app.listen(port, (err, req, res) => {
    if(err) console.error(err)
    else console.log(`Server is connected on port ${port}`);
});

DataBase()
