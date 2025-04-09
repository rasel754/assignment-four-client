import { Card, Col, Row, Typography } from "antd";

const { Title, Text } = Typography;

const BestOffers = () => {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto" style={{ backgroundColor: '#281E35' }}>
      <div className="text-center mb-12">
        <Title level={2} className="text-4xl font-bold mb-4">
         <span className="text-white"> Exclusive Offers Just For You</span>
        </Title>
        <Text className="text-lg" style={{ color: 'rgba(255,255,255,0.8)' }}>
          Limited time deals to save on your next purchase
        </Text>
      </div>

      <Row gutter={[24, 24]} justify="center">
        {/* First Coupon */}
        <Col xs={24} lg={12}>
          <Card 
            className="h-full border-0 shadow-lg rounded-2xl overflow-hidden"
            bodyStyle={{ padding: 0 }}
          >
            <div className="flex flex-col md:flex-row h-full">
              <div className="bg-[#4A3B5A] p-8 flex-1 flex flex-col justify-center items-center text-center">
                <div className="mb-4">
                  <span className="bg-white text-[#4A3B5A] px-4 py-1 rounded-full text-sm font-bold">
                    LIMITED TIME
                  </span>
                </div>
                <Title level={1} className="text-6xl font-black mb-2 text-white">
                  15% OFF
                </Title>
                <Text className="text-lg font-medium" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  On your next purchase
                </Text>
                <Text className="text-sm mt-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Valid until Jan 31, 2024
                </Text>
              </div>
              <div className="bg-white p-8 flex-1 flex flex-col justify-center items-center border-l border-dashed border-gray-200">
                <div className="text-center">
                  <Text className="text-gray-500 mb-2">Use code</Text>
                  <Title level={3} className="text-3xl font-bold text-[#281E35] mb-4">
                    NEW15
                  </Title>
                  <button 
                    className="font-bold py-2 px-6 rounded-full transition duration-300"
                    style={{ backgroundColor: '#281E35', color: '#ffffff' }}
                  >
                    Copy Code
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </Col>

        {/* Second Coupon */}
        <Col xs={24} lg={12}>
          <Card 
            className="h-full border-0 shadow-lg rounded-2xl overflow-hidden"
            bodyStyle={{ padding: 0 }}
          >
            <div className="flex flex-col md:flex-row h-full">
              <div className="bg-[#5D4A6A] p-8 flex-1 flex flex-col justify-center items-center text-center">
                <div className="mb-4">
                  <span className="bg-white text-[#5D4A6A] px-4 py-1 rounded-full text-sm font-bold">
                    SPECIAL DEAL
                  </span>
                </div>
                <Title level={1} className="text-6xl font-black mb-2 text-white">
                  20% OFF
                </Title>
                <Text className="text-lg font-medium" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  For couples purchase
                </Text>
                <Text className="text-sm mt-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Valid until Jan 31, 2024
                </Text>
              </div>
              <div className="bg-white p-8 flex-1 flex flex-col justify-center items-center border-l border-dashed border-gray-200">
                <div className="text-center">
                  <Text className="text-gray-500 mb-2">Use code</Text>
                  <Title level={3} className="text-3xl font-bold text-[#281E35] mb-4">
                    COUPLE20
                  </Title>
                  <button 
                    className="font-bold py-2 px-6 rounded-full transition duration-300"
                    style={{ backgroundColor: '#281E35', color: '#ffffff' }}
                  >
                    Copy Code
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      <div className="text-center mt-8">
        <button className="font-semibold underline" style={{ color: '#ffffff' }}>
          View all offers →
        </button>
      </div>
    </section>
  );
};

export default BestOffers;