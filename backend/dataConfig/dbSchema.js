const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const URI = 'mongodb://localhost:27017/test-login'
// const URI = process.env.DB_MONGO;

console.log(URL);

const accountSchema = new Schema({
    userName: '',
    password: ''
}, { timestamps: true });

const accounts = mongoose.model('accounts', accountSchema);

mongoose.connect(URI).then(() => {
    console.log('connect to database successfully !');
})

module.exports = {
    accounts
}