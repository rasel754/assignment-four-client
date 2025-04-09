import { Col, Row, Typography } from "antd";
import { useTheme } from "../../constants/ThemeContext";
import { scriptCardObject } from "../../uitls/about";

const { Title } = Typography;

const ScriptContainer = () => {
  const { theme } = useTheme();

  return (
    <div
      className="py-16 px-4"
      style={{
        backgroundColor: theme.primary,
        color: theme.text,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <Title
          level={1}
          className="!text-white !text-3xl md:!text-4xl !mb-4 text-center font-bold"
        >
          Reasons to <span className="text-[#FAAD14]">Love Script & Scroll</span>
        </Title>

        <p className="text-white/80 text-center max-w-2xl mx-auto mb-12 text-lg">
          Discover what makes our stationery products stand out from the rest
        </p>

        <Row gutter={[24, 24]} justify="center">
          {scriptCardObject.map((card) => (
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
              <img
                src={card.image}
                style={{ width: "100%", height: "450px", opacity: "0.6" }}
                alt="About-image"
              />

              <Title
              style={{color: "white"}}
                className="text-sm h-12 line-clamp-2 block mb-4"
                level={3}
              >
                {card.title}
              </Title>
              <p>{card.description}</p>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ScriptContainer;
