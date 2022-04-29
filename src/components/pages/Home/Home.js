import classes from "./Home.module.scss";
import TimerCard from "../../others/TimerCard/TimerCard";
import TimerList from "../../others/TimerList/TimerList";

const Home = () => {
  return (
    <div className={classes.homeContainer}>
      <TimerCard />
      <TimerList />
    </div>
  );
};

export default Home;
