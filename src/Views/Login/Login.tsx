import { useState } from "react";

import classes from "./Login.module.scss";

import { useNavigate } from "react-router-dom";

const Login = () => {
  let [name, setName] = useState("");

  let [pwd, setPwd] = useState("");

  const navigate = useNavigate();

  let shuliang = (event: any) => {
    let name = event.target.value;

    setName(name);
  };

  let shuliang2 = (event: any) => {
    let name = event.target.value;

    setPwd(name);
  };

  let loginclick = () => {
    if (name === "" || pwd === "") {
      alert("用户名或密码不能为空");

      return;
    }

    alert("登录成功");

    navigate("/");
  };

  return (
    <div className={classes.container2}>
      <div className={classes.container}>
        <div className={classes.loginWrapper}>
          <div className={classes.header}>迷宫游戏</div>

          <div className={classes.formWrapper}>
            <input
              type="text"
              name="username"
              placeholder="username"
              className={classes.inputItem}
              onChange={(event) => shuliang(event)}
            />

            <input
              type="password"
              name="password"
              placeholder="password"
              className={classes.inputItem}
              onChange={(event) => shuliang2(event)}
            />

            <div className={classes.btn} onClick={() => loginclick()}>
              登录
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
