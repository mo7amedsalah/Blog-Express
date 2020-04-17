const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true, maxlength: 20, minlength:3},
    lastName: {type: String, required: true, maxlength: 20, minlength:3},
    password: {type: String, required: true, minlength:8},
    dob: {type: Date, required: true},
    gender: {type: String, required: true, enum: ['m', 'f']},
    email: {type: String, required: true, unique: true, match: /.+@.+\..+/, index: true},
    phoneNo: {type: String, required: true, maxlength: 11, minlength: 11}
})

userSchema.methods.getName = function getName() {
    return this.firstName + ' ' + this.lastName
}
const userModel = mongoose.model('User', userSchema)

module.exports = userModel