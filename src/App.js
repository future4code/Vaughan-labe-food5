import React from "react";
import Router from "./router/Router";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import { GlobalState } from "./components/Global/GlobalState";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalState>
        <Header />
        <Router />
      </GlobalState>
    </BrowserRouter>
  );
};

export default App;
