import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import { useGetAllproductQuery } from "../../redux/features/admin/productManagementApi";
import { TProduct } from "../../types";
import ProductCard from "./ProductCard";

const { Title } = Typography;
const ProductContainer = () => {
  const { data: products } = useGetAllproductQuery([{}]);
  
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <Title level={2} className="!text-4xl !font-bold !mb-4 !text-white">
          Featured Products
        </Title>
        <p className="text-lg text-white">
          Discover our premium collection of stationery
        </p>
      </div>

      <Row gutter={[24, 24]} justify="center">
        {products?.data &&
          (products?.data as TProduct[])
            .slice(0, 6)  
            .map(({ _id, name, image, description, price }) => (
              <ProductCard
                key={_id}
                _id={_id}
                name={name}
                image={image}
                description={description}
                price={price}
              />
            ))}
      </Row>

      <div className="text-center mt-12">
        <Link to="/products">
          <Button
            type="primary"
            className="bg-[#281E35] hover:bg-[#281E35]/90 !text-white !font-medium !h-12 !px-8 !flex !items-center"
            icon={<ArrowRightOutlined />}
          >
            View All Products
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductContainer;

