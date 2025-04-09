


import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Input, Typography } from "antd";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "sonner";
import { useGetProductQuery } from "../../redux/features/admin/productManagementApi";
import LoadingSpinner from "../shered/LoadingSpinner";
import { useTheme } from "../../constants/ThemeContext";
import { useCreateOrderMutation } from "../../redux/features/user/userOrdersApi";
import { useAppSelector } from "../../redux/hooks";
import { selactUser } from "../../redux/features/auth/authSlice";

const { Title, Text } = Typography;

const ProductCart = () => {
  const { theme } = useTheme();
  const { productId } = useParams();


  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  
  const user = useAppSelector(selactUser);


  const { data: product, isFetching } = useGetProductQuery(productId);

  
  const [createOrder , {isLoading }] = useCreateOrderMutation();

  useEffect(() => {
    if (product?.data?.price) {
      setTotalPrice(product?.data?.price * quantity);
    }
  }, [product?.data?.price, quantity]);

  
  const handleProcedCheckout = async () => {

    const tostId = toast.loading("Processing your order...", {
      style: {
        backgroundColor: theme?.primary,
        color: theme?.text,
        padding: "16px",
        borderRadius: "8px",
        border: `1px solid ${theme?.text}`
      },
      position: "top-center",
    });

   
    if (!user?.email) {
      toast.error("You must be logged in to place an order.", {
        id: tostId,
        duration: 2000,
        style: {
          backgroundColor: "#ff4d4f",
          color: "white",
          padding: "16px",
          borderRadius: "8px",
        },
      });
      return;
    }

    try {

      const order = {
        product: product?.data?._id,
        quantity: quantity,
        email: user?.email,
      };

      
      const orderedUrl = await createOrder(order);

      
      if (orderedUrl?.data?.data) {
        toast.success("Redirecting to payment...", {
          id: tostId,
          duration: 1000,
          style: {
            backgroundColor: "#52c41a",
            color: "white",
            padding: "16px",
            borderRadius: "8px"
          }
        });
        setTimeout(() => {
          window.location.href = orderedUrl.data.data;
        }, 1000);
      }
    } catch (err) {
      console.log(err)
      toast.error("Payment initialization failed", {
        
        id: tostId,
        duration: 2000,
        style: {
          backgroundColor: "#ff4d4f",
          color: "white",
          padding: "16px",
          borderRadius: "8px"
        }
      });
    }
  };


  if (isLoading || isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <div 
      className="w-full min-h-screen flex items-center justify-center p-4"
      style={{ 
        backgroundColor: theme.primary,
        color: theme.text,
      }}
    >
      <div className="max-w-4xl w-full">
        <div className="bg-white/10 rounded-xl p-6 md:p-8 shadow-lg backdrop-blur-sm">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 flex justify-center">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <img
                  src={product?.data?.image}
                  alt={product?.data?.name}
                  className="w-full max-w-xs h-auto object-contain"
                />
              </div>
            </div>


            <div className="flex-1 flex flex-col">
              <Title level={2} className="!text-white !mb-2">
                {product?.data.name}
              </Title>
              
              <Text className="text-[#FAAD14] text-2xl font-bold mb-6">
                ${product?.data.price?.toFixed(2)}
              </Text>


              <div className="mb-8">
                <Text className="text-white/80 block mb-2">Quantity:</Text>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    className="bg-[#FAAD14] text-[#281E35] border-0 flex items-center justify-center"
                    icon={<MinusOutlined />}
                  />
                  <Input
                    value={quantity}
                    className="text-center w-16 bg-white/5 border-white/10 text-white"
                    readOnly
                  />
                  <Button
                    onClick={() => quantity < 10 && setQuantity(quantity + 1)}
                    className="bg-[#FAAD14] text-[#281E35] border-0 flex items-center justify-center"
                    icon={<PlusOutlined />}
                  />
                </div>
              </div>


              <div className="flex justify-between items-center mb-8">
                <Text className="text-white/80 text-lg">Total:</Text>
                <Text className="text-[#FAAD14] text-2xl font-bold">
                  ${totalPrice.toFixed(2)}
                </Text>
              </div>


              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <Link to={`/products/${productId}`} className="flex-1">
                  <Button 
                    className="w-full h-12 border-white/30 text-black hover:text-white/80"
                  >
                    Cancel
                  </Button>
                </Link>
                <Button
                  onClick={handleProcedCheckout}
                  className="flex-1 h-12 bg-[#FAAD14] hover:bg-[#FAAD14]/90 text-[#281E35] font-bold"
                >
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;