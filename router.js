const passport = require('./lib/passport');

const router = require('express').Router()

router.post('/', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect:'/',
  failureFlash: true
}))

router.post()
module.exports = router;