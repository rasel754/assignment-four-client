


import { Table, TableColumnsType, Tag, Typography } from "antd";
import { useGetMeOrdersQuery } from "../../redux/features/user/userOrdersApi";
import { TOrder } from "../../types";
import { useTheme } from "../../constants/ThemeContext";
import "../../styles/customTable.css"

const { Text } = Typography;

type TTableData = Pick<TOrder, "product" | "status" | "email"> & {
  key: string;
};

const ViewOrders = () => {
  const { theme } = useTheme();
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

  const getStatusTag = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return <Tag color="orange">PENDING</Tag>;
      case "completed":
        return <Tag color="green">COMPLETED</Tag>;
      case "failed":
        return <Tag color="red">FAILED</Tag>;
      case "processing":
        return <Tag color="blue">PROCESSING</Tag>;
      default:
        return <Tag>{status.toUpperCase()}</Tag>;
    }
  };

  const columns: TableColumnsType<TTableData> = [
    {
      title: (
        <Text style={{ backgroundColor: theme.primary, color: theme.text }}>
          Product Title
        </Text>
      ),
      dataIndex: "product",
      render: (product: string) => (
        <Text strong style={{ color: theme.text }}>
          {product}
        </Text>
      ),
    },
    {
      title: (
        <Text style={{ backgroundColor: theme.primary, color: theme.text }}>
          Email
        </Text>
      ),
      dataIndex: "email",
      render: (email: string) => (
        <Text style={{ backgroundColor: theme.primary, color: theme.text }}>
          {email}
        </Text>
      ),
    },
    {
      title: (
        <Text style={{ backgroundColor: theme.primary, color: theme.text }}>
          Status
        </Text>
      ),
      dataIndex: "status",
      align: "center",
      render: (status: string) => getStatusTag(status),
    },
  ];

  const orderDataSource: TTableData[] =
    orders?.data?.map(({ _id, product, email, status }: TOrder) => ({
      key: _id,
      product: product?.name,
      email,
      status,
    })) || [];

  return (
    <div
      className="p-6 rounded-lg"
      style={{
        backgroundColor: theme.primary,
        color: theme.text,
      }}
    >
      <Table
      className="custom-table"
        bordered
        loading={isFetching || isLoading}
        columns={columns}
        dataSource={orderDataSource}
        pagination={false}

        style={{}}

        />
    </div>
  );
};

export default ViewOrders;
