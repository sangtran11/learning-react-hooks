import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./Theme/ThemeContext";
import { StoreProvider } from "./store"

function emitCustomEvent(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`course-${id}`, {
        detail: `Message from course-${id}`,
      })
    );
  }, 2000);
}

emitCustomEvent(1);
emitCustomEvent(2);
emitCustomEvent(3);

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
