const router = require('express').Router();
const authCtrl = require('../controllers/authController');

router.get('/', authCtrl.getLogin);

router.post('/isAuth', authCtrl.postLogin);

module.exports = router;