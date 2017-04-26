const express = require('express')
const router = express.Router();
const addPerson = require('../dbs/add-person')

router.post('/addPerson', (req, res)=> {
    addPerson(req, (result)=> {
        res.send(result)
    })
})
module.exports = router;