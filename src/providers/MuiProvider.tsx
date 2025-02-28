import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { StylesProvider } from "@mui/styles";

import theme from "@/theme";

import { IChildren } from "./interface";

export const MuiPorvider = ({ children }: IChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StylesProvider>{children}</StylesProvider>
    </ThemeProvider>
  );
};
