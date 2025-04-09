import ScriptContactContainer from "../components/ui/ScriptContactContainer";
import ScriptContainer from "../components/ui/ScriptContainer";
import OurStory from "../components/ui/OurStory";

const About = () => {
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <OurStory />
      <ScriptContainer />
      <ScriptContactContainer />
    </div>
  );
};

export default About;
