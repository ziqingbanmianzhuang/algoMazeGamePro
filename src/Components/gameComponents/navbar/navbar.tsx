import AppTour from "@/Components/gameComponents/app-tour/app-tour";
import CellInfo from "@/Components/gameComponents/cell-info/cell-info";
import ThemeButton from "@/Components/navbar/theme-button/theme-button";

import { useAppSelector } from "../../../Store/hooks";

import classes from "./navbar.module.scss";

export interface Props {
  title: string;
  children?: React.ReactNode;
}

function Navbar() {
  const userInfo = useAppSelector((state) => state.app.userInfo);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: " 0 10px 10px",
          // 添加一个下阴影，左边、右边、上边都无阴影
          boxShadow: "0 10px 10px 0 rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className={classes.avatar}>{userInfo?.name.charAt(0)}</div>
          <span style={{ fontSize: "36px" }}>第一关</span>
        </div>
        <AppTour />
        <CellInfo />
        <ThemeButton />
      </div>
    </>
  );
}

export default Navbar;
