import React, {Component} from "react";
import {Render} from "react-dom";
import {Link} from "react-router";


class Child extends Component {
    add() {
        const newAge = this.props.age + 1;
        this.props.onAdd(newAge);
    }

    reduce() {
        const newAge = this.props.age - 1;
        this.props.onReduce(newAge);
    }

    render() {
        return <div>
            <h1>child</h1>
            <p>{this.props.name}的年龄为{this.props.age}岁</p>
            <button onClick={this.add.bind(this)}>增加</button>
            <button onClick={this.reduce.bind(this)}>减少</button>
            <Link to="/">parent</Link>
        </div>
    }
}
module.exports = Child;