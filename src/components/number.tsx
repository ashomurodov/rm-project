import NumberStyles from "./styles/number.module.scss";

interface NumberProps {
  number: number;
}

const Number = ({ number }: NumberProps) => <h3 className={NumberStyles.number}>{number}</h3>;

export default Number;
