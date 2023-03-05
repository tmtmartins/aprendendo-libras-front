import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import PageTitle from "./ui/containers/PageTitle";
import Navigation from "./ui/containers/Navigation";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Navigation />
    <PageTitle />
  </React.StrictMode>
);
