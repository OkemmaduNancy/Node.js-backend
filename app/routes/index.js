const router = require('express').Router()

const product = require('./product.route')
const signup = require('./signup.route')
const users = require('./user.route')

router.use('/product', product)
router.use('/signup', signup)
router.use('/user', users)


module.exports = router