import Navbar from "../Components/navbar/navbar";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../Store/hooks";

import classes from "./Home.module.scss";
function Index() {
  const isLogin = useAppSelector((state) => state.app.isLogin);
  return (
    <>
      <Navbar title="基于React和搜索算法的迷宫游戏设计与实现" />
      {isLogin ? (
        <Link to="/gameDescription">
          <img
            className={classes.homeImage}
            src="public/Images/medie_type_png/home.png"
            alt=""
          />
        </Link>
      ) : (
        <Link to="/login">
          <img
            src="public/Images/medie_type_png/home.png"
            alt=""
            className={classes.homeImage}
          />
        </Link>
      )}
    </>
  );
}

export default Index;
