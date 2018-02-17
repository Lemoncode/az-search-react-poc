import { createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import pink from 'material-ui/colors/pink';import { dark } from 'material-ui/styles/createPalette';
;

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
    background: {
      default: "#eeeeee",
      paper: "#ffffff",
    }
  },
});

export { theme };