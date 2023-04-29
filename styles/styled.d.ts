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
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
