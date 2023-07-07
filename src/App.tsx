import { Component } from "react";
import { Wheel } from "./components";
import AppStyles from "./styles/app.module.scss";
import { randomNumbers } from "./utils";
import Main from "./components/main";

interface AppState {
  isStarted: boolean;
  randomNumbersArray: number[];
  min: number;
  max: number;
}

export default class App extends Component<{}, AppState> {
  state: AppState = {
    isStarted: false,
    randomNumbersArray: [],
    min: 0,
    max: 0,
  };

  stopGame = () => {
    this.setState({ isStarted: false });
  };

  startGame = (min: number, max: number) => {
    if (min !== max && min !== 0 && max !== 0)
      this.setState({ min, max, isStarted: true, randomNumbersArray: randomNumbers(min, max) });
  };

  render() {
    const { isStarted, randomNumbersArray, min, max } = this.state;
    return (
      <div>
        {isStarted ? (
          <Wheel min={min} max={max} number={randomNumbersArray} stopGame={this.stopGame} />
        ) : (
          <Main onStartGame={this.startGame} />
        )}
      </div>
    );
  }
}
