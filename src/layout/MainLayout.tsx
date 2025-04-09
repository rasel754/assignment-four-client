import { Outlet } from "react-router-dom";
import Navbar from "../components/shered/Navbar";
import { ThemeProvider } from "../constants/ThemeContext";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </div>
  );
};

export default MainLayout;
