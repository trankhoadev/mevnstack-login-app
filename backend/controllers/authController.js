const accounts = require('../dataConfig/dbSchema')

const postLogin = (req, res) => {
    let userName = req.body.userName;
    let password = req.body.password;

    return accounts.findOne({userName}).then(re => {
        if(!re) {
            return res.json('Username or password is not correct !');
        }

        if(re.password !== password) {
            return res.json('Username or password is not correct !');
        }
        
        return 1;
    })
}

module.exports = {
    postLogin
}