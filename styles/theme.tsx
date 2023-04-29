import { ThemeProvider } from "styled-components";
import theme from "../theme";
import GlobalStyles from "./global-styles";

interface IThemeComp {
  children: React.ReactNode;
}

const Theme = ({ children }: IThemeComp) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
