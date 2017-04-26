const express = require("express")
const app = new express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

const getPerson = require('./server/routers/get-person')
const addPerson = require('./server/routers/add-person')

app.use('/', getPerson);
app.use('/', addPerson);

app.listen(3000, ()=> {
    console.log("listining 3000 port");
})