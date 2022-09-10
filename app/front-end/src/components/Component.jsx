import React from "react";
import "../styles/tailwind.css";

const Component = () => {
  const CONTEXT_MSG = JSON.parse(
    document.getElementById("context").textContent
  );

  const [API_MSG, setAPI_MSG] = React.useState("");
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setAPI_MSG(data.msg);
      });
  }, []);

  return (
    <>
      <p className="font-bold underline">React Component</p>
      <p>{CONTEXT_MSG}</p>
      <p>{API_MSG}</p>
    </>
  );
};

export default Component;
