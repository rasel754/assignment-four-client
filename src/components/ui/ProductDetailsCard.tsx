

import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Col, Row, Tag, Typography } from "antd";
import { Link } from "react-router-dom";
import { TProduct } from "../../types";
import { useTheme } from "../../constants/ThemeContext";

const { Title, Text } = Typography;

const ProductDetailsCard = ({ product }: { product: TProduct }) => {

  const { theme } = useTheme();

  return (
    <Row
      gutter={[32, 32]}
      className="p-6 rounded-xl shadow-2xl"
      style={{
        backgroundColor: theme.primary,
        color: theme.text,
      }}
    >

      <Col xs={24} md={10} lg={8} className="flex justify-center">
        <div className="relative">
          <img
            className="w-full h-auto max-h-[400px] object-contain rounded-lg border-2 border-white/10 p-4"
            src={product?.image}
            alt={product?.name}
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
              <Tag color="red" className="text-lg font-bold px-4 py-1">
                OUT OF STOCK
              </Tag>
            </div>
          )}
        </div>
      </Col>


      <Col xs={24} md={14} lg={16}>
        <div className="flex flex-col h-full">
          <Title level={2} className="!text-white !mb-4 !text-3xl">
            {product?.name}
          </Title>

          <Text className="text-white/80 text-lg mb-6">
            {product?.description}
          </Text>

          <div className="flex flex-wrap gap-4 mb-6">
            <Tag color="#FAAD14" className="text-[#281E35] text-base px-3 py-1">
              Category: {product?.category}
            </Tag>
            <Tag color="#FAAD14" className="text-[#281E35] text-base px-3 py-1">
              Quantity: {product?.quantity}
            </Tag>
            <Tag
              color={product.inStock ? "green" : "red"}
              className="text-base px-3 py-1"
            >
              {product.inStock ? "IN STOCK" : "OUT OF STOCK"}
            </Tag>
          </div>

          <div className="mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <Title level={1} className="!text-[#FAAD14] !m-0 !text-4xl">
              ${product?.price?.toFixed(2)}
            </Title>

            <Link
              to={product.inStock ? "cart" : "#"}
              className="w-full sm:w-auto"
            >
              <Button
                
                disabled={!product.inStock}
                size="large"
                className={`h-12 px-8 text-lg font-medium ${
                  product.inStock
                    ? "bg-[#FAAD14] hover:bg-[#FAAD14]/90 text-[#281E35]"
                    : "bg-gray-500 text-white cursor-not-allowed"
                }`}
                icon={<ShoppingCartOutlined className="text-xl" />}
              >
                {product.inStock ? "Add to Cart" : "Unavailable"}
              </Button>
            </Link>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailsCard;
