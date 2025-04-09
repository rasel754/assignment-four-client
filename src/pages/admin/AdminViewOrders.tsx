/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { TableColumnsType } from "antd";
import { Button, Modal, Space, Table } from "antd";
import { useState } from "react";
import { toast } from "sonner";
import {
  useAcceptOrderMutation,
  useCancleOrderMutation,
  useGetAllOrderQuery,
} from "../../redux/features/admin/orderManagementApi";
import "../../styles/customTable.css";
import { TOrder, TResponse } from "../../types";


type TTableData = {
  key: string;
  product: string;
  status: string;
  email: string;
  transactionId: string;
};

const AdminViewOrders = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );

  const {
    data: orders,
    isLoading,
    isFetching,
  } = useGetAllOrderQuery(undefined, {
    pollingInterval: 3000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

 


  const [cancleOrder] = useCancleOrderMutation();
  const [acceptOrder] = useAcceptOrderMutation();
  
  const handleAcceptOrder = async (orderId: string) => {
    const toastId = toast.loading("Accept Order...", {
      style: {
        padding: "10px",
        borderRadius: "8px",
        color: "yellowgreen",
      },
      position: "top-center",
    });
    try {
      const result = (await acceptOrder(orderId)) as TResponse<TOrder>;
      if (result?.data) {
        toast.success(result?.data?.message, {
          style: {
            padding: "10px",
            borderRadius: "8px",
            color: "green",
          },
          position: "top-center",
          id: toastId,
          duration: 2000,
        });
      } else {
        toast.error(result?.error?.data?.message, {
          id: toastId,
          duration: 2000,
          style: {
            padding: "10px",
            borderRadius: "8px",
            color: "red",
          },
          position: "top-center",
        });
      }
    } catch (err: any) {
      toast.error("Faild to delete product...", {
        id: toastId,
        duration: 2000,
        style: {
          padding: "10px",
          borderRadius: "8px",
          color: "red",
        },
        position: "top-center",
      });
    }
  }


  const showModal = (orderId: string) => {
    setSelectedProductId(orderId);
    setIsModalOpen(true);
  };


  const handleOk = async () => {
    if (selectedProductId) {
      setIsModalOpen(false);
      const toastId = toast.loading("Deleteing product...", {
        style: {
          padding: "10px",
          borderRadius: "8px",
          color: "yellowgreen",
        },
        position: "top-center",
      });
      try {
        const result = await cancleOrder(selectedProductId);
        if (result?.data) {
          toast.success(result?.data?.message, {
            style: {
              padding: "10px",
              borderRadius: "8px",
              color: "green",
            },
            position: "top-center",
            id: toastId,
            duration: 2000,
          });
        }
        setSelectedProductId(null);
      } catch (err: any) {
        toast.error("Faild to delete product...", {
          id: toastId,
          duration: 2000,
          style: {
            padding: "10px",
            borderRadius: "8px",
            color: "red",
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
      title: "Product Title",
      dataIndex: "product",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Transaction Id",
      dataIndex: "transactionId",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => handleAcceptOrder(record?.key)}
            style={{ backgroundColor: "#FAAD14" }}
          >
            Accept Order
          </Button>
          <>
            <Button
              onClick={() => showModal(record?.key)}
              color="danger"
              variant="solid"
            >
              Cancle Order
            </Button>
            <Modal
              title="Are you want to cancle order?"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>If you are sure then press ok</p>
            </Modal>
          </>
        </Space>
      ),
    },
  ];


  const orderDataSource: TTableData[] =
    orders?.data.length &&
    (orders?.data as TOrder[]).map(
      ({ _id, product, email, status, transaction }) => ({
        key: _id,
        product: product?.name,
        email,
        status,
        transactionId: transaction.id,
      })
    );
  return (
    <div>
      <Table
        className="custom-table"
        style={{ overflowX: "scroll" }}
        loading={isFetching && isLoading}
        columns={columns}
        dataSource={orderDataSource}
        pagination={false}
      />
      
    </div>
  );
};

export default AdminViewOrders;
