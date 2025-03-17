import classes from "./app-tour.module.scss";

function AppTour() {
  return (
    <>
      <div className={classes.tourWrapper}>
        <button className={classes.tour}>游戏操作指南</button>
      </div>
    </>
  );
}

export default AppTour;
