import React from "react";

import classes from "./TimerCard.module.scss";
import Timer from "../Timer/Timer";
import TimerControls from "../TimerControls/TimerControls";

function TimerCard() {
  return (
    <div className={classes.timer_card_container}>
      <div className={classes.card}>
        <Timer />
        <TimerControls />
      </div>
    </div>
  );
}

export default TimerCard;
