const router = require('express').Router()
const useCtrl = require('../controllers/userCtrl')
router.post('/register', useCtrl.register)

module.exports = router