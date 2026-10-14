import React from "react";
import "./App.css";
import { CalculatorPage } from "./pages";

const App = () => {
  return (
    <div className="App">
      <CalculatorPage />
      <p>Déployé avec une pipeline CI/CD 🚀</p>
    </div>
  );
};

export default App;