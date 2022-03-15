import React from "react";
import Router from "./router/Router";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import { GlobalState } from "./components/Global/GlobalState";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './constants/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalState>
        <Header />
        <Router />
      </GlobalState>
      </BrowserRouter>
      </ThemeProvider>
  );
};

export default App;
