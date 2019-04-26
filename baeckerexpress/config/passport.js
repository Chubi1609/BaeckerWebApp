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
    
},function(){

}));