var passport = require('passport');
var user = require('../models/user');
var local_strategy = require('passport-local');

passport.serializeUser(function(user,done){
    done(null,user.email);
});

passport.deserializeUser()(function(email,done){
    user.findById(email,function(err,user){
        done(err,user);
    })
});
passport.use('local.signup', new local_strategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
    
},function(req, email, password, done){
    user.findOne({'email':email}, function(err, user){
        if(err){
            return done(err);
        }
        if(user){
            return done(null, false, {message: 'Email is already in use.'});    
        }
        var newUser = new user();
        newUser.email = email;
        newUser.password = newUse.encryptPassword(password);
        newUser.save(function(err, result) {
            if(err){
                return done(err);
            }
            return done(null, newUser);
        });
    
    }));