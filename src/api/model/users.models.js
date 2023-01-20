const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema (
    {
        userName: {type: String, required: true},
        userMail: {type: String, required: true},
        userImage: {type: String, require: false},
        userPhone: {type: Number, required: true},
        password: {type: String, required: true},

    }, {timestamps: true}
);

const Users = mongoose.model('users', usersSchema);

module.exports = Users;
