const router = require('express').Router()

const product = require('./product.route')
const signup = require('./user-signup.route')
const login = require('./user-login.route')

router.use('/product', product)
router.use('/signup', signup)
router.use('/login', login)

module.exports = router