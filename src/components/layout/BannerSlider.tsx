import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Carousel, Col, Row, Typography } from "antd";

import Pen from "../../assets/Slider-images/gel-pen.jpg";
import Stapler from "../../assets/Slider-images/Stapler.jpg";
import set from "../../assets/Slider-images/Pen-Set.jpg";

import { useTheme } from "../../constants/ThemeContext";

const { Title, Text } = Typography;
const BannerSlider = () => {
  const { theme } = useTheme();
  
  return (
    <Carousel
      autoplay
      className="my-8 rounded-lg overflow-hidden shadow-xl"
      style={{
        backgroundColor: theme.primary,
        color: theme.text,
      }}
    >

      {/* Slide 1 - Gel Pen */}
      <div className="p-8">
        <Row align="middle" gutter={[24, 24]}>
          <Col xs={24} md={12} className="flex flex-col justify-center">
            <div className="max-w-lg mx-auto">
              <Text className="text-white/80 uppercase tracking-wider">New Arrival</Text>
              <Title level={1} className="!text-white !text-4xl md:!text-5xl !mb-4 !mt-2">
                Premium <span className="text-[#FFD700]">Gel Pens</span>
              </Title>
              <Text className="text-white/90 text-lg mb-6">
                Experience smooth writing with our premium gel ink technology. 
                Perfect for professionals and creatives alike.
              </Text>
              <div className="flex items-center gap-6 mb-8">
                <Title level={3} className="!text-[#FFD700] !m-0 !text-3xl">$30</Title>
                <Text className="text-white/70 line-through">$45</Text>
                <span className="bg-[#FFD700]/20 text-[#FFD700] px-2 py-1 rounded text-sm">
                  33% OFF
                </span>
              </div>
              <Button 
                type="primary" 
                size="large"
                className="bg-[#FFD700] hover:bg-[#FFD700]/90 !text-[#281E35] font-bold h-12 px-8 flex items-center"
                icon={<ShoppingCartOutlined className="text-lg" />}
              >
                Add to Cart
              </Button>
            </div>
          </Col>
          <Col xs={24} md={12} className="flex justify-center">
            <img 
            style={{opacity: 0.6}}
              src={Pen} 
              alt="Gel Pen" 
              className="h-72 md:h-96 object-contain animate-float" 
            />
          </Col>
        </Row>
      </div>

      {/* Slide 2 - Penset */}
      <div className="p-8">
        <Row align="middle" gutter={[24, 24]}>
          <Col xs={24} md={12} className="flex flex-col justify-center">
            <div className="max-w-lg mx-auto">
              <Text className="text-white/80 uppercase tracking-wider">Best Seller</Text>
              <Title level={1} className="!text-white !text-4xl md:!text-5xl !mb-4 !mt-2">
                Professional <span className="text-[#FFD700]">Pen Set</span>
              </Title>
              <Text className="text-white/90 text-lg mb-6">
                Complete writing solution with 12 premium pens in various colors. 
                Elevate your writing experience.
              </Text>
              <div className="flex items-center gap-6 mb-8">
                <Title level={3} className="!text-[#FFD700] !m-0 !text-3xl">$55</Title>
                <Text className="text-white/70 line-through">$75</Text>
                <span className="bg-[#FFD700]/20 text-[#FFD700] px-2 py-1 rounded text-sm">
                  27% OFF
                </span>
              </div>
              <Button 
                type="primary" 
                size="large"
                className="bg-[#FFD700] hover:bg-[#FFD700]/90 !text-[#281E35] font-bold h-12 px-8 flex items-center"
                icon={<ShoppingCartOutlined className="text-lg" />}
              >
                Add to Cart
              </Button>
            </div>
          </Col>
          <Col xs={24} md={12} className="flex justify-center">
            <img 
            style={{opacity: 0.6}}
              src={set} 
              alt="Pen Set" 
              className="h-80 md:h-[28rem] object-contain animate-float" 
            />
          </Col>
        </Row>
      </div>

      {/* Slide 3 - Stapler */}
      <div className="p-8">
        <Row align="middle" gutter={[24, 24]}>
          <Col xs={24} md={12} className="flex flex-col justify-center">
            <div className="max-w-lg mx-auto">
              <Text className="text-white/80 uppercase tracking-wider">Office Essential</Text>
              <Title level={1} className="!text-white !text-4xl md:!text-5xl !mb-4 !mt-2">
                Heavy Duty <span className="text-[#FFD700]">Stapler</span>
              </Title>
              <Text className="text-white/90 text-lg mb-6">
                Industrial-strength stapler for all your office needs. 
                Durable construction with smooth operation.
              </Text>
              <div className="flex items-center gap-6 mb-8">
                <Title level={3} className="!text-[#FFD700] !m-0 !text-3xl">$12.00</Title>
                <Text className="text-white/70 line-through">$16.50</Text>
                <span className="bg-[#FFD700]/20 text-[#FFD700] px-2 py-1 rounded text-sm">
                  27% OFF
                </span>
              </div>
              <Button 
                type="primary" 
                size="large"
                className="bg-[#FFD700] hover:bg-[#FFD700]/90 !text-[#281E35] font-bold h-12 px-8 flex items-center"
                icon={<ShoppingCartOutlined className="text-lg" />}
              >
                Add to Cart
              </Button>
            </div>
          </Col>
          <Col xs={24} md={12} className="flex justify-center">
            <img 
            style={{opacity: 0.6}}
              src={Stapler} 
              alt="Stapler" 
              className="h-72 md:h-96 object-contain animate-float" 
            />
          </Col>
        </Row>
      </div>
    </Carousel>
  );
};

export default BannerSlider;





