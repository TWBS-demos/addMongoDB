import React, {Component} from "react";

class HomePage extends Component {
    render() {
        return <div>
            {this.props.children}
        </div>
    }
}

module.exports = HomePage;