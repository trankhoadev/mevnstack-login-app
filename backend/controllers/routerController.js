const routers = require('../dataConfig/dbSchema');

const getData = (req, res) => {
    return routers.find().then(re => {
        console.log(re);
    })
}