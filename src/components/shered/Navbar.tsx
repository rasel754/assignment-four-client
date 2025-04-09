import { LoginOutlined, LogoutOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Flex, Typography } from "antd";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.webp";
import {
  logout,
  selactToken,
  selactUser,
} from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const { Title } = Typography;

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const token = useAppSelector(selactToken);
  const user = useAppSelector(selactUser);
  const dispatch = useAppDispatch();

  return (
    <nav className="w-full bg-[#281E35] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <Flex
            onClick={() => navigate("/")}
            className="cursor-pointer items-center space-x-2"
          >
            <img  src={logo} alt="Script & Scroll Logo" className="h-10 rounded-full mx-1" />
            <Title level={3} className="!text-white !m-0 text-2xl font-bold">
            Script & Scroll
            </Title>
          </Flex>


          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-white px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-white/10 underline underline-offset-4"
                    : "hover:bg-white/5"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-white px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-white/10 underline underline-offset-4"
                    : "hover:bg-white/5"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `text-white px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-white/10 underline underline-offset-4"
                    : "hover:bg-white/5"
                }`
              }
            >
              Products
            </NavLink>

            {token && (
              <NavLink
                to={`/${user?.role}/dashboard`}
                className={({ isActive }) =>
                  `text-white px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-white/10 underline underline-offset-4"
                      : "hover:bg-white/5"
                  }`
                }
              >
                Dashboard
              </NavLink>
            )}
          </div>


          <div className="hidden md:flex items-center space-x-4">
            {!token ? (
              <Link to="/login">
                <Button
                  type="primary"
                 className="bg-[#FAAD14] hover:bg-[#FAAD14]/90 !text-[#281E35] font-medium border-0"
                >
                  <LoginOutlined className="mr-1" />
                  Login
                </Button>
              </Link>
            ) : (
              <Button
                onClick={() => dispatch(logout())}
               className="bg-[#FAAD14] hover:bg-[#FAAD14]/90 !text-[#281E35] font-medium border-0"
              >
                Logout
                <LogoutOutlined className="ml-1" />
              </Button>
            )}
          </div>


          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-white/80 focus:outline-none"
            >
              <MenuOutlined className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>


      {isOpen && (
        <div className="md:hidden bg-[#281E35] border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/90 hover:bg-white/5 hover:text-white"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/90 hover:bg-white/5 hover:text-white"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/90 hover:bg-white/5 hover:text-white"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Products
            </NavLink>
            {token && (
              <NavLink
                to={`/${user?.role}/dashboard`}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-white/90 hover:bg-white/5 hover:text-white"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </NavLink>
            )}
            <div className="pt-2">
              {!token ? (
                <Link to="/login" className="w-full">
                  <Button
                    type="primary"
                    className="w-full bg-white text-[#281E35] hover:bg-white/90 font-medium flex items-center justify-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <LoginOutlined className="mr-1" />
                    Login
                  </Button>
                </Link>
              ) : (
                <Button
                  onClick={() => {
                    dispatch(logout());
                    setIsOpen(false);
                  }}
                className="bg-[#FAAD14] hover:bg-[#FAAD14]/90 !text-[#281E35] font-medium border-0"
                >
                  Logout
                  <LogoutOutlined className="ml-1" />
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


