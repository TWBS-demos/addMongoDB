function Parent(state = [{name: 'parent', age: 40}], action) {
    switch (action.type) {
        case'PADD' || "PREDUCE": {
            return [...state, action.result];
        }
        case 'GETPERSON': {
            console.log("get");
            return [...state, ...action.result];
        }
    }
    return state;
}

module.exports = Parent;