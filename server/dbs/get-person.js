const cn = require('./connect')

function getPerson(req, callback) {
    cn.MongoClient.connect(cn.url, (err, db)=> {
        const collection = db.collection('users');
        collection.find({}, {_id: 0}).toArray((err, result) => {
            callback(result);
        });
    })
}

module.exports = getPerson;