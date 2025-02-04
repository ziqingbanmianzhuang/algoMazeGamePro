import Navbar from "../Components/navbar/navbar";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../Store/hooks";

import classes from "./Home.module.scss";
function Index() {
  const navigate = useNavigate();

  const userInfo = useAppSelector((state) => state.app.userInfo);

  const handleStartGame = () => {
    if (userInfo !== null) {
      navigate("/gameDescription");
    } else {
      localStorage.setItem("redirectAfterLogin", "/gameDescription");
      navigate("/login");
    }
  };

  return (
    <>
      <Navbar title="基于React和搜索算法的迷宫游戏设计与实现" />

      <a onClick={handleStartGame}>
        <img
          className={classes.homeImage}
          src="public/Images/medie_type_png/home.png"
          alt=""
        />
      </a>
    </>
  );
}

export default Index;
