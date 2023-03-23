import react from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./Context/ThemeContextProvider/ThemeContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </BrowserRouter>
);
