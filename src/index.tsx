import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import PageTitle from "./ui/containers/PageTitle";
import Navigation from "./ui/containers/Navigation";
import * as ReactDOM from "react-dom";
import * as React from "react";

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <PageTitle />
  </React.StrictMode>,
  document.getElementById("root")
);
