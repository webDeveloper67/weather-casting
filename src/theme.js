import { createTheme } from "@material-ui/core/styles";
import { deepPurple, indigo } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      light: "#8561c5",
      main: "#673ab7",
      dark: "#482880",
      contrastText: "#fff",
    },
    secondary: {
      light: "#637bfe",
      main: "#3d5afe",
      dark: "#2a3eb1",
      contrastText: "#fff",
    },
    openTitle: deepPurple["400"],
    protectedTitle: indigo["400"],
    type: "light",
  },
});

export default theme;
