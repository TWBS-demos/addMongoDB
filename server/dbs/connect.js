var mongoose = require("mongoose");
var url = "mongodb://127.0.0.1:27017/person";
const MongoClient = require('mongodb').MongoClient;

module.exports = {url, MongoClient}