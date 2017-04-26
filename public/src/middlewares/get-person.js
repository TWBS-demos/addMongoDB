import request from "superagent";

export default store=>next=>action=> {
    if (action.type === 'GETPERSON') {
        request.get('/getPerson')
            .end((err, res)=> {
                console.log(action);
                next({type: action.type, result: res.body})
            })
    }
    else {
        next(action)
    }
}