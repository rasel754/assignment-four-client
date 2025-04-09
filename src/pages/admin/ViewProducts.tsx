
import {
  useDeleteProductMutation,
  useGetAllproductQuery,
} from "../../redux/features/admin/productManagementApi";
import { Button, Modal, Pagination, Space, Table, Tag, Typography } from "antd";
import type { TableColumnsType } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { TProduct } from "../../types";
import { useTheme } from "../../constants/ThemeContext";

const { Text } = Typography;

type TTableData = Pick<TProduct, "image" | "name" | "price" | "inStock"> & {
  key: string;
};

const ViewProducts = () => {
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );
  const [page, setPage] = useState(1);

  const {
    data: products,
    isLoading,
    isFetching,
  } = useGetAllproductQuery([{ name: "page", value: page }], {
    pollingInterval: 3000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  const [deleteProduct] = useDeleteProductMutation();
  const metaData = products?.meta;

  const showModal = (productId: string) => {
    setSelectedProductId(productId);
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    if (selectedProductId) {
      setIsModalOpen(false);
      const toastId = toast.loading("Delet product...", {
        style: {
          backgroundColor: theme.primary,
          color: theme.text,
          padding: "16px",
          borderRadius: "8px",
          border: `1px solid ${theme.text}`,
        },
        position: "top-center",
      });

      try {
        const result = await deleteProduct(selectedProductId);
        if (result?.data) {
          toast.success(result.data.message, {
            style: {
              backgroundColor: "#52c41a",
              color: "white",
              padding: "16px",
              borderRadius: "8px",
            },
            position: "top-center",
            id: toastId,
            duration: 2000,
          });
          setSelectedProductId(null);
        }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        toast.error("Failed to delete product", {
          id: toastId,
          duration: 2000,
          style: {
            backgroundColor: "#ff4d4f",
            color: "white",
            padding: "16px",
            borderRadius: "8px",
          },
          position: "top-center",
        });
      }
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedProductId(null);
  };

  const columns: TableColumnsType<TTableData> = [
    {
      title: <Text style={{ color: theme.text }}>Image</Text>,
      dataIndex: "image",
      align: "center",
      render: (image: string) => (
        <div className="flex justify-center">
          <img
            width={80}
            height={80}
            src={image}
            alt="product"
            className="rounded-lg object-cover border border-white/10"
          />
        </div>
      ),
    },
    {
      title: <Text style={{ color: theme.text }}>Product Name</Text>,
      dataIndex: "name",
      render: (name: string) => (
        <Text strong style={{ color: theme.text }}>
          {name}
        </Text>
      ),
    },
    {
      title: <Text style={{ color: theme.text }}>Price</Text>,
      dataIndex: "price",
      align: "center",
      render: (price: number) => (
        <Tag color="#FAAD14" className="text-[#281E35] font-bold">
          ${price.toFixed(2)}
        </Tag>
      ),
    },
    {
      title: <Text style={{ color: theme.text }}>Status</Text>,
      dataIndex: "status",
      align: "center",
      render: (status: string) => (
        <Tag color={status === "active" ? "green" : "red"}>
          {status}
        </Tag>
      ),
    },
    {
      title: <Text style={{ color: theme.text }}>Actions</Text>,
      key: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`update/${record.key}`}>
            <Button className="bg-[#FAAD14] hover:bg-[#FAAD14]/90 text-[#281E35] font-medium border-0">
              Edit
            </Button>
          </Link>
          <Button
            onClick={() => showModal(record.key)}
            className="bg-[#ff4d4f] hover:bg-[#ff4d4f]/90 text-white font-medium border-0"
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  const productsData: TTableData[] =
    products?.data?.map(
      ({ _id, image, name, price, inStock }: TProduct) => ({
        key: _id,
        image,
        name,
        price,
        inStock,
      })
    ) || [];


    
  return (
    <div
      className="p-6 rounded-lg"
      style={{
        backgroundColor: theme.primary,
        color: theme.text,
      }}
    >
      <Table
        bordered
        loading={isFetching || isLoading}
        columns={columns}
        dataSource={productsData}
        pagination={false}
        className="custom-table"
        style={{
          backgroundColor: theme.primary,
        }}
        rowClassName={() => "hover:bg-white/5"}
      />

      <Modal
        title={
          <Text strong style={{ color: theme.text }}>
            Confirm Deletion
          </Text>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Confirm"
        cancelText="Cancel"
        okButtonProps={{
          className: "bg-[#ff4d4f] hover:bg-[#ff4d4f]/90 text-white",
        }}
        cancelButtonProps={{
          className: "border-white/30 text-white hover:text-white/80",
        }}
        style={{
          backgroundColor: theme.primary,
        }}
      >
        <Text style={{ color: "black" }}>
          Are you sure you want to delete this product? This action cannot be
          undone.
        </Text>
      </Modal>

      <div className="flex justify-center mt-6">
        <Pagination
          current={page}
          pageSize={metaData?.limit}
          total={metaData?.total}
          onChange={setPage}
          showSizeChanger={false}
          itemRender={(_current, type, originalElement) => {
            if (type === "prev" || type === "next") {
              return (
                <Button
                  className={`border-white/30 ${
                    type === "prev" ? "mr-2" : "ml-2"
                  }`}
                  style={{ color: theme.text }}
                >
                  {type === "prev" ? "Previous" : "Next"}
                </Button>
              );
            }
            return originalElement;
          }}
          className="ant-pagination-custom"
          style={{
            color: theme.text,
          }}
        />
      </div>
    </div>
  );
};

export default ViewProducts;
