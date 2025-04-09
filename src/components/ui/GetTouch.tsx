import { Button, Input, Typography } from "antd";
import { useTheme } from "../../constants/ThemeContext";

const { Title, Text } = Typography;
const GetTouch = () => {
  const { theme } = useTheme();
  
  return (
    <div 
      className="py-16 px-4 my-16 rounded-xl"
      style={{ 
        backgroundColor: theme.primary,
        color: theme.text,
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Title 
            level={2} 
            className="!text-white !text-3xl md:!text-4xl !mb-4"
          >
            Stay Connected With Us
          </Title>
          <Text className="text-white/80 text-lg">
            Subscribe to get exclusive offers, stationery tips, and updates
          </Text>
        </div>

        <form className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Your email address"
              className="flex-1 h-12 px-6 rounded-lg border-0 text-base"
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: theme.text,
              }}
            />
            <Button
              type="primary"
              className="h-12 px-8 text-base font-medium rounded-lg"
              style={{ 
                backgroundColor: '#FAAD14',
                color: theme.primary,
              }}
            >
              Subscribe
            </Button>
          </div>
          <Text className="text-white/60 text-sm mt-3 block">
            We respect your privacy. Unsubscribe at any time.
          </Text>
        </form>

        <div className="mt-12 flex justify-center gap-6">
          {['Facebook', 'Twitter', 'Instagram'].map((social) => (
            <Button
              key={social}
              type="text"
              className="text-white/80 hover:text-white !flex items-center"
            >
              {social}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetTouch;



