import {connect} from "react-redux";
import Child from "../components/Child";

const mapDispatchToProps = (dispatch)=> {
    return {
        onAdd: (age)=> {
            dispatch({type: "CADD", age})
        },

        onReduce: (age)=> {
            dispatch({type: "CREDUCE", age})
        }
    }
}

const mapStateToProps = (state)=> {
    return {
        name: state.Child.name,
        age: state.Child.age
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Child)