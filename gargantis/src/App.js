import React from "react";
import { Button } from "primereact/button";

function App() {
  return (
    <div
      className="p-d-flex p-jc-center p-ai-center"
      style={{ height: "100vh" }}
    >
      <h1>Welcome to Gargantis</h1>
      <Button
        label="Get Started"
        icon="pi pi-check"
        className="p-button-raised p-button-success"
      />
    </div>
  );
}

export default App;
