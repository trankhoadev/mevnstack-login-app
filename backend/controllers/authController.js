const accounts = require('../dataConfig/dbSchema')

const getLogin = (req, res) => {
    return res.send('OK');
}

const postLogin = (req, res) => {
    let userName = req.body.userName;
    let password = req.body.password;

    // return accounts.findOne({userName}).then(re => {
    //     if(!re) {
    //         return res.json('Username or password is not correct !');
    //     }

    //     if(re.password !== password) {
    //         return res.json('Username or password is not correct !');
    //     }
        
    //     return res.json(1);
    // })

    if(userName !== '' || password !== '') {
        return res.json(1);
    }
    else {
        return res.json(0);
    }
}

module.exports = {
    getLogin,
    postLogin
}