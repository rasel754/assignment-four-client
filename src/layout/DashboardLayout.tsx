
import { LogoutOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, Typography, Avatar } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.webp";
import { adminPahts } from "../constants/adminsidebar.constants";
import { userPaths } from "../constants/usersidebar.constants";
import { logout, selactUser } from "../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useTheme } from "../constants/ThemeContext";

const { Header, Content, Sider } = Layout;
const { Text } = Typography;

const DashboardLayout = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const user = useAppSelector(selactUser);
  const dispatch = useAppDispatch();

  const userRole = {
    ADMIN: "admin",
    USER: "user",
  };

  const role = user?.role;
  let sidebarItems;
  switch (role) {
    case userRole.ADMIN:
      sidebarItems = adminPahts;
      break;
    case userRole.USER:
      sidebarItems = userPaths;
      break;
    default:
      break;
  }

  return (
    <Layout
      hasSider
      className="min-h-screen"
      style={{
        backgroundColor: theme.primary,
        color: theme.text,
      }}
    >
      <Sider
        width={250}
        breakpoint="lg"
        collapsedWidth="0"
        className="!bg-[#1a1429] sticky top-0 h-screen"
        style={{
          borderRight: `1px solid ${theme.text}20`,
        }}
      >
        <div className="flex flex-col h-full">
          <div
            className="flex items-center justify-center p-4 mb-4 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <Avatar src={logo} size="large" className="!bg-white" />
            <Text strong className="!text-white text-xl ml-3">
              Script & Scroll
            </Text>
          </div>


          <Menu
            theme="dark"
            mode="inline"
            items={sidebarItems}
            className="!bg-transparent !border-r-0 flex-1"
            style={{
              backgroundColor: "transparent",
            }}
          />
        </div>
      </Sider>


      <Layout>

        <Header
          className="sticky top-0 z-10 w-full flex justify-between items-center px-6"
          style={{
            backgroundColor: theme.primary,
            borderBottom: `1px solid ${theme.text}20`,
            height: "64px",
          }}
        >
          <div className="flex items-center cursor-pointer">
            <Text strong className="!text-white text-lg">
              {user?.role === userRole.ADMIN ? "Admin Dashboard" : "My Account"}
            </Text>
          </div>

          <Button
            onClick={() => dispatch(logout())}
            className="flex items-center bg-[#FAAD14] hover:bg-[#FAAD14]/90 !text-[#281E35] font-medium"
            icon={<LogoutOutlined />}
          >
            Logout
          </Button>
        </Header>


        <Content
          style={{
            backgroundColor: theme.primary,
            color: theme.text,
            padding: "16px",
          }}
          className="p-6"
        >
          <div
            className="bg-white/5 rounded-lg p-6 min-h-[calc(100vh-112px)]"
            style={{
              border: `1px solid ${theme.text}20`,
              backgroundColor: theme.primary,
              color: theme.text,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
