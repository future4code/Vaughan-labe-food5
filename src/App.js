import React from 'react';
import Router from "./router/Router";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
  );
}


export default App;
