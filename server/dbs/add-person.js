const cn = require('./connect')

function addPerson(req, callback) {
    cn.MongoClient.connect(cn.url, (err, db)=> {
        const collection = db.collection('users');
        collection.insert({name: req.body.name, age: req.body.age})

    })
    const reslut = req.body;
    callback(reslut)
}

module.exports = addPerson;