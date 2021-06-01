const router = require('express').Router()

const product = require('./product.route')
const users = require('./user.route')

router.use('/product', product)
router.use('/user', users)


module.exports = router