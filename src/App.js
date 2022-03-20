import React from "react";
import Router from "./router/Router";
import { BrowserRouter } from "react-router-dom";
import { GlobalState } from "./components/Global/GlobalState";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './constants/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalState>
        <Router />
      </GlobalState>
      </BrowserRouter>
      </ThemeProvider>
  );
};

export default App;
