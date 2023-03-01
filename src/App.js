import React from "react";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./contexts/Global";
import { Header } from "./components/Header";
import { ToastProvider } from "react-toast-notifications";

import "./style.css";

const App = () => {
  return (
    <GlobalProvider>
      <ToastProvider placement="bottom-center" autoDismiss={true}>
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
      </ToastProvider>
    </GlobalProvider>
  );
};

export default App;
