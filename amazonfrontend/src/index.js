import React from "react";
import ReactDOM from "react-dom/client";
import { StateProvider } from "./StateProvider";
import Reducer, { initialState } from "./reducer";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={Reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
