const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT, { 
        useNewUrlParser: true, useUnifiedTopology: true 
    }).then(() => console.log('Database Connected')).catch(err => console.log(err))
}

module.exports = connectToDb