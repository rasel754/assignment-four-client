import { MessageOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import questionImage from "../../assets/about-image/question.jpg";
import ScriptSelectInput from "../form/ScriptSelectInput";
import { useTheme } from "../../constants/ThemeContext";
import ScriptForm from "../form/ScriptForm";
import ScriptInput from "../form/ScriptInput";
import ScriptTextarea from "../form/ScriptTextarea";

const { Title } = Typography;

interface ServiceOption {
  value: string;
  label: string;
}

const chooseServicesOptions: ServiceOption[] = [
  { value: "support", label: "Support" },
  { value: "inquiry", label: "Inquiry" },
  { value: "other", label: "Other" },
];

const ScriptContactContainer: React.FC = () => {
  const { theme } = useTheme();
  
  const handleContactMessageSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <Row 
      className="items-stretch"
      style={{ 
        backgroundColor: theme.primary,
        color: theme.text,
      }}
    >
      <Col xs={24} md={12} className="hidden md:block">
        <div className="h-full">
          <img
            src={questionImage}
            className="w-full h-full object-cover"
            alt="question-image"
          />
        </div>
      </Col>
      
      <Col xs={24} md={12} className="p-8 md:p-12">
        <Title level={2} className="!text-white !mb-8 !text-3xl">
          Have Questions? <span className="text-[#FAAD14]">Get In Touch</span>
        </Title>
        
        <ScriptForm onSubmit={handleContactMessageSubmit}>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <ScriptInput
                type="text"
                name="name"
                label="Name"
                placeholder="Enter your name..."
                className="bg-white/5 border-white/10 text-white"
              />
            </Col>
            <Col xs={24} md={12}>
              <ScriptInput
                type="email"
                name="email"
                label="Email Address"
                placeholder="Enter your email address..."
                className="bg-white/5 border-white/10 text-white"
              />
            </Col>
            <Col xs={24} md={12}>
              <ScriptInput
                type="number"
                name="phone"
                label="Phone/Whatsapp"
                placeholder="Enter your number..."
                className="bg-white/5 border-white/10 text-white"
              />
            </Col>
            <Col xs={24} md={12}>
              <ScriptSelectInput
                name="supportType"
                options={chooseServicesOptions}
                label="Select Support"
                placeholder="Choose Services"
                className="bg-white/5 border-white/10 text-white"
              />
            </Col>
            <Col span={24}>
              <ScriptTextarea
                name="message"
                rows={5}
                label="How can we help?"
                placeholer="Message goes here..."
                className="bg-white/5 border-white/10 text-white"
              />
            </Col>
          </Row>
          
          <Button
            type="primary"
            htmlType="submit"
            className="mt-6 bg-[#FAAD14] hover:bg-[#FAAD14]/90 !text-[#281E35] h-12 px-8 font-medium flex items-center"
            icon={<MessageOutlined className="text-lg" />}
          >
            Send Message
          </Button>
        </ScriptForm>
      </Col>
    </Row>
  );
};

export default ScriptContactContainer;

