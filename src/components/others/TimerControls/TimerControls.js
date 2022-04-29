import { useSelector, useDispatch } from "react-redux";

import classes from "./TimerControl.module.scss";

function TimerControls() {
  const dispatch = useDispatch();
  const timerValue = useSelector((state) => state.timer.value);

  const playCountdown = () => {};
  return (
    <div className={classes.control_container}>
      <div className={classes.control}>
        <i className="fa-solid fa-pause"></i>
      </div>
      <div className={`${classes.control} ${classes.middle_control}`}>
        <i class="fa-solid fa-play"></i>
      </div>
      <div className={classes.control}>
        <i class="fa-solid fa-rotate-right"></i>
      </div>
    </div>
  );
}

export default TimerControls;
