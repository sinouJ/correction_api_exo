const { Schema, model } = require('mongoose')

const User = new Schema({
    userId: Number,
    username: String,
    email: String,
    address: Object,
    phone: String,
    company: Object
})

const UserModel = model('User', User)

module.exports = UserModel