import React, { Component } from "react";
import MainStyles from "./styles/main.module.scss";

interface MainProps {
  onStartGame: (min: number, max: number) => void;
}

interface MainState {
  min: number;
  max: number;
}

export default class Main extends Component<MainProps, MainState> {
  state: MainState = {
    min: 0,
    max: 0,
  };
  render() {
    const { onStartGame } = this.props;
    const { min, max } = this.state;
    return (
      <div className={MainStyles.container}>
        <form className={MainStyles.form}>
          <div className={MainStyles["form-input"]}>
            <input
              placeholder="Minimal sonni kiriting"
              type="text"
              id="min"
              required
              onChange={(e) => this.setState({ min: Number(e.target.value) })}
            />
          </div>
          <div className={MainStyles["form-input"]}>
            <input
              placeholder="Maximal sonni kiriting"
              type="text"
              id="max"
              required
              onChange={(e) => this.setState({ max: Number(e.target.value) })}
            />
          </div>
          <button onClick={() => onStartGame(min, max)} className={MainStyles.button}>
            Go!
          </button>
        </form>
      </div>
    );
  }
}
