import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import PostContextProvider from "./components/context/PostContextProvider";
import BMProvider from "./components/context/BMProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <PostContextProvider>
      <BMProvider>
        <App />
      </BMProvider>
    </PostContextProvider>
  </BrowserRouter>
);
