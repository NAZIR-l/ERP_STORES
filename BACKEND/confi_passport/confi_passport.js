const LocalStrategy = require('passport-local').Strategy
const passport = require('passport')
const Customer = require('../model/Customer')
const Employees = require('../model/DBemployee')
const Resource = require('../model/Source')
const Delivery = require('../model/Delivery')

const bcrypt = require('bcrypt');


passport.serializeUser((user, done) => {
    console.log("serializeUSer" + user)
    return done(null, user.id);
});

passport.deserializeUser((id, done) => {
    console.log("deserializeUser")
    Employees.findById(id, (err, user) => {
        if (user) {
            console.log("the employee is found   " + user)
            return done(err, user);
        }
        else {
            Customer.findById(id, (err, users) => {
                if (users) {
                    console.log("the customer is found   " + users)
                    return done(err, users);
                }
                else {
                    Resource.findById(id, (err, Resource) => {
                        if (Resource) {
                            console.log("the Resource is found   " + Resource)
                            return done(err, Resource);
                        }
                        else {
                            Delivery.findById(id, (err, Delivery) => {
                                console.log("the Delivery is found   " + Delivery)
                                return done(err, Delivery);
                            })
                        }
                    });
                }
            })
        }
    })
})

passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, password, done) => {
    console.log(email)
    Employees.findOne({ Email: email }, (err, user) => {
        if (err) {
            return done(err, req.flash("signinError", "ERROR in find  "));
        }
        else if (user) {
            if (user.comparePassword(password)) {
                return done(null, user);
            }
            else {
                return done(null, false, req.flash("signinError", "password is incorrect"));
            }
        }
        else {
            Customer.findOne({ Email: email }, (err, users) => {
                if (users) {
                    if (bcrypt.compareSync(password, users.passwords)) {
                        return done(null, users);
                    }
                    else {
                        return done(null, false, req.flash("signinError", "password is incorrect"));
                    }
                }
                else {
                    Resource.findOne({ Email: email }, (err, source) => {
                        if (source) {
                            if (source.password == password) {
                                return done(null, source);
                            }
                            else {
                                return done(null, false, req.flash("signinError", "password is incorrect"));
                            }
                        }
                        else {
                            Delivery.findOne({ Email: email }, (err, delivery) => {
                                if (delivery) {
                                    if (delivery.passwords == password) {
                                        return done(null, delivery);
                                    }
                                    else {
                                        return done(null, false, req.flash("signinError", "password is incorrect"));
                                    }
                                }
                                else {
                                    return done(null, false, req.flash("signinError", "The Email OR Password is incorrect"));
                                }
                            })

                        }
                    })

                }
            })
        }
    })
}))