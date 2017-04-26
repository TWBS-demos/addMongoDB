import request from "superagent";

export default store=>next=>action=> {
    if (action.type === 'PADD') {
        request.post('/addPerson')
            .send({name: action.name, age: action.age})
            .end((err, res)=> {
                next({type: action.type, result: res.body})
            })
    }
    else {
        next(action)
    }
}