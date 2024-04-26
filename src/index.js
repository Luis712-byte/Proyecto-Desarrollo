import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { FiltersProvider } from './context/filters.jsx';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootswatch/dist/sandstone/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FiltersProvider> {/* Aquí se envuelve la App con FiltersProvider */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FiltersProvider>
  </React.StrictMode>
);

// Si deseas comenzar a medir el rendimiento de tu aplicación, puedes usar reportWebVitals.
reportWebVitals();
