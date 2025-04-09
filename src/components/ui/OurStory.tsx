import { Typography } from "antd";
import { useTheme } from "../../constants/ThemeContext";

const { Title, Text } = Typography;

const OurStory: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div 
      className="py-20 px-4 text-center"
      style={{ 
        backgroundColor: theme.primary,
        color: theme.text,
      }}
    >
      <div className="max-w-4xl mx-auto">
        <Text className="text-[#FAAD14] uppercase tracking-widest text-sm mb-4">
          OURSTORY
        </Text>
        
        <Title level={1} className="!text-white !text-4xl md:!text-5xl !mb-8">
          <span className="italic font-light">We Believe that</span>{' '}
          <span className="font-bold">STATIONERY</span>{' '}
          <span className="italic font-light">is more than pen and paper</span>
        </Title>
        
        <Title level={1} className="!text-white !text-3xl md:!text-4xl !mb-10">
          <span className="italic font-light">It's a powerful way to make each day</span>{' '}
          <span className="font-bold text-[#FAAD14]">NOTEWORTHY.</span>
        </Title>
        
        <Text className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto">
        Born in 2025, Script & Scroll turns ordinary moments into meaningful rituals with thoughtfully crafted paper goods. From bold ideas to quiet reflections, to-do lists to heartfelt letters — our stationery isn’t just paper, it’s a canvas for your story. Think, plan, dream, and celebrate — one page at a tim
        </Text>
      </div>
    </div>
  );
};

export default OurStory;


