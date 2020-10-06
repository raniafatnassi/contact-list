const mongoose = require('mongoose');

const dataBase = () => { 
    mongoose.connect( 'mongodb://localhost:27017/contactList', {useNewUrlParser : true, useUnifiedTopology: true}).
then(() => console.log('Connction success')).catch(() => {console.log(err);})
}

module.exports = dataBase;