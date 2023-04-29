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
    white: "#ffffff",
  },
  // Breakpoints for responsive design
  breakpoints: {
    sm: "screen and (max-width: 640px)",
    md: "screen and (max-width: 768px)",
    lg: "screen and (max-width: 1024px)",
    xl: "screen and (max-width: 1280px)",
  },
  // font size
  fontsize: {
    heading: "2rem",
    subheading: "1.5rem",
    normal: "1rem",
    small: "0.6rem",
  },
};

export default theme;
