const getPerson = require('../dbs/get-person')
const express = require('express')
const router = express.Router();

router.get('/getPerson', (req, res)=> {
    getPerson(req, (result)=> {
        res.send(result)
    })
})
module.exports = router;