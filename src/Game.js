import React, { Component } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";
// import Leaderboard from './Leaderboard';
import "./Game.css";
import Loader from './Loader.js'
// const axios = require('axios').default;


const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: Array.from({ length: NUM_DICE }),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      rolling: false,
      leaderboard: undefined,
      isLoaded: false,
      disabled: true,
      gameOver: 0,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined, 
      }
    };
    this.roll = this.roll.bind(this);
    this.doScore = this.doScore.bind(this);
    this.toggleLocked = this.toggleLocked.bind(this);
    this.toggleClickSound = this.toggleClickSound.bind(this);
    this.toggleRollSound = this.toggleRollSound.bind(this);
    this.animateRoll = this.animateRoll.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.gameReset = this.gameReset.bind(this);

    this.displayRollInfo = this.displayRollInfo.bind(this);
  }

componentDidMount(){
  // this.animateRollSilent()
  // axios.get("http://localhost:9000/").then(response => {
  //   setTimeout(
  //     function(){
  //       this.setState({
  //         leaderboard: response.data,
  //         isLoaded: true
  //       });
  // }.bind(this),
  //   3000
  //   );
  // });
  setTimeout(
    function(){
      this.setState(st => ({
        // leaderboard: response.data,
        isLoaded: st.isLoaded = true
      }));
    }.bind(this),
      3000)}

  animateRoll(){
    this.toggleRollSound();
    this.setState({ rolling: true }, () => {
      setTimeout(this.roll, 1500)
    })
}
  roll(evt) {
    // roll dice whose indexes are in reroll
    this.setState(st => ({
      dice: st.dice.map((d, i) =>
        st.locked[i] ? d : Math.ceil(Math.random() * 6)
      ),
      locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
      rollsLeft: st.rollsLeft - 1,
      rolling: false
    }));
  }
    
  toggleLocked(idx) {
    if (this.state.rollsLeft > 0 && !this.state.rolling){
    this.setState(st => ({
      locked: [
        ...st.locked.slice(0, idx),
        !st.locked[idx],
        ...st.locked.slice(idx + 1)
      ]
    }))

    this.toggleClickSound()
  }}

  toggleClickSound(){
    let audio = new Audio("./click.mp3")
    const start = () => {
        audio.play()
      }
      start();
  }

  toggleRollSound(){
    let audio = new Audio("./diceroll.mp3")
    const start = () => {
        audio.play()
      }
      start();
  }
  handleReset(){
    this.gameReset()
  }

  gameReset(){
    this.setState({
      dice: Array.from({ length: NUM_DICE }),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      rolling: false,
      leaderboard: undefined,
      disabled: true,
      gameOver: 0,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined, 
      }
    })
    console.log("State Reset")
  }

  doScore(rulename, ruleFn) {
    // evaluate this ruleFn with the dice and score this rulename
    this.setState(st => ({
      scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
      rollsLeft: NUM_ROLLS,
      gameOver: st.gameOver + 1,
      locked: Array(NUM_DICE).fill(false)
    }));
    this.animateRoll();
  }

  displayRollInfo(){
    const messages = [
      "O Rolls Left",
      "1 Roll Left",
      "2 Rolls Left",
      "Starting Round"
    ];
    if (this.state.gameOver === 13){
      let messages = "Game Over"
      return messages
    }else {
    return messages[this.state.rollsLeft]
  }

}
  render() {
    const { dice, locked, rollsLeft, rolling, scores} = this.state;
    return (
      <div>
      {this.state.isLoaded ? (
      
      <div className='Game'>
        <header className='Game-header'>
          <h1 className='App-title'>Yahtzee!</h1>

          <section className='Game-dice-section'>
            <Dice
              dice={dice}
              locked={locked}
              handleClick={this.toggleLocked}
              disabled={rollsLeft === 0}
              rolling={rolling}
            />
            <div className='Game-button-wrapper'>
              <button
                className='Game-reroll'
                disabled={locked.every(x => x) || rollsLeft === 0 || rolling}
                onClick={this.animateRoll}
              >
                {this.displayRollInfo()} 
              </button>
            </div>
          </section>
        </header>
        <ScoreTable handleReset={this.handleReset} gameOver={this.state.gameOver} doScore={this.doScore} scores={scores} />
      </div>)
      : (
        <Loader />
      )}
    </div>
    
    )
  }
}

export default Game;
