import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  // Temp fonts
  fonts: {
    title: "Space Grotesk, sans-serif",
    main: "Space Grotesk, sans-serif",
  },
  // Colors for layout
  colors: {
    primary: "#018673",
    background: "#020024",
    secondary: "#120755",
  },
  // Breakpoints for responsive design
  breakpoints: {
    sm: "screen and (max-width: 640px)",
    md: "screen and (max-width: 768px)",
    lg: "screen and (max-width: 1024px)",
    xl: "screen and (max-width: 1280px)",
  },
};

export default theme;
