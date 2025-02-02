import { Link } from "react-router-dom";
import classes from "./title.module.scss";
import { CircleUser } from "lucide-react";
import { useAppSelector } from "../../../Store/hooks";

interface Props {
  title: string;
}

function Title({ title }: Props) {
  const isLogin = useAppSelector((state) => state.app.isLogin);
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
      {/* 项目个人中心 ｜ 登陆中心 */}
      {isLogin ? (
        <Link to="/user" className={classes.user}>
          <CircleUser />
        </Link>
      ) : (
        <Link to="/login" className={classes.user}>
          <CircleUser />
        </Link>
      )}
    </h1>
  );
}

export default Title;
