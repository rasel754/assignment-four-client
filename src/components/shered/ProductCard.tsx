import { Button, Card, Col, Typography } from "antd";
import { Link } from "react-router-dom";
import { TProduct } from "../../types";

const { Title, Text } = Typography;
const ProductCard = ({
  _id,
  name,
  description,
  price,
  image,
}: Pick<TProduct, "_id" | "name" | "description" | "price" | "image">) => {

  return (
    <Col xs={24} sm={12} md={8} lg={6} className="px-2 py-4">
      <Card
        className="border-0 h-full "
        bodyStyle={{ padding: 0 }}
        style={{
          borderRadius: "12px",
          backgroundColor: "#281E35",
          color: "#ffffff",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 1.5)",
        }}
      >

        <div className="p-4">
          <div className="bg-white/10 rounded-xl flex items-center justify-center h-64">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-contain transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>


        <div className="px-4 pb-4">
          <Title
            level={4}
            className="!text-white !mb-2 !text-lg font-medium h-14 line-clamp-2"
          >
            {name}
          </Title>

          <Text className="text-white/80 text-sm h-12 line-clamp-2 block mb-4">
            {description}
          </Text>


          <div className="flex justify-between items-center">
            <div>
              <Title level={3} className="!text-[#FAAD14] !m-0 !text-xl">
                ${price}
              </Title>
              {price > 50 && (
                <Text className="text-white/50 line-through text-xs">
                  ${(price * 1.2).toFixed(2)}
                </Text>
              )}
            </div>

            <Link to={`/products/${_id}`}>
              <Button
                type="primary"
                className="bg-[#FAAD14] hover:bg-[#FAAD14]/90 !text-[#281E35] font-medium border-0"
              >
                View Details
              </Button>
            </Link>
          </div>
        </div>


        {price > 50 && (
          <div className="absolute top-4 right-4 bg-[#FAAD14] text-[#281E35] px-2 py-1 rounded-full text-xs font-bold">
            {price > 100 ? "PREMIUM" : "20% OFF"}
          </div>
        )}
      </Card>
    </Col>
  );
};

export default ProductCard;
