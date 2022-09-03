import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { RickAndMortyApp } from "./RickAndMortyApp";
import { store } from "./store";
import { AppTheme } from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppTheme>
          <RickAndMortyApp />
        </AppTheme>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
