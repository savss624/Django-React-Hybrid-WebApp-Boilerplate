import React from "react";
import { createRoot } from "react-dom/client";
import "../../styles/tailwind.css";
import "../../styles/styles-2.css";
import App from "../../components/Component-2.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <h1 style={{ color: "red" }}>Hello World</h1>
    <App />
  </>
);
