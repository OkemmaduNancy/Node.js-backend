const router = require('express').Router()

const product = require('./product.route')
const signup = require('./signup.route')
const login = require('./login.route')
const users = require('./user.route')

router.use('/product', product)
router.use('/signup', signup)
router.use('/login', login)
router.use('/user', users)


module.exports = router