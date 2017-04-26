function Child(state = {name: 'child', age: 10}, action) {
    if (action.type === 'CADD' || action.type === "CREDUCE") {
        return Object.assign({}, state, {age: action.age});
    }
    return state;
}

module.exports = Child;