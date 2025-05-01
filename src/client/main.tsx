import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App.tsx";
import "./global.css";
import { initGA } from "./utils/analytics";
import RouteChangeTracker from "./utils/RouteChangeTracker";

// Initialize Google Analytics
initGA('G-MK7EC996CC');

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <RouteChangeTracker />
      <App />
    </BrowserRouter>
  </Provider>
);
