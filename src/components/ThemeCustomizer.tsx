import { HexColorPicker } from "react-colorful";
import { useTheme } from "../constants/ThemeContext";

const ThemeCustomizer = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <label>
        Primary Color:
        <HexColorPicker
          color={theme.primary}
          onChange={(color) => setTheme((prev) => ({ ...prev, primary: color }))}
        />
      </label>
      <label>
        Background Color:
        <HexColorPicker
          color={theme.background}
          onChange={(color) => setTheme((prev) => ({ ...prev, background: color }))}
        />
      </label>
      <label>
        Text Color:
        <HexColorPicker
          color={theme.text}
          onChange={(color) => setTheme((prev) => ({ ...prev, text: color }))}
        />
      </label>
    </div>
  );
};

export default ThemeCustomizer;
