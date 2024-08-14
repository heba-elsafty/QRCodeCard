// src/App.tsx
import React from "react";
import QrCard from "./components/QrCode";
import "./styles/global.scss";

const App: React.FC = () => {
  return (
    <div className="app">
      <main>
        <QrCard
          title={"Improve your front-end skills by building projects"}
          description={
            "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
          }
        />
      </main>

      <footer>
        <p className="text-sm">
          <strong>Challenge by: </strong>
          <a
            href="https://www.frontendmentor.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor.
          </a>
        </p>
        <p className="text-sm">
          <strong> Coded by: </strong>
          <a
            href="https://github.com/heba-elsafty"
            target="_blank"
            rel="noopener noreferrer"
          >
            Heba Elsafty
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
