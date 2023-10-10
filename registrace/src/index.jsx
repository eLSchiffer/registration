import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Registration from "./components/registration";
import Icon from "./components/icon";

const App = () => {
  return (
    <div className="container">
      <header>
        <h1 className="caps">Registration</h1>
      </header>
      <main>
        <Registration />
        <Icon />
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
