import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      title: string;
      main: string;
    };
    colors: {
      primary: string;
      background: string;
      secondary: string;
      white: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    fontsize: {
      heading: string;
      subheading: string;
      normal: string;
      small: string;
    };
  }
}
