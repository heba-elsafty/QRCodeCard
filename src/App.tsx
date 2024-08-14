// src/App.tsx
import React from "react";
import QrCard from "./components/QrCode";
import "./styles/global.scss";

const App: React.FC = () => {
  return (
    <div  className="app">
      <QrCard
        title={"Improve your front-end skills by building projects"}
        description={"Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"}
      />
    </div>
  );
};

export default App;
