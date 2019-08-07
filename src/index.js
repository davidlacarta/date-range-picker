import React from "react";
import { render } from "react-dom";
import Calendar from "./Calendar";

function App() {
  return <Calendar />;
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
