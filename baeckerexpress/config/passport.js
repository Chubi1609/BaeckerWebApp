var passport = require('passport');
var user = require('../models/user');
var local_strategy = require('passport-local');

passport.serializeUser(function (user, done) {
    done(null, user.email);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
passport.use('local.signup', new local_strategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true

}, function (req, email, password, done) {
    req.checkBody('email', 'Invalid email').notEmpty().isEmail();
    req.checkBody('password', 'Invalid password').notEmpty().isLenght({min:4});
    var errors  = req.validationErrors();
    if(erros){
        var messages = [];
        errors.forEach(function(error){
            messages.push(error);
        });
        return done(null, false, req.flash('error',messages));
    }
    user.findOne({ 'email': email }, function (err, user) {
        if (err) {
            return done(err);
        }
        if (user) {
            return done(null, false, { message: 'Email is already in use.' });
        }
        var newUser = new user();
        newUser.email = email;
        newUser.password = newUse.encryptPassword(password);
        newUser.save(function (err, result) {
            if (err) {
                return done(err);
            }
            return done(null, newUser);
        });


    })
}
));