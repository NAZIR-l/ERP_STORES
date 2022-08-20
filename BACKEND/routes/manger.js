var express = require('express');
const passport = require('passport')
const Customer = require('../model/Customer')
const Employees = require('../model/DBemployee')
const Resource = require('../model/Source')
const Delivery = require('../model/Delivery')
const LocalStorage = require('passport-local').Strategy
const { showuser, createusers } = require('../Controller/Customer/customer');
var router = express.Router();


router.get('/Home', sign_Admin, function (req, res, next) {
    console.log("in HOME")
    res.send("HOME_PAGE")
    res.status(200)

});

function sign_Admin(req, res, next) {
    if (req.isAuthenticated()) {
        var massag = req.user;
        if (massag.id == "62d43a78e795a963500d59a2") {
            console.log("admin Authenticated")
            next()
        }
       
    }
    else{
        console.log("admin not  Authenticated")
    res.send("NOT_SIGN_IN_LIKE_ADMIN")
    res.status(203)

    
}
}

function sign_Employee(req, res, next) {
    if (req.isAuthenticated()) {
        var massag = req.user;
        Employees.findById(massag.id, (err, user) => {
            if (user) {
                console.log("Employee Authenticated")
                next()
            }
        })
    }
    else{
        console.log("admin not  Authenticated")
    res.status(203).send("NOT_SIGN_IN_LIKE_Employee")

    
}

}
function sign_User(req, res, next) {
    console.log(req.isAuthenticated())
    if (req.isAuthenticated()) {
        var massag = req.user;
        Customer.findById(massag.id, (err, user) => {
            if (user) {
                console.log("Customer Authenticated")
                next()
            }
        })
    }
    else{
        console.log("customer  not Authenticated")
        res.status(203).send("not  Authenticated user")
    }
}


function sign_Source(req, res, next) {
    console.log(req.isAuthenticated())
    if (req.isAuthenticated()) {
        var massag = req.user;
        Resource.findById(massag.id, (err, user) => {
            if (user) {
                console.log("Resource Authenticated")
                next()
            }
        })
    }
    else{
        console.log("Resource  not Authenticated")
        res.status(203).send("not  Authenticated Resource")
    }
}


function sign_Delivery(req, res, next) {
    console.log(req.isAuthenticated())
    if (req.isAuthenticated()) {
        var massag = req.user;
        Delivery.findById(massag.id, (err, user) => {
            if (user) {
                console.log("Delivery Authenticated")
                next()
            }
        })
    }
    else{
        console.log("Delivery  not Authenticated")
        res.status(203).send("not  Authenticated Delivery")
    }
}




function check_is_singin(req, res, next) {
    if (req.isAuthenticated()) {
        console.log(req.session)
        if (req.session.passport.user == '62d43a78e795a963500d59a2') {
            console.log(req.isAuthenticated())
            console.log("OKKKKKKKKKKKKKKKKKKKK ")
            next()
        }
        else {
            console.log(req.isAuthenticated())
            Employees.findById(req.session.passport.user, (err, user) => {
                if (user) {
                    console.log("employee")
                    next()
                }
                else {
                    console.log("no employee and user")
                    res.status(404)
                }
            })
        }
    }
    else {
        res.status(203).send("404_Not_Found")
        console.log(req.isAuthenticated())
        console.log("NOOt")
    }
}

function check_is_Login(req, res, next) {
    if (req.isAuthenticated()) {
        console.log("O KKKKKK ")
        next()
    }
    else {
        res.status(203).send("404_Not_Found")
        console.log(req.session)
        console.log(req.isAuthenticated())
        console.log("NOOt")
    }
}

module.exports = {
    check_is_singin,
    router,
    check_is_Login,
    sign_Admin,
    sign_Employee,
    sign_User,
    sign_Source,
    sign_Delivery
}
