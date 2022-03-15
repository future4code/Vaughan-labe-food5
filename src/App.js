import React from 'react';
import Router from "./router/Router";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './constants/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
      </ThemeProvider>
  );
}


export default App;
