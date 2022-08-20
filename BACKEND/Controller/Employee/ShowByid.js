const Employee = require('../../model/DBemployee')
const Delivery = require('../../model/Delivery')


const HomeEmployeeBage = (req, res) => {
    const id = req.session.passport.user
    Employee.findById(id, (err, employee) => {
        if (err) {
            res.status(203)
        }
        else {
            res.send(employee)
        }
    })
}
const ShowDeliveryByid = (req, res) => {
    const id = req.session.passport.user
    Delivery.findById(id, (err, employee) => {
        if (err) {
            res.status(203)
        }
        else {
            res.send(employee)
        }
    })
}


module.exports = { HomeEmployeeBage ,ShowDeliveryByid};
