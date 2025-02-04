import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import classes from "./title.module.scss";
import { CircleUser } from "lucide-react";

import { useAppSelector } from "../../../Store/hooks";
import ThemeButton from "../theme-button/theme-button";

interface Props {
  title: string;
}

function Title({ title }: Props) {
  const navigate = useNavigate();

  const userInfo = useAppSelector((state) => state.app.userInfo);

  const handleProfile = () => {
    if (userInfo !== null) {
      navigate("/user");
    } else {
      localStorage.setItem("redirectAfterLogin", "/user");
      navigate("/login");
    }
  };
  return (
    <h1 className={classes.title} data-testid="title">
      <div className={classes.titleWrapper}>
        {/* 项目logo */}
        <Link to="/" className={classes.logo}>
          <img src="public/Images/medie_type_png/logo.png" alt="" />
        </Link>

        {/* 项目标题 */}
        <h1 className={classes.titleH1}>{title}</h1>
      </div>
      <div>
        {/* 项目个人中心 ｜ 登陆中心 */}
        <a className={classes.user} onClick={handleProfile}>
          <CircleUser />
        </a>
        <ThemeButton />
      </div>
    </h1>
  );
}

export default Title;
