import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import "../../styles/tailwind.css";

import getAuththTokenFromLocalStorage from "../../utils/getAuthToken.js";
import "../../styles/dashboard.css";

import webpackImage from "../../assets/images/webpack.png";

const App = () => {
  const context = JSON.parse(document.getElementById("context").textContent);

  useEffect(() => {
    const token = getAuththTokenFromLocalStorage();
    if (token === "") window.location.href = "/auth";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <p>{context}</p>
      <p>Content 2</p>
      <div style={{ color: "red" }}>Content 3</div>
      <div className="font-bold dark:text-white">Content 4</div>
      <img
        className="w-64 h-64 object-cover mt-12 mb-12"
        src={webpackImage}
        alt="wepack"
      />
      <button
        onClick={() => {
          localStorage.removeItem("boilerplate_authtoken");
          window.location.href = "/auth";
        }}
      >
        <p>Logout</p>
      </button>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
