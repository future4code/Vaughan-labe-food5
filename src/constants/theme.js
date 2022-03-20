import { createTheme } from '@material-ui/core/styles';
import { primaryColor,  secondaryColor} from './colors';

export const theme = createTheme({
  palette: {
    primary: {
    
      main: primaryColor,
       contrastText: "white"
    },
    text:{

    },
    secondary : {
        main: secondaryColor,
    },



}

});

export default theme 