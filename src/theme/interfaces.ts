import { PaletteOptions, SimplePaletteColorOptions } from "@mui/material";
import { ColorPartial } from "@mui/material/styles/createPalette";

export interface IPalette extends PaletteOptions {
  primary?: SimplePaletteColorOptions & ColorPartial;
  secondary?: SimplePaletteColorOptions;
  success?: SimplePaletteColorOptions;
  warning?: SimplePaletteColorOptions;
  error?: SimplePaletteColorOptions;
}
