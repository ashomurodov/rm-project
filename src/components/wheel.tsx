import { Component } from "react";
import Number from "./number";
import WheelStyles from "./styles/wheel.module.scss";
import { randomNumbers } from "../utils";

interface WheelProps {
  number: number[];
  stopGame: () => void;
  min: number;
  max: number;
}

interface WheelState {
  pixel: number;
  isStarted: boolean;
  number: number[];
}

export default class Wheel extends Component<WheelProps, WheelState> {
  state: WheelState = {
    pixel: 0,
    isStarted: false,
    number: [],
  };

  componentDidMount(): void {
    this.setState({ number: this.props.number });
  }

  restartGame = () => {};
  render() {
    const { stopGame, min, max } = this.props;
    const { pixel, isStarted, number } = this.state;
    const wheelStyle = { transform: `translate(0, -${pixel}px)` };
    const placeHolder = new Array(30).fill("?");
    const numbers = isStarted ? number : placeHolder;
    return (
      <div className={WheelStyles.wheel_gamezone}>
        <button className={WheelStyles.gameStop} onClick={stopGame}>
          Edit
        </button>
        <div className={WheelStyles.wheel_container}>
          <div className={isStarted ? WheelStyles.wheel_start : WheelStyles.wheel} style={wheelStyle}>
            {numbers.map((item, idx) => (
              <Number key={idx} number={item} />
            ))}
          </div>
        </div>
        <div className={WheelStyles.button_container}>
          <button
            onClick={() => {
              this.setState({ isStarted: true, pixel: (max - min) * 90 }, () => {});
            }}
          >
            Start
          </button>
          <button
            onClick={() => {
              this.setState({ isStarted: false, pixel: 0, number: randomNumbers(min, max) }, () => {});
            }}
          >
            Restart
          </button>
        </div>
      </div>
    );
  }
}
