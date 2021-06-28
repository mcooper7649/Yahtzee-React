import React, { Component } from "react";
import "./Die.css";

class Die extends Component {

static defaultProps = {
  numberWords: ["one", "two", "three", "four", "five", "six"],
  val: 6
}

  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handlePoint.bind(this)
  }
handleClick(){
  this.props.handleClick(this.props.idx)
}

handlePoint = () => {
  console.log("Clicked")
}


  render() {
    const { numberWords, locked, val, disabled, rolling } = this.props;
  let classes =`Die fas fa-dice-${numberWords[val - 1]} fa-4x `;
  if(locked) classes += 'Die-locked';
  if(rolling) classes += 'Die-rolling';
    return (
      <div>
      <i
        className={classes}
        onClick={this.handleClick}
        disabled={disabled}
      >
      </i>
      </div>
    );
  }
}

export default Die;
