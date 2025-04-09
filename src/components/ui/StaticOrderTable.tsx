// import { Table, TableColumnsType } from "antd";
// import "../../styles/customTable.css";
// import { TOrder, TStatus } from "../../types";

// //type for handle table
// type TTableData = {
//   key: string;
//   product: string;
//   email: string;
//   status: TStatus;
//   transactionId: string;
// };

// const StaticOrderTable = ({
//   orders,
//   isLoading,
//   isFetching,
// }: {
//   orders: TOrder[];
//   isLoading: boolean;
//   isFetching: boolean;
// }) => {
//   const columns: TableColumnsType<TTableData> = [
//     {
//       title: "Product Title",
//       dataIndex: "product",
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//     },
//     {
//       title: "Transaction Id",
//       dataIndex: "transaction.id",
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//     },
//   ];
//   //data source for table
//   const orderDataSource: TTableData[] = orders?.map(
//     ({ _id, product, email, status, transaction }) => ({
//       key: _id,
//       product: product?.name || "N/A",
//       email: email || "N/A",
//       status: status || "Pending",
//       transactionId: transaction?.id || "N/A",
//     })
//   ) || []; // Ensure it's always an array, even if orders is undefined

//   return (
//     <Table
//       className="custom-table"
//       loading={isFetching && isLoading}
//       columns={columns}
//       dataSource={orderDataSource}
//       pagination={false}
//     />
//   );
// };

// export default StaticOrderTable;

import { Button, Table, TableColumnsType, Tag, Typography } from "antd";
import { TOrder, TStatus } from "../../types";
import { useTheme } from "../../constants/ThemeContext";
import "../../styles/customTable.css";
const { Text, Title } = Typography;

type TTableData = {
  key: string;
  product: string;
  email: string;
  status: TStatus;
  transactionId: string;

};

const statusTagColor: Record<TStatus, string> = {
  Pending: "orange",
  Shipping: "blue",
};

const StaticOrderTable = ({
  orders,
  isLoading,
  isFetching,
}: {
  orders: TOrder[];
  isLoading: boolean;
  isFetching: boolean;
}) => {
  const { theme } = useTheme();

  const columns: TableColumnsType<TTableData> = [
    {
      title: <Text className="!text-white">Product</Text>,
      dataIndex: "product",
      render: (text: string) => (
        <Text strong className="!text-white">
          {text}
        </Text>
      ),
      sorter: (a, b) => a.product.localeCompare(b.product),
      width: '25%'
    },
    {
      title: <Text className="!text-white">Email</Text>,
      dataIndex: "email",
      render: (text: string) => (
        <Text className="!text-white/80">{text}</Text>
      ),
      width: '25%'
    },
    {
      title: <Text className="!text-white">Transaction ID</Text>,
      dataIndex: "transactionId",
      render: (text: string) => (
        <Text code className="!text-[#FAAD14]">
          {text}
        </Text>
      ),
      width: '25%'
    },
    {
      title: <Text className="!text-white">Status</Text>,
      dataIndex: "status",
      render: (status: TStatus) => (
        <Tag 
          color={statusTagColor[status]} 
          className="!capitalize !font-medium"
        >
          {status}
        </Tag>
      ),
      filters: Object.entries(statusTagColor).map(([status]) => ({
        text: status,
        value: status,
      })),
      onFilter: (value, record) => record.status === value,
      width: '15%'
    },
  ];

  const orderDataSource: TTableData[] =
    orders?.map(({ _id, product, email, status, transaction }) => ({
      key: _id,
      product: product?.name || "N/A",
      email: email || "N/A",
      status: status || "Pending",
      transactionId: transaction?.id || "N/A",
     
    })) || [];

  return (
    <div className="p-4 rounded-xl" style={{ 
      backgroundColor: theme.primary,
      border: `1px solid ${theme.text}20`
    }}>
      <Title level={4} className="!text-white !mb-4">Order History</Title>
      <Table
        bordered

        loading={isFetching || isLoading}
        columns={columns}
        dataSource={orderDataSource}
        pagination={{ 
          pageSize: 5,
          showSizeChanger: true,
          className: "!bg-[#281E35] !text-white",
          itemRender: (_, type, originalElement) => {
            if (type === 'prev' || type === 'next') {
              return (
                <Button
                  className="!bg-[#FAAD14] !text-[#281E35] !border-none hover:!bg-[#FAAD14]/90"
                >
                  {type === 'prev' ? 'Previous' : 'Next'}
                </Button>
              );
            }
            return originalElement;
          }
        }}
        className="custom-table"
        style={{
          backgroundColor: "#281E35"
        }}
        rowClassName={(record) => 
          `hover:!bg-[#3A2C4D] ${record.status === ('Cancelled' as TStatus) ? '!bg-[#281E35]/50' : ''}`
        }
      />
    </div>
  );
};

export default StaticOrderTable;