import classes from "./User.module.scss";

const User = () => {
  const userProfile = {
    nickname: "守护世界的半面妆",
    highScore: 9999,
    level: 42,
    achievements: 15,
  };

  return (
    <div className={classes.profileCenter}>
      <div className={classes.profileContainer}>
        <div className={classes.profileHeader}>
          <div className={classes.avatarContainer}>
            <div className={classes.avatar}>
              {userProfile.nickname.charAt(0)}
            </div>
          </div>
          <h1 className={classes.nickname}>{userProfile.nickname}</h1>
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
    </div>
  );
};

export default User;
