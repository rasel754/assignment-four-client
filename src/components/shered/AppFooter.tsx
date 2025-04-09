import { Layout, Typography } from "antd";
import { useTheme } from "../../constants/ThemeContext";
import logo from "../../assets/images/logo.webp";


const { Footer } = Layout;
const { Title, Text } = Typography;

const AppFooter = () => {
  const { theme } = useTheme();
  
  return (
    <Footer 
      className="w-full py-12 px-4 sm:px-8 md:px-12 lg:px-16"
      style={{ 
        backgroundColor: theme.primary,
        color: theme.text,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">


          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={logo} 
                width={40} 
                height={40} 
                alt="Script & Scroll logo" 
                className="rounded-full"
              />
              <Title level={3} className="!text-white !mb-0">
              Script & Scroll Industries Ltd.
              </Title>
            </div>
            <Text className="text-white/80">
              Providing reliable stationery since 1992
            </Text>
            <div className="flex space-x-4 mt-4">
              {['Facebook', 'Twitter', 'Instagram'].map(social => (
                <a 
                  key={social}
                  href="#" 
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>


          <div className="flex flex-col space-y-4">
            <Title level={5} className="!text-white !mb-4 font-semibold">
              Services
            </Title>
            {['Branding', 'Design', 'Marketing', 'Advertisement'].map(service => (
              <a 
                key={service}
                href="#" 
                className="text-white/70 hover:text-white transition-colors w-fit hover:underline underline-offset-4"
              >
                {service}
              </a>
            ))}
          </div>


          <div className="flex flex-col space-y-4">
            <Title level={5} className="!text-white !mb-4 font-semibold">
              Company
            </Title>
            {['About us', 'Contact', 'Jobs', 'Press kit'].map(item => (
              <a 
                key={item}
                href="#" 
                className="text-white/70 hover:text-white transition-colors w-fit hover:underline underline-offset-4"
              >
                {item}
              </a>
            ))}
          </div>


          <div className="flex flex-col space-y-4">
            <Title level={5} className="!text-white !mb-4 font-semibold">
              Legal
            </Title>
            {['Terms of use', 'Privacy policy', 'Cookie policy'].map(item => (
              <a 
                key={item}
                href="#" 
                className="text-white/70 hover:text-white transition-colors w-fit hover:underline underline-offset-4"
              >
                {item}
              </a>
            ))}
          </div>
        </div>


        <div className="border-t border-white/10 mt-12 pt-8">
          <Text className="text-white/60 text-center">
            © {new Date().getFullYear()} Script & Scroll Industries Ltd. All rights reserved.
          </Text>
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;