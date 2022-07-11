const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const URI = 'mongodb://localhost:27017/db-test'
// const URI = process.env.DB_MONGO;

console.log(URL);

const accountSchema = new Schema({
    userName: '',
    password: ''
}, { timestamps: true });

const accounts = mongoose.model('accounts', accountSchema);

const routerSchema = new Schema({
    routerName: '',
    routerDesc: '',
    listCheckPoint: [],
}, {timestamps: true});

const routers = mongoose.model('routers', routerSchema);

const checkPointSchema = new Schema({
    checkPointName: '',
    checkPointDesc: '',
    listTask: []
}, {timestamps: true})

const checkpoints = mongoose.model('checkpoints', checkPointSchema);

const taskSchema = new Schema({
    taskName: '',
    taskDesc: ''
}, {timestamps: true})

const tasks = mongoose.model('tasks', taskSchema)

mongoose.connect(URI).then(() => {
    console.log('connect to database successfully !');
})

module.exports = {
    accounts,
    routers,
    checkpoints,
    tasks
}