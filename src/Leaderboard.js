import React, { Component } from "react";

class Leaderboard extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
            {this.props.leaderboard}
            </div>
        )
    }
}

export default Leaderboard;