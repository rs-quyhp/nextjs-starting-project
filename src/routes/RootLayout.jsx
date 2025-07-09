import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader.component";

const RootLayout = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
};

export default RootLayout;
