import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../Store/hooks";

import classes from "./User.module.scss";

const User = () => {
  const navigate = useNavigate();

  const userInfo = useAppSelector((state) => state.app.userInfo);
  const userProfile = {
    highScore: 9999,
    level: 42,
    achievements: 15,
  };

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToGame = () => {
    navigate("/gameDescription");
  };
  return (
    <div className={classes.profileCenter}>
      <div className={classes.profileContainer}>
        <div className={classes.profileHeader}>
          <div className={classes.avatarContainer}>
            <div className={classes.avatar}>{userInfo?.name.charAt(0)}</div>
          </div>
          <h1 className={classes.nickname}>{userInfo?.name}</h1>
        </div>

        <div className={classes.statsContainer}>
          <div className={classes.statItem}>
            <h3>最高分数</h3>
            <div className={classes.statValue}>{userProfile.highScore}</div>
          </div>

          <div className={classes.statItem}>
            <h3>当前等级</h3>
            <div className={classes.statValue}>{userProfile.level}</div>
          </div>

          <div className={classes.statItem}>
            <h3>获得成就</h3>
            <div className={classes.statValue}>{userProfile.achievements}</div>
          </div>
        </div>
      </div>
      <div className={classes.buttonWrapper}>
        <button onClick={navigateToHome}>返回主页</button>
        <button onClick={navigateToGame}>开始游戏</button>
      </div>
    </div>
  );
};

export default User;
