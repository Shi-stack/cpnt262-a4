const express = require('express')
const router = express.Router()
const config = require('../config')
const api = require("./api/v0");
var dayjs = require('dayjs');

router.use((req, res, next) => {
  res.locals = config
  next()
})

router.get('/', (req, res) => {
  res.render('pages/index', {pageTitle: "Dynamic Gallery" , dayjs})
})

router.get('/login', (req, res) => {
  res.render('pages/login', {pageTitle: "Login", dayjs} )
})

router.get('/register', (req, res) => {
  res.render('pages/register', {pageTitle: "Register", dayjs})
})

module.exports = router;