// Main app file

import { RouterProvider } from "react-router-dom";

import router from "./routes/router";

import "primereact/resources/themes/saga-green/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./App.css";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
