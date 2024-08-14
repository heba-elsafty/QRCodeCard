// src/App.tsx
import React from "react";
import QrCard from "./components/QrCode";

const App: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", padding: "1rem" }}>
      <QrCard
        title={"Improve your front-end skills by building projects"}
        description={"Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"}
      />
    </div>
  );
};

export default App;
