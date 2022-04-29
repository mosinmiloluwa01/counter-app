import { useSelector } from "react-redux";

import classes from "./Timer.module.scss";

function Timer() {
  const timerValue = useSelector((state) => state.timer.value);
  return <div className={classes.timer_container}>{timerValue}</div>;
}

export default Timer;
