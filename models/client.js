const mongoose = require('mongoose');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

const db = require("../database/db");
const clientschema = new mongoose.Schema({
    email:String,
    password:String
})
clientschema.plugin(passportLocalMongoose);

const clientmodel = mongoose.model('clientmodel',clientschema,'clients');
module.exports = mongoose.model('clientmodel',clientschema);

module.exports = clientmodel;