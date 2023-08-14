import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./components/context/Contextprovider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ContextProvider>
);
