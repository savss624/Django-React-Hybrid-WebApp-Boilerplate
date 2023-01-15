import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "../../styles/tailwind.css";

import getAuththTokenFromLocalStorage from "../../utils/getAuthToken.js";
import AuthContainer from "../../components/AuthContainer.jsx";

const App = () => {
  const [authToken, setAuthToken] = useState("");

  useEffect(() => {
    const token = getAuththTokenFromLocalStorage();
    if (token !== "") window.location.href = "/dashboard";
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <p className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          Company Name
        </p>
        <AuthContainer authToken={authToken} setAuthToken={setAuthToken} />
      </div>
    </section>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
