import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Col, Flex, Row, Tag, Typography } from "antd";
import { Link } from "react-router-dom";
import DashboardBarChart from "../../components/ui/DashbordBarChart";
import StaticOrderTable from "../../components/ui/StaticOrderTable";
import { useGetAllproductQuery } from "../../redux/features/admin/productManagementApi";
import { useGetUserQuery } from "../../redux/features/auth/authApi";
import { logout } from "../../redux/features/auth/authSlice";
import { useGetMeOrdersQuery } from "../../redux/features/user/userOrdersApi";
import { useAppDispatch } from "../../redux/hooks";
import { useTheme } from "../../constants/ThemeContext";

const { Title, Text } = Typography;

const UserDashboard = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const { data: user } = useGetUserQuery(undefined, {
    pollingInterval: 3000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  const {
    data: orders,
    isFetching,
    isLoading,
  } = useGetMeOrdersQuery(undefined, {
    pollingInterval: 3000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  const { data: products } = useGetAllproductQuery([{}], {
    pollingInterval: 3000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  return (
    <Row gutter={16}>
      <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
        <div
          style={{
            minHeight: "100vh",
            borderRadius: "10px",
          }}
        >
         
          <div
            className="p-6 rounded-xl"
            style={{
              backgroundColor: theme.primary,
              color: theme.text,
            }}
          >

            <Flex vertical align="center" className="mb-6">
              <Avatar
                size={100}
                icon={<UserOutlined />}
                className="border-2 border-[#FAAD14] mb-4"
                src={user?.data?.image}
                style={{
                  backgroundColor: "#FAAD14",
                }}
              />
              <Title level={3} className="!text-white !mb-1">
                {user?.data?.name || "User Name"}
              </Title>
              <Text className="text-white/80">
                {user?.data?.email || "user@example.com"}
              </Text>
            </Flex>


            <div className="space-y-3 mb-6">
              <Card
                className="border-0 shadow-sm"
                style={{
                  backgroundColor: "#3A2C4D",
                }}
              >
                <Flex justify="space-between" align="center">
                  <Text className="text-white/80">Your Orders</Text>
                  <Tag
                    color="#FAAD14"
                    className="!text-[#281E35] !font-bold text-lg"
                  >
                    {orders?.data?.length || 0}
                  </Tag>
                </Flex>
              </Card>

              <Card
                className="border-0 shadow-sm"
                style={{
                  backgroundColor: "#3A2C4D",
                }}
              >
                <Flex justify="space-between" align="center">
                  <Text className="text-white/80">Total Products</Text>
                  <Tag
                    color="#FAAD14"
                    className="!text-[#281E35] !font-bold text-lg"
                  >
                    {products?.data?.length || 0}
                  </Tag>
                </Flex>
              </Card>
            </div>


            <div className="space-y-3">
              <Link to="/" className="block">
                <Button
                  block
                  size="large"
                  className="bg-[#FAAD14] hover:bg-[#FAAD14]/90 !text-[#281E35] font-bold h-12"
                >
                  Home
                </Button>
              </Link>
              <Button
                onClick={() => dispatch(logout())}
                block
                size="large"
                className="bg-[#ff4d4f] hover:bg-[#ff4d4f]/90 !text-white font-bold h-12"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 16 }}>
        <Flex vertical gap={16}>
          <StaticOrderTable
            orders={orders?.data}
            isLoading={isLoading}
            isFetching={isFetching}
          />
          <DashboardBarChart />
        </Flex>
      </Col>
    </Row>
  );
};

export default UserDashboard;
